/* Renders the page from window.PORTFOLIO (data/projects.js). Every number is computed from that data. */
(function () {
  "use strict";

  const data = window.PORTFOLIO;
  const copy = data.copy;
  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  /* Helpers */

  function el(tag, attrs, children) {
    const node = document.createElement(tag);
    Object.entries(attrs || {}).forEach(([key, value]) => {
      if (value !== null && value !== undefined) node.setAttribute(key, value);
    });
    (children || []).forEach((child) => {
      if (child !== null && child !== undefined) node.append(child);
    });
    return node;
  }

  function byId(id) {
    return document.getElementById(id);
  }

  function arrow(size) {
    const ns = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(ns, "svg");
    const path = document.createElementNS(ns, "path");
    Object.entries({
      "aria-hidden": "true",
      width: size,
      height: size,
      viewBox: "0 0 12 12",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "1.6"
    }).forEach(([key, value]) => svg.setAttribute(key, value));
    path.setAttribute("d", "M3.5 8.5l5-5M4.5 3.5h4v4");
    svg.append(path);
    return svg;
  }

  function fill(template, values) {
    return template.replace(/\{(\w+)\}/g, (match, key) => (key in values ? values[key] : match));
  }

  function monthKey(month) {
    const [year, number] = month.split("-").map(Number);
    return year * 12 + number - 1;
  }

  function keyLabel(key) {
    return MONTHS[key % 12] + " " + Math.floor(key / 12);
  }

  /* Computed values */

  const shownWork = data.work.concat(data.showCv ? [data.cv] : []);
  const groups = data.afterHours.groups;
  const afterHoursItems = groups.flatMap((group) => group.items);

  function monthKeys(items) {
    return items.filter((item) => item.lastWorked).map((item) => monthKey(item.lastWorked));
  }

  const afterHoursKeys = monthKeys(afterHoursItems);
  const firstKey = Math.min(...afterHoursKeys);
  const lastKey = Math.max(...afterHoursKeys);
  const recentCount = afterHoursKeys.filter((key) => key >= lastKey - 5).length;
  const latestKey = Math.max(...monthKeys(afterHoursItems.concat(shownWork)));

  /* Cell */

  function actionLabel(item) {
    if (!item.url || item.status === "private") return null;
    if (item.status === "live") return copy.actionTry;
    return copy.actionSource;
  }

  function imageSlot(item) {
    if (item.image) {
      return el("div", { class: "slot slot--image" }, [el("img", { src: item.image, alt: item.name, loading: "lazy" })]);
    }
    if (!data.showImagePlaceholders) return null;
    return el("div", { class: "slot" }, [fill(copy.imagePlaceholder, { name: item.name })]);
  }

  function metaRow(item) {
    const isNow = item.lastWorked && monthKey(item.lastWorked) === latestKey;
    return el("div", { class: "meta" }, [
      el("span", { class: "meta__status" }, [
        el("span", { class: "sw sw--" + item.status, "aria-hidden": "true" }),
        copy.status[item.status]
      ]),
      item.lastWorked
        ? el("span", { class: "meta__month" }, [
            isNow ? el("span", { class: "now", "aria-hidden": "true" }) : null,
            keyLabel(monthKey(item.lastWorked))
          ])
        : null
    ]);
  }

  function renderCell(item, headingTag, variant) {
    const label = actionLabel(item);
    const classes = ["cell", "cell--" + item.status];
    if (variant) classes.push("cell--" + variant);
    if (item.featured) classes.push("cell--featured");
    return el("article", { class: classes.join(" "), "data-status": item.status }, [
      el("div", { class: "cell__body" }, [
        item.featured ? imageSlot(item) : null,
        metaRow(item),
        el(headingTag, { class: "cell__name" }, [item.name]),
        el("p", { class: "cell__desc" }, [item.description]),
        label
          ? el("a", { class: "action", href: item.url, "aria-label": label + ": " + item.name }, [label, arrow(12)])
          : null
      ])
    ]);
  }

  /* Sections. Each one fills its own mount point, so they can be moved around in index.html. */

  function renderProfile() {
    const [first, ...rest] = data.profile.name.split(" ");
    byId("profile-name").replaceChildren(first, el("br"), rest.join(" "));
    byId("profile-tagline").textContent = data.profile.tagline;
    byId("profile-links").replaceChildren(
      ...data.profile.links.map((link) =>
        el("a", { class: "profile-link", href: link.url }, [link.label, arrow(14)])
      )
    );
  }

  function renderWork() {
    byId("work-heading").textContent = copy.workHeading;
    byId("work-count").textContent = fill(copy.workCount, { count: shownWork.length });
    const cells = byId("work-cells");
    cells.style.setProperty("--work-cols", shownWork.length);
    cells.replaceChildren(...shownWork.map((item) => renderCell(item, "h3", "work")));
  }

  function renderBand() {
    byId("after-hours-heading").textContent = copy.afterHoursHeading;
    byId("after-hours-intro").textContent = data.afterHours.intro;
    byId("after-hours-summary").textContent = fill(copy.summary, {
      first: keyLabel(firstKey),
      last: keyLabel(lastKey),
      recent: recentCount
    });
    byId("after-hours-total").replaceChildren(
      el("span", { class: "band__count" }, [String(afterHoursItems.length)]),
      el("span", { class: "band__count-label" }, [fill(copy.totalLabel, { groups: groups.length })])
    );
  }

  function sortedItems(group) {
    return group.items.slice().sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }

  function renderGroups() {
    byId("groups").replaceChildren(
      ...groups.map((group, index) => {
        const headingId = "group-" + index;
        const items = sortedItems(group);
        return el("section", { class: "group", "aria-labelledby": headingId }, [
          el("div", { class: "group__bar" }, [
            el("h3", { class: "group__title", id: headingId }, [group.name]),
            el("span", { class: "group__count" }, [String(items.length)])
          ]),
          el("div", { class: "board" }, items.map((item) => renderCell(item, "h4")))
        ]);
      })
    );
  }

  function renderFooter() {
    byId("footer-text").textContent = data.footer;
    byId("footer-links").replaceChildren(
      ...data.profile.links.map((link) => el("a", { href: link.url }, [link.label]))
    );
  }

  renderProfile();
  renderWork();
  renderBand();
  renderGroups();
  renderFooter();
})();

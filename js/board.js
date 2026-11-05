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

  /* Every link on the page leaves the site, so all of them open in a new tab. */
  function externalLink(attrs, children) {
    return el("a", { ...attrs, target: "_blank", rel: "noopener" }, children);
  }

  function byId(id) {
    return document.getElementById(id);
  }

  const ARROW_OUT = "M3.5 8.5l5-5M4.5 3.5h4v4";
  const ARROW_ON = "M1.5 6h9M7.5 3l3 3-3 3";

  function arrow(size, shape = ARROW_OUT) {
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
    path.setAttribute("d", shape);
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

  const shownWork = data.work.concat(data.showCv && data.cv ? [data.cv] : []);
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
    if (item.actionLabel) return item.actionLabel;
    if (item.status === "live") return copy.actionTry;
    return copy.actionSource;
  }

  /* A featured cell is two rows tall only when it has an image slot to fill. */
  function hasImageSlot(item) {
    return !!item.featured && (!!item.image || !!data.showImagePlaceholders);
  }

  function imageSlot(item) {
    if (item.image) {
      return el("div", { class: "slot slot--image" }, [el("img", { src: item.image, alt: item.name, loading: "lazy" })]);
    }
    if (!data.showImagePlaceholders) return null;
    return el("div", { class: "slot" }, [fill(copy.imagePlaceholder, { name: item.name })]);
  }

  /* Active: "Since Feb 2026", or "Feb 2026 ->" where that does not fit (see css/site.css).
     Finished: "Mar - Jul 2026", or "Jul 2026" within one month. */
  function whenParts(item) {
    if (item.period) return [item.period];
    if (!item.lastWorked) return null;
    const end = monthKey(item.lastWorked);
    if (!item.started) return [keyLabel(end)];
    const start = monthKey(item.started);
    if (item.active) {
      return [
        el("span", { class: "when-long" }, [fill(copy.since, { month: keyLabel(start) })]),
        el("span", { class: "when-short", "aria-hidden": "true" }, [keyLabel(start), arrow(12, ARROW_ON)])
      ];
    }
    if (start === end) return [keyLabel(end)];
    const sameYear = Math.floor(start / 12) === Math.floor(end / 12);
    return [fill(copy.range, { from: sameYear ? MONTHS[start % 12] : keyLabel(start), to: keyLabel(end) })];
  }

  function metaRow(item) {
    return el("div", { class: "meta" }, [
      el("span", { class: "meta__status" }, [
        el("span", { class: "sw sw--" + item.status, "aria-hidden": "true" }),
        copy.status[item.status]
      ])
    ]);
  }

  /* The bottom of a cell: the action on the left, the dates in the right corner. */
  function footRow(item) {
    const label = actionLabel(item);
    const parts = whenParts(item);
    if (!label && !parts) return null;
    const isNow = item.lastWorked && monthKey(item.lastWorked) === latestKey;
    return el("div", { class: "cell__foot" }, [
      label
        ? externalLink({ class: "action", href: item.url, "aria-label": label + ": " + item.name }, [label, arrow(12)])
        : null,
      parts
        ? el("span", { class: "meta__month" }, [isNow ? el("span", { class: "now", "aria-hidden": "true" }) : null, ...parts])
        : null
    ]);
  }

  function renderCell(item, headingTag, variant) {
    const classes = ["cell", "cell--" + item.status];
    if (variant) classes.push("cell--" + variant);
    if (item.featured) classes.push("cell--featured");
    if (hasImageSlot(item)) classes.push("cell--tall");
    return el("article", { class: classes.join(" "), "data-status": item.status }, [
      el("div", { class: "cell__body" }, [
        item.featured ? imageSlot(item) : null,
        metaRow(item),
        el(headingTag, { class: "cell__name" }, [item.name]),
        el("p", { class: "cell__desc" }, [item.description]),
        footRow(item)
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
        externalLink({ class: "profile-link", href: link.url }, [link.label, arrow(14)])
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
    /* Featured first, then live, archived last, otherwise the order in the data file. */
    const rank = (item) => {
      if (item.featured) return 0;
      if (item.status === "live") return 1;
      return item.status === "archived" ? 3 : 2;
    };
    return group.items.slice().sort((a, b) => rank(a) - rank(b));
  }

  const boards = [];

  function renderGroups() {
    byId("groups").replaceChildren(
      ...groups.map((group, index) => {
        const headingId = "group-" + index;
        const items = sortedItems(group);
        const board = el("div", { class: "board" }, items.map((item) => renderCell(item, "h4")));
        boards.push({ node: board, items: items });
        return el("section", { class: "group", "aria-labelledby": headingId }, [
          el("div", { class: "group__bar" }, [
            el("h3", { class: "group__title", id: headingId }, [group.name]),
            el("span", { class: "group__count" }, [String(items.length)])
          ]),
          board
        ]);
      })
    );
  }

  /* Filler cells. Packs the items the way CSS dense auto-flow does and counts the gaps left in the used rows. */

  function countGaps(items, cols, featuredRows) {
    const rows = [];
    const isFree = (row, col) => !rows[row] || !rows[row][col];

    items.forEach((item) => {
      const width = item.featured ? Math.min(2, cols) : 1;
      const height = hasImageSlot(item) ? featuredRows : 1;
      for (let row = 0; ; row++) {
        for (let col = 0; col + width <= cols; col++) {
          let fits = true;
          for (let y = row; y < row + height; y++) {
            for (let x = col; x < col + width; x++) {
              if (!isFree(y, x)) fits = false;
            }
          }
          if (fits) {
            for (let y = row; y < row + height; y++) {
              rows[y] = rows[y] || [];
              for (let x = col; x < col + width; x++) rows[y][x] = true;
            }
            return;
          }
        }
      }
    });

    let gaps = 0;
    for (let y = 0; y < rows.length; y++) {
      for (let x = 0; x < cols; x++) {
        if (isFree(y, x)) gaps++;
      }
    }
    return gaps;
  }

  function refreshFillers() {
    const styles = getComputedStyle(document.documentElement);
    const cols = parseInt(styles.getPropertyValue("--board-cols"), 10);
    const featuredRows = parseInt(styles.getPropertyValue("--featured-rows"), 10);
    boards.forEach(({ node, items }) => {
      node.querySelectorAll(".blank").forEach((blank) => blank.remove());
      const gaps = countGaps(items, cols, featuredRows);
      for (let i = 0; i < gaps; i++) node.append(el("div", { class: "blank", "aria-hidden": "true" }));
    });
  }

  function renderChips() {
    const mount = byId("status-chips");
    const statuses = Object.keys(copy.status);
    let picked = null;

    function apply() {
      buttons.forEach((button, index) => {
        button.setAttribute("aria-pressed", String(statuses[index] === picked));
      });
      byId("groups").querySelectorAll(".cell").forEach((cell) => {
        cell.classList.toggle("is-dim", picked !== null && cell.dataset.status !== picked);
      });
    }

    const buttons = statuses.map((status) => {
      const count = afterHoursItems.filter((item) => item.status === status).length;
      const button = el("button", { class: "chip", type: "button", "aria-pressed": "false" }, [
        el("span", { class: "sw sw--" + status, "aria-hidden": "true" }),
        copy.status[status],
        el("span", { class: "chip__count" }, [String(count)])
      ]);
      button.addEventListener("click", () => {
        picked = picked === status ? null : status;
        apply();
      });
      return button;
    });

    mount.setAttribute("role", "group");
    mount.setAttribute("aria-label", copy.chipsLabel);
    mount.replaceChildren(
      ...buttons,
      el("span", { class: "legend" }, [
        el("span", { class: "legend__mark", "aria-hidden": "true" }),
        fill(copy.nowLegend, { latest: keyLabel(latestKey) })
      ])
    );
  }

  function renderFooter() {
    byId("footer-text").textContent = data.footer;
    byId("footer-links").replaceChildren(
      ...data.profile.links.map((link) => externalLink({ href: link.url }, [link.label]))
    );
  }

  renderProfile();
  renderWork();
  renderBand();
  renderChips();
  renderGroups();
  renderFooter();
  refreshFillers();

  /* These two widths match the breakpoints in css/tokens.css. */
  ["(min-width: 1024px)", "(min-width: 640px)"].forEach((query) => {
    window.matchMedia(query).addEventListener("change", refreshFillers);
  });
})();

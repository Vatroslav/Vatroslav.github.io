# Vatroslav Mileusnić

My personal portfolio, live at **https://vatroslav.github.io/**. It is one board of what I build at work and after it, with the status of each project.

## How it works

Plain HTML, CSS and JavaScript, with no build step and no dependencies. GitHub Pages publishes `main` as it is, so every push goes live.

| Path | What it holds |
| --- | --- |
| `data/projects.js` | All page content. The fields are explained at the top of the file. |
| `js/board.js` | Renders the page from that data and computes every number on it. |
| `css/tokens.css` | Design tokens: colours, type sizes, spacing, breakpoints and font faces. |
| `css/site.css` | Layout and components. |
| `index.html` | The page shell, head tags and a static fallback for readers without JavaScript. |
| `og.png` | The image shown in link previews. |
| `fonts/` | Self-hosted fonts and their licenses. |

## Adding a project

Add one object to a group's `items` in `data/projects.js`. Counts, month ranges and status filters update on their own. If the project has a public link, also add it to the matching `noscript` list in `index.html`.

## Running it locally

From the repo root:

```bash
python -m http.server 8000
```

Then open http://localhost:8000.

## Credits

Designed with Claude Design, built with Claude Code. Set in [Archivo](https://github.com/Omnibus-Type/Archivo) and [Instrument Serif](https://github.com/Instrument/instrument-serif), both under the SIL Open Font License.

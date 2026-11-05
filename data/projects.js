// All page content. Add a project by adding one object to a group's items.
// status: live | open-source | private | archived. lastWorked: YYYY-MM. url: null for private.
// Optional per item: featured: true, image: "path/to/image.png", period: "Since Jul 2022".
// A period replaces the month in the cell and does not count towards any computed number.
// Counts, month range and the 'now' marker are computed from this file; never type them by hand.
// The name, tagline, profile links, section headings, intro and the noscript link lists also
// exist as static HTML in index.html for readers without JavaScript. Change them in both places.
window.PORTFOLIO = {
  "showCv": false,
  "showImagePlaceholders": false,
  "copy": {
    "workHeading": "At work",
    "workCount": "{count} things",
    "afterHoursHeading": "After hours",
    "totalLabel": "projects in {groups} groups",
    "summary": "Last worked on between {first} and {last}. {recent} of them in the last six months. Filled squares can be tried right now.",
    "nowLegend": "Worked on in {latest}",
    "chipsLabel": "Pick out by status",
    "status": {
      "live": "Live",
      "open-source": "Open source",
      "private": "Private",
      "archived": "Archived"
    },
    "actionTry": "Try it",
    "actionSource": "Source",
    "imagePlaceholder": "[Image placeholder: {name}]"
  },
  "profile": {
    "name": "Vatroslav Mileusnić",
    "tagline": "Product manager and co-founder of Tabu. I build things at work and after it.",
    "links": [
      {
        "label": "LinkedIn",
        "url": "https://www.linkedin.com/in/vatroslav-mileusnic"
      },
      {
        "label": "GitHub",
        "url": "https://github.com/Vatroslav"
      },
      {
        "label": "itch.io",
        "url": "https://vatroslav.itch.io/"
      }
    ]
  },
  "work": [
    {
      "name": "Tabu",
      "description": "Salary benchmarking in Croatia. I'm co-founder and CEO.",
      "status": "live",
      "lastWorked": null,
      "period": "Since Jul 2022",
      "url": "https://tabu.hr/en"
    },
    {
      "name": "Tabu calculators",
      "description": "Free tools from Tabu: a salary calculator and an employee turnover cost calculator.",
      "status": "live",
      "lastWorked": "2026-09",
      "url": "https://kalkulator.tabu.hr"
    },
    {
      "name": "AI Dev Playbook",
      "description": "Rules, skills, subagents, hooks and CI templates for teams building software with AI coding agents.",
      "status": "open-source",
      "lastWorked": "2026-10",
      "url": "https://github.com/Vatroslav/ai-dev-playbook"
    },
    {
      "name": "Next.js CSP nonce repro",
      "description": "Minimal reproduction of a Next.js bug: App Router emits the loading, template and error boundary chunk script without the CSP nonce.",
      "status": "open-source",
      "lastWorked": "2026-08",
      "url": "https://github.com/Vatroslav/next-csp-nonce-repro"
    }
  ],
  "afterHours": {
    "intro": "Nobody asked for any of this. I build it because I want to. Some of it is finished, some is abandoned, some I still use.",
    "groups": [
      {
        "name": "Claude Code and AI tooling",
        "items": [
          {
            "name": "Desk Display",
            "description": "A small ESP32-S3 desk device showing live Claude Code usage and what's playing on Spotify.",
            "status": "private",
            "lastWorked": "2026-09",
            "url": null,
            "featured": true
          },
          {
            "name": "Ferro",
            "description": "Claude Code mod: a pixel-art Norwich Terrier runs across a meadow above the prompt while Claude works.",
            "status": "open-source",
            "lastWorked": "2026-10",
            "url": "https://github.com/Vatroslav/cc-mod-ferro",
            "featured": true
          },
          {
            "name": "Text Review",
            "description": "Figma-style comments on text for Claude Code: select words, comment, see word-level changes between versions.",
            "status": "open-source",
            "lastWorked": "2026-10",
            "url": "https://github.com/Vatroslav/cc-text-review",
            "featured": true
          },
          {
            "name": "Personal OS",
            "description": "My personal productivity system: goals, tasks, decisions and knowledge, run with AI assistance.",
            "status": "private",
            "lastWorked": "2026-11",
            "url": null
          },
          {
            "name": "Suggestion Sentence Case",
            "description": "Claude Code mod: the prompt suggestion starts with a capital letter and ends with a full stop.",
            "status": "open-source",
            "lastWorked": "2026-10",
            "url": "https://github.com/Vatroslav/cc-mod-suggestion-sentence-case"
          },
          {
            "name": "Running Task",
            "description": "Claude Code mod: a bar showing which background task is running and since when.",
            "status": "private",
            "lastWorked": "2026-10",
            "url": null
          },
          {
            "name": "Rm List",
            "description": "Claude Code mod: lists what a delete will remove and flags what can't be recovered.",
            "status": "private",
            "lastWorked": "2026-10",
            "url": null
          },
          {
            "name": "Routines",
            "description": "Claude Code mod: my personal deadlines in a bar above the prompt.",
            "status": "private",
            "lastWorked": "2026-10",
            "url": null
          },
          {
            "name": "Guard Controller",
            "description": "Claude Code mod: a daily check that my guard hooks still work.",
            "status": "private",
            "lastWorked": "2026-10",
            "url": null
          },
          {
            "name": "Gmail connector",
            "description": "Local MCP server: Claude reads my personal Gmail and saves drafts. It can't send or delete.",
            "status": "private",
            "lastWorked": "2026-11",
            "url": null
          },
          {
            "name": "Viber connector",
            "description": "Claude reads the chat open in Viber Desktop. Read-only.",
            "status": "private",
            "lastWorked": "2026-11",
            "url": null
          },
          {
            "name": "Marketing Expert",
            "description": "A marketing knowledge base my other repos use through a Claude Code skill.",
            "status": "private",
            "lastWorked": "2026-10",
            "url": null
          }
        ]
      },
      {
        "name": "Games",
        "items": [
          {
            "name": "Left-Right-Onwards",
            "description": "Pick a gate, build your stats, survive the fight. Started in Unity, rewritten for the web.",
            "status": "live",
            "lastWorked": "2026-09",
            "url": "https://vatroslav.itch.io/lro",
            "featured": true
          },
          {
            "name": "Descending Sudoku",
            "description": "Sudoku where you can only write the biggest digit left. Go down 9 to 1, never back, and clear the countdown to zero.",
            "status": "live",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/descending-sudoku",
            "featured": true
          },
          {
            "name": "Sudoku Variants",
            "description": "Sudoku with combinable variant rules: Diagonal, Hyper, Jigsaw and more.",
            "status": "live",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/sudoku-variants"
          },
          {
            "name": "Expanding Tic-Tac-Toe",
            "description": "A tic-tac-toe that grows every time you draw. Play a friend or the computer.",
            "status": "live",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/expanding-tic-tac-toe"
          },
          {
            "name": "Left-Right-Dodge",
            "description": "A wizard who fires on his own. You only dodge.",
            "status": "live",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/left-right-dodge"
          },
          {
            "name": "Fit and Clear",
            "description": "Drop blocks on an 8x8 grid, clear full rows and columns, chase your high score.",
            "status": "live",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/fit-and-clear"
          },
          {
            "name": "Red or Blue",
            "description": "Two colors, one solution. A bite-sized logic puzzle.",
            "status": "live",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/red-or-blue"
          },
          {
            "name": "Water Sort",
            "description": "Water sort puzzle without ads. Works offline.",
            "status": "live",
            "lastWorked": "2026-10",
            "url": "https://vatroslav.github.io/water-sort/"
          },
          {
            "name": "Choose Your Leaders",
            "description": "Deduction puzzle: defend a castle by putting the right people in four roles, when the visible stats lie.",
            "status": "private",
            "lastWorked": "2026-09",
            "url": null
          },
          {
            "name": "Character RPG",
            "description": "An RPG with no graphics and no physics, where the world reacts to who you are. Prototype.",
            "status": "private",
            "lastWorked": "2026-09",
            "url": null
          },
          {
            "name": "Država, Grad, Selo",
            "description": "An online multiplayer version of the classic pen-and-paper word game.",
            "status": "private",
            "lastWorked": "2026-07",
            "url": null
          },
          {
            "name": "Lane Switcher",
            "description": "Web driving game: score by overtaking and avoiding needless lane changes.",
            "status": "private",
            "lastWorked": "2026-06",
            "url": null
          },
          {
            "name": "Juice Boilerplate",
            "description": "TypeScript and Pixi.js template with bloom, particles, screen shake, tweens and sound, so a game made of rectangles looks like it was meant to look that way.",
            "status": "open-source",
            "lastWorked": "2026-07",
            "url": "https://github.com/Vatroslav/juice-boilerplate"
          },
          {
            "name": "Dodger",
            "description": "Mini-game built from that template to test its API.",
            "status": "private",
            "lastWorked": "2026-07",
            "url": null
          },
          {
            "name": "Game Metrics Hub",
            "description": "Anonymous telemetry from my games in one place.",
            "status": "private",
            "lastWorked": "2026-10",
            "url": null
          },
          {
            "name": "Game Development",
            "description": "My knowledge base for making games.",
            "status": "private",
            "lastWorked": "2026-10",
            "url": null
          },
          {
            "name": "Godot Sandbox",
            "description": "Where I learn Godot: prototypes and tests.",
            "status": "private",
            "lastWorked": "2026-07",
            "url": null
          },
          {
            "name": "Bank Buckets",
            "description": "A double-entry bookkeeping learning game. Abandoned prototype.",
            "status": "archived",
            "lastWorked": "2026-10",
            "url": null
          },
          {
            "name": "Unity learning games",
            "description": "Arkanoid and Tetris clones and the Flappy Bird tutorial, made while learning Unity.",
            "status": "private",
            "lastWorked": "2025-07",
            "url": null
          }
        ]
      },
      {
        "name": "Everyday tools",
        "items": [
          {
            "name": "Cijene",
            "description": "Search across the daily price lists of grocery stores in Velika Gorica.",
            "status": "live",
            "lastWorked": "2026-11",
            "url": "https://vatroslav.github.io/cijene/",
            "featured": true
          },
          {
            "name": "Spotify Playlist Recovery",
            "description": "Finds unavailable tracks in your Spotify playlists and playable replacements by the same artist.",
            "status": "live",
            "lastWorked": "2026-07",
            "url": "https://spotify-playlist-recovery.vercel.app"
          },
          {
            "name": "Spotify Auto Skipper",
            "description": "Auto-skips Spotify songs you've recently scrobbled on Last.fm.",
            "status": "open-source",
            "lastWorked": "2026-10",
            "url": "https://github.com/Vatroslav/spotify-auto-skipper"
          },
          {
            "name": "Song Ranking",
            "description": "Builds a definitive ranked list of my favourite songs through tiers and head-to-head picks, then writes it to a Spotify playlist.",
            "status": "private",
            "lastWorked": "2026-06",
            "url": null
          },
          {
            "name": "Stash",
            "description": "A personal read-later: paste a link or text, tick it off when done.",
            "status": "private",
            "lastWorked": "2026-10",
            "url": null
          },
          {
            "name": "Breath Hold",
            "description": "A dry-land breath-hold trainer. The goal is staying calm, so there are no records.",
            "status": "live",
            "lastWorked": "2026-09",
            "url": "https://vatroslav.github.io/breath-hold/"
          },
          {
            "name": "Timer",
            "description": "A simple 30-second timer.",
            "status": "live",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.github.io/timer/"
          },
          {
            "name": "What to Wear",
            "description": "Android app: what to wear based on the current temperature.",
            "status": "private",
            "lastWorked": "2026-09",
            "url": null
          },
          {
            "name": "Suppletime",
            "description": "Android reminder for when to take supplements.",
            "status": "private",
            "lastWorked": "2026-07",
            "url": null
          },
          {
            "name": "Workout",
            "description": "Android app for tracking basic workouts.",
            "status": "archived",
            "lastWorked": "2026-05",
            "url": null
          },
          {
            "name": "Macro Recorder",
            "description": "Windows macro recorder with a cap on delays, so a replay doesn't wait as long as I did.",
            "status": "private",
            "lastWorked": "2026-06",
            "url": null
          },
          {
            "name": "Activity Tracker",
            "description": "Windows app for tracking active windows and Chrome tabs.",
            "status": "archived",
            "lastWorked": "2026-01",
            "url": "https://github.com/Vatroslav/activity-tracker"
          },
          {
            "name": "Book Companion",
            "description": "A spoiler-free companion for reading books.",
            "status": "archived",
            "lastWorked": "2026-05",
            "url": null
          },
          {
            "name": "WhatsApp Sidebar Toggle",
            "description": "Chrome extension: hide or show the WhatsApp Web sidebar.",
            "status": "open-source",
            "lastWorked": "2026-10",
            "url": "https://github.com/Vatroslav/whatsapp-sidebar-toggle"
          },
          {
            "name": "Webtoons Dark Mode",
            "description": "Chrome extension: dark mode for webtoons.com on desktop. Comic images untouched.",
            "status": "open-source",
            "lastWorked": "2026-09",
            "url": "https://github.com/Vatroslav/webtoons-dark-mode"
          },
          {
            "name": "Medieval Dynasty Tracker",
            "description": "Reads game screenshots, tracks my village and lists shortages and surpluses by priority.",
            "status": "private",
            "lastWorked": "2026-04",
            "url": null
          },
          {
            "name": "Epic Card Game Rules",
            "description": "Fast rules lookup during a game of Epic Card Game.",
            "status": "private",
            "lastWorked": "2026-08",
            "url": null
          },
          {
            "name": "Literature translations",
            "description": "Translating literary works from English to Croatian for my parents.",
            "status": "private",
            "lastWorked": "2026-07",
            "url": null
          },
          {
            "name": "Date Widget",
            "description": "A date display widget made for one person.",
            "status": "private",
            "lastWorked": "2026-07",
            "url": null
          },
          {
            "name": "Networking Event",
            "description": "A networking game where every participant meets every other participant exactly once.",
            "status": "open-source",
            "lastWorked": "2023-12",
            "url": "https://github.com/Vatroslav/networking-event"
          }
        ]
      },
      {
        "name": "Tabletop and play",
        "items": [
          {
            "name": "Solo D&D",
            "description": "Solo D&D 5e in Faerun, with Claude as dungeon master and oracle.",
            "status": "private",
            "lastWorked": "2026-09",
            "url": null
          },
          {
            "name": "Blazing Trails",
            "description": "Campaigns and quests in Faerun that I run as dungeon master.",
            "status": "private",
            "lastWorked": "2026-11",
            "url": null
          },
          {
            "name": "Replicant Space",
            "description": "Playing replicant.space with Claude as the peripheral interface.",
            "status": "archived",
            "lastWorked": "2026-09",
            "url": null
          },
          {
            "name": "Gaming notes",
            "description": "My ratings, notes on each game and Steam sale verdicts.",
            "status": "private",
            "lastWorked": "2026-11",
            "url": null
          }
        ]
      }
    ]
  },
  "footer": "Designed with Claude Design, built with Claude Code."
};

// All page content. Add a project by adding one object to a group's items.
// status: live | open-source | private | archived. lastWorked: YYYY-MM. url: null for private.
// started: YYYY-MM. active: true shows "Since <started>", or "<started> ->" in the narrowest cells.
// Without active the cell shows the range from started to lastWorked.
// Optional per item: featured: true, image: "path/to/image.png", period: "Since 2022".
// A period replaces all of that in the cell and does not count towards any computed number.
// actionLabel: "Issue" replaces the default Try it or Source wording on the cell's link.
// Counts, month range and the 'now' marker are computed from this file; never type them by hand.
// The name, tagline, profile links, section headings, intro and the noscript link lists also
// exist as static HTML in index.html for readers without JavaScript. Change them in both places.
// The share image og.png also shows the name and tagline, so it has to be redone if they change.
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
    "since": "Since {month}",
    "range": "{from} - {to}",
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
        "label": "CV",
        "url": "https://vatroslav.github.io/cv/"
      },
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
      "period": "Since 2022",
      "url": "https://tabu.hr/en"
    },
    {
      "name": "Tabu C2C app",
      "description": "Compare your salary with peers in the same position. The salary survey gets you an account.",
      "status": "live",
      "started": "2026-05",
      "lastWorked": "2026-11",
      "active": true,
      "url": "https://app.tabu.hr/",
      "actionLabel": "Sign in"
    },
    {
      "name": "Tabu C2B demo",
      "description": "Salary benchmarking for HR and finance teams. No sign-in, a made-up company, altered amounts.",
      "status": "live",
      "started": "2026-07",
      "lastWorked": "2026-11",
      "active": true,
      "url": "https://business-app.tabu.hr/demo?lang=en"
    },
    {
      "name": "Tabu industry demo",
      "description": "Organizations in one industry benchmark pay against each other. No sign-in, made-up organizations, in Croatian.",
      "status": "live",
      "started": "2026-10",
      "lastWorked": "2026-11",
      "active": true,
      "url": "https://industry.tabu.hr/demo"
    },
    {
      "name": "Tabu calculators",
      "description": "Free tools from Tabu: a salary calculator and an employee turnover cost calculator.",
      "status": "live",
      "started": "2026-09",
      "lastWorked": "2026-09",
      "active": true,
      "url": "https://kalkulator.tabu.hr"
    },
    {
      "name": "AI Dev Playbook",
      "description": "Rules, skills, subagents, hooks and CI templates for teams building software with AI coding agents.",
      "status": "open-source",
      "started": "2026-10",
      "lastWorked": "2026-10",
      "active": true,
      "url": "https://github.com/Vatroslav/ai-dev-playbook"
    },
    {
      "name": "Next.js CSP nonce repro",
      "description": "Found a Next.js bug and reported it upstream with a minimal reproduction.",
      "status": "open-source",
      "started": "2026-08",
      "lastWorked": "2026-08",
      "url": "https://github.com/vercel/next.js/issues/98015",
      "actionLabel": "Issue"
    }
  ],
  "afterHours": {
    "intro": "Nobody asked for any of this. I build it because I want to. Some of it is finished, some is abandoned, some I still use.",
    "groups": [
      {
        "name": "Claude Code and AI tooling",
        "items": [
          {
            "name": "Personal OS",
            "description": "My personal productivity system: goals, tasks, decisions and knowledge, run with AI assistance.",
            "status": "private",
            "started": "2026-02",
            "lastWorked": "2026-11",
            "active": true,
            "url": null,
            "featured": true
          },
          {
            "name": "Ferro",
            "description": "Claude Code mod: a pixel-art Norwich Terrier runs across a meadow above the prompt while Claude works.",
            "status": "open-source",
            "started": "2026-10",
            "lastWorked": "2026-10",
            "active": true,
            "url": "https://github.com/Vatroslav/cc-mod-ferro",
            "featured": true
          },
          {
            "name": "Text Review",
            "description": "Figma-style comments on text for Claude Code: select words, comment, see word-level changes between versions.",
            "status": "open-source",
            "started": "2026-10",
            "lastWorked": "2026-10",
            "active": true,
            "url": "https://github.com/Vatroslav/cc-text-review",
            "featured": true
          },
          {
            "name": "Suggestion Sentence Case",
            "description": "Claude Code mod: the prompt suggestion starts with a capital letter and ends with a full stop.",
            "status": "open-source",
            "started": "2026-10",
            "lastWorked": "2026-10",
            "active": true,
            "url": "https://github.com/Vatroslav/cc-mod-suggestion-sentence-case",
            "featured": true
          },
          {
            "name": "Routines",
            "description": "Claude Code mod: my personal deadlines in a bar above the prompt.",
            "status": "private",
            "started": "2026-10",
            "lastWorked": "2026-10",
            "active": true,
            "url": null
          },
          {
            "name": "Guard Controller",
            "description": "Claude Code mod: a daily check that my guard hooks still work.",
            "status": "private",
            "started": "2026-10",
            "lastWorked": "2026-10",
            "active": true,
            "url": null
          },
          {
            "name": "Gmail connector",
            "description": "Local MCP server: Claude reads my personal Gmail and saves drafts. It can't send or delete.",
            "status": "private",
            "started": "2026-11",
            "lastWorked": "2026-11",
            "active": true,
            "url": null
          },
          {
            "name": "Viber connector",
            "description": "Claude reads the chat open in Viber Desktop. Read-only.",
            "status": "private",
            "started": "2026-11",
            "lastWorked": "2026-11",
            "active": true,
            "url": null
          },
          {
            "name": "Mail to Claude Code",
            "description": "Chrome extension: opens a new Claude Code session with the email I have open in Gmail.",
            "status": "private",
            "started": "2026-11",
            "lastWorked": "2026-11",
            "active": true,
            "url": null
          },
          {
            "name": "Summarize Article",
            "description": "Chrome extension: Claude summarizes an article, then answers my follow-up questions.",
            "status": "private",
            "started": "2026-11",
            "lastWorked": "2026-11",
            "active": true,
            "url": null
          },
          {
            "name": "Marketing Expert",
            "description": "A marketing knowledge base my other repos use through a Claude Code skill.",
            "status": "private",
            "started": "2026-07",
            "lastWorked": "2026-10",
            "active": true,
            "url": null
          },
          {
            "name": "Desk Display",
            "description": "A small ESP32-S3 desk device showing live Claude Code usage and what's playing on Spotify.",
            "status": "private",
            "started": "2026-05",
            "lastWorked": "2026-09",
            "active": true,
            "url": null
          },
          {
            "name": "Running Task",
            "description": "Claude Code mod: a bar showing which background task is running and since when.",
            "status": "private",
            "started": "2026-10",
            "lastWorked": "2026-10",
            "active": true,
            "url": null
          },
          {
            "name": "Rm List",
            "description": "Claude Code mod: lists what a delete will remove and flags what can't be recovered.",
            "status": "private",
            "started": "2026-10",
            "lastWorked": "2026-10",
            "active": true,
            "url": null
          }
        ]
      },
      {
        "name": "Everyday tools",
        "items": [
          {
            "name": "Spotify Auto Skipper",
            "description": "Auto-skips Spotify songs you've recently scrobbled on Last.fm.",
            "status": "open-source",
            "started": "2025-10",
            "lastWorked": "2026-10",
            "active": true,
            "url": "https://github.com/Vatroslav/spotify-auto-skipper",
            "featured": true
          },
          {
            "name": "Stash",
            "description": "A personal read-later: paste a link or text, tick it off when done.",
            "status": "live",
            "started": "2026-06",
            "lastWorked": "2026-10",
            "active": true,
            "url": "https://stashitforlater.com/",
            "featured": true
          },
          {
            "name": "Cijene (en. Prices)",
            "description": "Search across the daily price lists of selected grocery stores in Velika Gorica.",
            "status": "live",
            "started": "2026-09",
            "lastWorked": "2026-11",
            "active": true,
            "url": "https://vatroslav.github.io/cijene/"
          },
          {
            "name": "Spotify Playlist Recovery",
            "description": "Finds unavailable tracks in your Spotify playlists and playable replacements by the same artist.",
            "status": "live",
            "started": "2026-03",
            "lastWorked": "2026-07",
            "active": true,
            "url": "https://spotify-playlist-recovery.vercel.app"
          },
          {
            "name": "Breath Hold",
            "description": "A dry-land breath-hold trainer. The goal is staying calm, so there are no records.",
            "status": "live",
            "started": "2026-09",
            "lastWorked": "2026-09",
            "active": true,
            "url": "https://vatroslav.github.io/breath-hold/"
          },
          {
            "name": "Timer",
            "description": "A simple 30-second timer.",
            "status": "live",
            "started": "2026-06",
            "lastWorked": "2026-07",
            "active": true,
            "url": "https://vatroslav.github.io/timer/"
          },
          {
            "name": "Song Ranking",
            "description": "Builds a definitive ranked list of my favourite songs through tiers and head-to-head picks, then writes it to a Spotify playlist.",
            "status": "private",
            "started": "2026-06",
            "lastWorked": "2026-06",
            "url": null
          },
          {
            "name": "What to Wear",
            "description": "Android app: what to wear based on the current temperature.",
            "status": "private",
            "started": "2026-03",
            "lastWorked": "2026-09",
            "active": true,
            "url": null
          },
          {
            "name": "Suppletime",
            "description": "Android reminder for when to take supplements.",
            "status": "private",
            "started": "2026-03",
            "lastWorked": "2026-07",
            "active": true,
            "url": null
          },
          {
            "name": "Workout",
            "description": "Android app for tracking basic workouts.",
            "status": "archived",
            "started": "2026-04",
            "lastWorked": "2026-05",
            "url": null
          },
          {
            "name": "Macro Recorder",
            "description": "Windows macro recorder with a cap on delays, so a replay doesn't wait as long as I did.",
            "status": "private",
            "started": "2026-06",
            "lastWorked": "2026-06",
            "url": null
          },
          {
            "name": "Activity Tracker",
            "description": "Windows app for tracking active windows and Chrome tabs.",
            "status": "archived",
            "started": "2026-01",
            "lastWorked": "2026-01",
            "url": "https://github.com/Vatroslav/activity-tracker"
          },
          {
            "name": "Book Companion",
            "description": "A spoiler-free companion for reading books.",
            "status": "archived",
            "started": "2026-05",
            "lastWorked": "2026-05",
            "url": null
          },
          {
            "name": "WhatsApp Sidebar Toggle",
            "description": "Chrome extension: hide or show the WhatsApp Web sidebar.",
            "status": "open-source",
            "started": "2026-05",
            "lastWorked": "2026-10",
            "active": true,
            "url": "https://github.com/Vatroslav/whatsapp-sidebar-toggle"
          },
          {
            "name": "Webtoons Dark Mode",
            "description": "Chrome extension: dark mode for webtoons.com on desktop. Comic images untouched.",
            "status": "open-source",
            "started": "2026-09",
            "lastWorked": "2026-09",
            "active": true,
            "url": "https://github.com/Vatroslav/webtoons-dark-mode"
          },
          {
            "name": "Portfolio",
            "description": "This page. Plain HTML, CSS and JavaScript, with every number computed from one data file.",
            "status": "open-source",
            "started": "2026-11",
            "lastWorked": "2026-11",
            "active": true,
            "url": "https://github.com/Vatroslav/Vatroslav.github.io"
          },
          {
            "name": "Literature translations",
            "description": "Translating literary works from English to Croatian for my parents.",
            "status": "private",
            "started": "2026-04",
            "lastWorked": "2026-07",
            "url": null
          },
          {
            "name": "Date Widget",
            "description": "A date display widget made for one person.",
            "status": "private",
            "started": "2026-04",
            "lastWorked": "2026-07",
            "url": null
          },
          {
            "name": "Networking Event",
            "description": "A networking game where every participant meets every other participant exactly once.",
            "status": "open-source",
            "started": "2023-12",
            "lastWorked": "2023-12",
            "url": "https://github.com/Vatroslav/networking-event"
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
            "started": "2025-07",
            "lastWorked": "2026-09",
            "url": "https://vatroslav.itch.io/lro",
            "featured": true
          },
          {
            "name": "Descending Sudoku",
            "description": "Sudoku where you can only write the biggest digit left. Go down 9 to 1, never back, and clear the countdown to zero.",
            "status": "live",
            "started": "2026-07",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/descending-sudoku",
            "featured": true
          },
          {
            "name": "Sudoku Variants",
            "description": "Sudoku with combinable variant rules: Diagonal, Hyper, Jigsaw and more.",
            "status": "live",
            "started": "2026-06",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/sudoku-variants"
          },
          {
            "name": "Expanding Tic-Tac-Toe",
            "description": "A tic-tac-toe that grows every time you draw. Play a friend or the computer.",
            "status": "live",
            "started": "2026-06",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/expanding-tic-tac-toe"
          },
          {
            "name": "Left-Right-Dodge",
            "description": "A wizard who fires on his own. You only dodge.",
            "status": "live",
            "started": "2026-07",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/left-right-dodge"
          },
          {
            "name": "Fit and Clear",
            "description": "Drop blocks on an 8x8 grid, clear full rows and columns, chase your high score.",
            "status": "live",
            "started": "2026-03",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/fit-and-clear"
          },
          {
            "name": "Red or Blue",
            "description": "Two colors, one solution. A bite-sized logic puzzle.",
            "status": "live",
            "started": "2026-03",
            "lastWorked": "2026-07",
            "url": "https://vatroslav.itch.io/red-or-blue"
          },
          {
            "name": "Water Sort",
            "description": "Water sort puzzle without ads. Works offline.",
            "status": "live",
            "started": "2026-09",
            "lastWorked": "2026-10",
            "active": true,
            "url": "https://vatroslav.github.io/water-sort/"
          },
          {
            "name": "Nestworks",
            "description": "A cozy factory game: chain colored blocks, pack a finished chain into a module, build bigger modules from those.",
            "status": "private",
            "started": "2026-11",
            "lastWorked": "2026-11",
            "active": true,
            "url": null
          },
          {
            "name": "Choose Your Leaders",
            "description": "Deduction puzzle: defend a castle by putting the right people in four roles, when the visible stats lie.",
            "status": "private",
            "started": "2026-06",
            "lastWorked": "2026-09",
            "url": null
          },
          {
            "name": "Character RPG",
            "description": "An RPG with no graphics and no physics, where the world reacts to who you are. Prototype.",
            "status": "private",
            "started": "2026-07",
            "lastWorked": "2026-09",
            "url": null
          },
          {
            "name": "Država, Grad, Selo (en. Country, City, Village)",
            "description": "An online multiplayer version of the classic pen-and-paper word game.",
            "status": "private",
            "started": "2026-07",
            "lastWorked": "2026-07",
            "url": null
          },
          {
            "name": "Lane Switcher",
            "description": "Web driving game: score by overtaking and avoiding needless lane changes.",
            "status": "private",
            "started": "2026-06",
            "lastWorked": "2026-06",
            "url": null
          },
          {
            "name": "Juice Boilerplate",
            "description": "TypeScript and Pixi.js template with bloom, particles, screen shake, tweens and sound, so a game made of rectangles looks like it was meant to look that way.",
            "status": "open-source",
            "started": "2026-07",
            "lastWorked": "2026-07",
            "url": "https://github.com/Vatroslav/juice-boilerplate"
          },
          {
            "name": "Dodger",
            "description": "Mini-game built from Juice Boilerplate to test its API.",
            "status": "private",
            "started": "2026-07",
            "lastWorked": "2026-07",
            "url": null
          },
          {
            "name": "Game Metrics Hub",
            "description": "Anonymous telemetry from my games in one place.",
            "status": "private",
            "started": "2026-07",
            "lastWorked": "2026-10",
            "active": true,
            "url": null
          },
          {
            "name": "Game Development",
            "description": "My knowledge base for making games.",
            "status": "private",
            "started": "2026-05",
            "lastWorked": "2026-10",
            "active": true,
            "url": null
          },
          {
            "name": "Godot Sandbox",
            "description": "Where I learn Godot: prototypes and tests.",
            "status": "private",
            "started": "2026-07",
            "lastWorked": "2026-07",
            "url": null
          },
          {
            "name": "Bank Buckets",
            "description": "A double-entry bookkeeping learning game. Abandoned prototype.",
            "status": "archived",
            "started": "2026-10",
            "lastWorked": "2026-10",
            "url": null
          },
          {
            "name": "Unity learning games",
            "description": "Arkanoid and Tetris clones and the Flappy Bird tutorial, made while learning Unity.",
            "status": "private",
            "started": "2025-06",
            "lastWorked": "2025-07",
            "url": null
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
            "started": "2026-07",
            "lastWorked": "2026-09",
            "url": null
          },
          {
            "name": "Blazing Trails",
            "description": "Campaigns and quests in Faerun that I run as dungeon master.",
            "status": "private",
            "started": "2026-03",
            "lastWorked": "2026-11",
            "active": true,
            "url": null
          },
          {
            "name": "Replicant Space",
            "description": "Playing replicant.space with Claude as the peripheral interface.",
            "status": "archived",
            "started": "2026-08",
            "lastWorked": "2026-09",
            "url": null
          },
          {
            "name": "SpaceSim",
            "description": "Solo sci-fi roleplay: I play a spacer starting from a quarter-share berth, Claude plays the narrator, the ship and the world.",
            "status": "archived",
            "started": "2026-08",
            "lastWorked": "2026-08",
            "url": null
          },
          {
            "name": "Gaming notes",
            "description": "My ratings, notes on each game and Steam sale verdicts.",
            "status": "private",
            "started": "2026-09",
            "lastWorked": "2026-11",
            "active": true,
            "url": null
          },
          {
            "name": "Medieval Dynasty Tracker",
            "description": "Reads game screenshots, tracks my village and lists shortages and surpluses by priority.",
            "status": "private",
            "started": "2026-03",
            "lastWorked": "2026-04",
            "url": null
          },
          {
            "name": "Epic Card Game Rules",
            "description": "Fast rules lookup during a game of Epic Card Game.",
            "status": "private",
            "started": "2026-08",
            "lastWorked": "2026-08",
            "url": null
          }
        ]
      }
    ]
  },
  "footer": "Designed with Claude Design, built with Claude Code."
};

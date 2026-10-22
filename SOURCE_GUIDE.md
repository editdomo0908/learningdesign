# Reading and editing the portfolio source

The site is plain HTML, CSS and JavaScript. Open these files directly in your editor; there is no build step or minification step for the portfolio.

Files use two spaces for indentation, one CSS declaration per line, expanded JavaScript blocks and comments identifying major sections. The editor settings in `.editorconfig` and `.prettierrc.json` keep future changes consistent. The included VS Code settings enable word wrap for long asset values.

## Where to start

| File or folder | What it contains |
| --- | --- |
| `index.html` | Home: introduction, project cards, learning resource, About, Approach and Contact. |
| `projects/` | Individual project pages and the Articulate collection. |
| `projects/gradient/index.html` | Gradient case study and the Visit the site link. |
| `projects/html-css-course/index.html` | UCL HTML and CSS course-design case study. |
| `research/` | The Notes section and its article pages; existing URLs are retained. |
| `learning-interactions.html` | Learning goal matcher content, illustrations and references. |
| `accessibility.html` | Accessibility statement and known review limits. |
| `css/site.css` | Shared palettes, typography, navigation, layouts, cards and project pages. |
| `css/covers.css` | Home and Notes card presentation and conceptual covers. |
| `css/accessibility.css` | Focus indicators, target sizes, text wrapping and other accessibility overrides. |
| `css/approach.css`, `js/approach.js` | Approach layout, illustrations and their entrance animations. |
| `css/selector.css`, `css/matcher-visuals.css`, `js/selector.js` | Learning goal matcher layout, sketches and keyboard interactions. |
| `css/course-design.css` | UCL course page styling. |
| `css/learning-projects.css` | Compact Articulate course cards and course launch panels. |
| `css/motion.css`, `js/motion.js` | Scroll-reveal enhancement and reduced-motion handling. |
| `js/site.js` | Theme preference, navigation, focus handling, header measurement and footer year. |
| `art/concepts/`, `favicon.svg` | Editable vector artwork and the browser tab icon. |
| `images/`, `videos/` | Portfolio media assets. |

## Finding sections in an editor

HTML comments label the header, main content, page sections, project cards and footer. CSS comments label themes, components, breakpoints and motion preferences. JavaScript comments explain the responsibilities of each group of functions and event handlers.

Change text and links in the relevant HTML file. Change shared styling in `css/site.css`, then check the page-specific stylesheet and the final accessibility overrides. The stylesheet order in each page is deliberate: later files can override earlier rules.

Each HTML page contains a small theme script in its head. It chooses the initial theme before the page is painted. The shared `js/site.js` then manages the theme button, stored preferences and navigation.

## The published Storyline course

`courses/the-pricing-flow/` contains the published Articulate course. It is generated output, not the editable `.story` project.

Its HTML, CSS, JavaScript and XML are expanded for reading. File names such as `slides.min.js` are retained because the Storyline player expects those exact paths; their code is formatted rather than kept on a compressed line.

| Course file or folder | What it contains |
| --- | --- |
| `story.html` | Course entry point and player loading settings. |
| `meta.xml` | Publication metadata. |
| `story_content/frame.xml` | Generated player configuration and text labels. |
| `story_content/user.js`, `story_content/triggers.js` | Published custom-script interfaces. |
| `html5/data/js/data.js` | Course metadata, scenes, variables and triggers. |
| `html5/data/js/frame.js` | Player controls, menu, labels and resources. |
| `html5/data/js/paths.js` | Generated vector path data. |
| Other files in `html5/data/js/` | Individual slide data, expanded into readable objects. |
| `html5/lib/scripts/` | Generated player libraries. |
| `html5/data/css/`, `html5/lib/stylesheets/` | Generated course styling and fonts. |

Slide data is shown as indented objects and passed through `JSON.stringify` so the player still receives the string data it expects. Comments identify major data groups. Short variable names inside the generated libraries cannot be recovered into the original authoring names. Encoded fonts, vector paths and strings containing generated icons or templates can remain long; word wrap keeps those values within the editor window.

For lasting changes to slide content, scoring, triggers, focus order or accessible labels, edit the original project in Storyline and republish. A new export replaces this generated folder and will need the same formatting applied again.

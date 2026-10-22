# Edit Domoszlai — portfolio

Open index.html after unzipping, or upload the folder contents to a static host.
No build, installation, remote fonts or third-party script is required.

## Content and visuals

The project-card covers are newly drawn SVG compositions derived from each
project's written content. They are conceptual illustrations: they do not show
source documents, product screenshots, course screens, photographs or reused artwork.
The original project media remain within their case-study pages.

The six covers represent workflow logic, instructional sequences, visual identity,
qualitative inquiry, movement variation, and decisions with feedback. Research
resources use the same graphic language. The introduction is text-led. The palette uses cobalt, aqua and pink with cool
neutral backgrounds in both themes.

The Approach section connects six skills along a vertical line. It alternates
sides on larger screens and follows one line on phones. Each skill has an
original inline SVG illustration with a single entrance animation. Text stays
visible without JavaScript; reduced-motion preferences disable the animation.

## Files

css/site.css is the shared design system; css/covers.css defines the gallery.
css/approach.css defines the connected skills section; js/approach.js triggers
its illustrations once as they enter the viewport.
css/selector.css contains the learning-goal comparison layout.
js/site.js handles navigation and themes; js/selector.js handles goal selection.
New artwork is in art/concepts/. Original case-study media are in images/ and videos/.

Each project and research card is a single link, with a visible border and surface.
There is no repeated case-study button. Homepage cards and section content
reveal once on scroll, with small delays across each project row. The hero
stays still. Motion is disabled when reduced motion is requested, and content
remains visible when JavaScript or IntersectionObserver is unavailable.
css/motion.css and js/motion.js provide these entrances on the homepage and
research hub.

The Learning Goal Matcher contains 36 original inline SVG method sketches, one
for each suggested method across its nine goals. Each sketch describes the
learner action already explained in the example and guidance; it is not an
interactive course or a product screenshot. Visuals have accessible text
alternatives and follow both themes through css/matcher-visuals.css.
The goal tabs, mobile selector, evidence notes and bibliography are preserved.
Examples use familiar corporate training topics: onboarding, shared files,
expense claims, annual leave, meetings, priorities and project handovers.
They are illustrative tasks, rather than examples from the portfolio case studies.

The theme preference is stored only in the visitor's browser.
There is no backend or analytics. Card artwork is stable on hover and keyboard focus.

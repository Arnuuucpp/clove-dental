# Clove Dental Landing Page

A responsive landing page built for the Unbundl Web Development Internship assessment. It uses HTML5, CSS3, and vanilla JavaScript. There are no UI frameworks or carousel libraries.

## Run locally

Open `index.html` in a browser. No build step or package installation is needed. The images and icons are stored locally in `assets/`; the Figtree font is loaded from Google Fonts and needs an internet connection.

## Page sections

1. Navbar and hero with consultation form
2. Moving statistics strip
3. Types of Root Canal Treatments
4. Real Smiles, Real Transformations
5. Why Choose Clove Dental
6. What Our Patients Say
7. Safety, Precision, and Innovation
8. Footer

## Project files

- `index.html` contains the page's semantic structure and content.
- `css/theme.css` defines shared colours, spacing, radii, and other CSS variables.
- `css/style.css` contains the page layout, section styles, and responsive rules.
- `js/script.js` handles consultation form validation and the accordion.
- `assets/icons/` and `assets/images/` contain the exported Figma assets.
- `reference/` contains the supplied desktop reference screenshots.

## Interactions and responsive layout

- Appointment and treatment buttons jump to the consultation form. The phone button uses a `tel:` link.
- The statistics strip loops with CSS animation. `prefers-reduced-motion` stops the animation and allows manual scrolling.
- Patient cards scroll horizontally on narrow screens; the rows use CSS scroll snapping.
- The Why Choose accordion allows one item open at a time. Its buttons update `aria-expanded` as content opens or closes.
- Treatment and safety cards stack on smaller screens, and the footer rearranges for mobile.

## Current limitations

The consultation form has no backend. It validates the fields and captcha in the browser, then directs visitors to call instead of claiming a booking was sent. Footer policy labels are text because no destination URLs were supplied. No written patient reviews were included in the references, so the patient section shows only the supplied images and visible details.

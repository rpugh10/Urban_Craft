# Urban Craft Website

A responsive, one-page website for **Urbancraft**, a home repair, renovation, construction, and landscaping business serving Cobourg and surrounding communities in Ontario.

The site presents the company's services, project portfolio, customer reviews, service area, contact details, and a simple project enquiry form.

## Features

- Responsive layout for desktop, tablet, and mobile devices
- Mobile navigation menu
- Hero section with a clear project enquiry call-to-action
- About section describing Urbancraft's approach
- Six service categories for interior and exterior work
- Before-and-after project gallery
- Customer review and rating section
- Regional service-area overview
- Clickable phone and email links
- Project enquiry form that opens the visitor's email application
- Automatic copyright year
- Google Fonts integration

## Project Structure

```text
Urban Craft/
├── css/
│   └── styles.css
├── html/
│   └── index (3).html
├── js/
│   └── index.js
└── README.md
```

- `html/index (3).html` contains the website content and semantic page structure.
- `css/styles.css` contains the full visual design, layout, components, and responsive styles.
- `js/index.js` controls the mobile menu, dynamic footer year, and email enquiry form.

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Google Fonts
- Responsive CSS media queries

No frameworks, build tools, or package installations are required.

## Getting Started

### View locally

1. Open `html/index (3).html` directly in a web browser.

2. Alternatively, start a local server from the project root:

```bash
python3 -m http.server 8000
```

3. Visit:

```text
http://localhost:8000/html/index%20(3).html
```

The HTML file uses relative links to load `../css/styles.css` and `../js/index.js`, so preserve the current folder structure.

## Project Form

The enquiry form is a front-end demonstration. When submitted, JavaScript collects the entered details and opens the user's default email application with a pre-filled recipient, subject, and message.

The form:

- Does not send or store information on a server
- Requires a name, email address, and project description
- Opens the prepared enquiry addressed to `info@urbancraft.ca`

A backend, form service, or email API would be needed for server-side submissions.

## Content and Launch Notes

Before publishing publicly:

- Confirm that the Google rating and review count are current
- Obtain permission and approval for all customer review excerpts and attributions
- Verify business address, phone number, email address, and service areas
- Replace or locally store remote project photography if required
- Confirm the copyright and project ownership information
- Test the email form on commonly used browsers and devices

## Customization

- Update page content in `html/index (3).html`
- Change colours and design variables near the beginning of `css/styles.css`
- Adjust mobile breakpoints in the responsive section at the bottom of `css/styles.css`
- Modify navigation and form behavior in `js/index.js`

## Browser Support

The site uses modern HTML, CSS, and JavaScript and is suitable for current versions of Chrome, Safari, Firefox, and Edge.
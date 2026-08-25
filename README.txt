# District Secretariat Jaffna - Media Unit Staff Website

## Files

- `index.html` - Staff directory/home page
- `staff.html` - Dynamic individual staff profile page
- `css/styles.css` - Complete design and responsive styling
- `js/staff-data.js` - Staff information database (edit this to manage staff)
- `js/app.js` - Search/filter and staff cards
- `js/profile.js` - Individual profile renderer
- `images/` - Demo/placeholder images

Each profile now includes every section from the office template:
Designation (trilingual), Qualifications, Current Position / Service
Information, Work Details, Areas of Responsibility, Areas of Expertise,
Language Skills, Professional Experience (timeline), Official Contact,
and a QR code + Media Unit line in the footer bar.

## Add a new staff member

1. Put the person's approved photo in `images/`, e.g. `staff04.jpg`.
2. Open `js/staff-data.js`.
3. Copy one whole staff object (from `{` to `}`).
4. Paste it before the closing `];` and update every field: name,
   designation, section, currentPosition, qualifications, workDetails,
   responsibilities, expertise, languages, experience, and contact.
5. Give the staff member a unique `id`.
6. Pick a "theme" for their card and profile page colour — one of:
   `royalNavy`, `deepTeal`, `indigoPlum`, `forestBronze`, `slateCrimson`.
   (To add another colour pairing, add a new `[data-theme="..."]` rule
   near the top of `css/styles.css`, right after `:root`.)
7. The staff member automatically appears in the directory and gets an
   individual URL like: `staff.html?id=staff04`

## Change logos

Replace:
- `images/government-logo.jpg`
- `images/district-logo.jpg`

with the official high-resolution logo files supplied by your office.
Keep the same filenames, or update the paths in the HTML.

## QR code

The QR graphic in each profile's footer bar is a decorative placeholder
(drawn in `js/profile.js`, function `qrSVG()`). Once the site has a
public URL, generate a real QR code image and swap it in, or replace
the `qrSVG()` output with an `<img>` tag pointing to that image.

## Important

Replace all sample telephone numbers, emails, website addresses, names
and qualifications with approved official information before publishing.
`staff02.jpg` and `staff03.jpg` are generated placeholder images —
replace them with real approved staff photos.

## Run locally

The website is static HTML/CSS/JavaScript. You can open `index.html`
directly in a browser.

For local development, a simple server is recommended:

Python:
`python -m http.server 8000`

Then open:
`http://localhost:8000`

## Free hosting

This project can be deployed to a static hosting service such as
GitHub Pages or Cloudflare Pages.

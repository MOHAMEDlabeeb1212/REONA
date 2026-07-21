# Reona v2 — How to Run & Edit

---

## Run the project (3 commands only)

```bash
npm install
npm run dev
```
Open → http://localhost:5173

---

## File map — where to go for what

```
reona-v2/
├── index.html                   ← Change page title / meta description here
├── src/
│   ├── index.css                ← ALL colors, fonts, spacing variables — edit here first
│   ├── App.jsx                  ← Add / remove entire sections here
│   └── components/
│       ├── Navbar.jsx           ← Edit nav links
│       ├── Hero.jsx             ← Change headline, subtext, buttons
│       ├── Hero.css             ← Change hero layout and button styles
│       ├── Stats.jsx            ← Change the 4 numbers (1999, ISO, etc.)
│       ├── Products.jsx         ← Add / edit / remove products here ← MOST EDITS GO HERE
│       ├── Products.css         ← Change product card appearance
│       ├── About.jsx            ← Edit company text, certifications, contact details
│       ├── Contact.jsx          ← Edit form fields and contact info
│       └── Footer.jsx           ← Edit footer links and contact list
```

---

## Most common edits — quick reference

### Change a color (site-wide)
Open `src/index.css` and edit the `:root` block at the top.
```css
:root {
  --red:  #8B1A1A;   /* ← change this for the main accent color */
  --gold: #b09060;   /* ← change this for the gold highlights    */
}
```
One edit here = changes the color everywhere it's used.

---

### Change fonts (site-wide)
1. Go to `index.html` — replace the Google Fonts link with your chosen fonts.
2. Go to `src/index.css` — update `--font-serif` and `--font-sans` to match.

---

### Add a new product card
Open `src/components/Products.jsx`.
Copy any one object inside the `products = [...]` array and paste it, then edit:
```js
{
  name:      'Your Product Name',
  tag:       'Mops',           // must match an existing category, or add a new one
  specialty: 'One-line tagline here',
  specs: [
    'Spec line 1',
    'Spec line 2',
  ],
  image: '/images/your-photo.jpg',  // put your image in /public/images/
},
```

---

### Replace a placeholder image with your own
1. Put your photo inside the `/public/images/` folder (create it if it doesn't exist).
2. In `Products.jsx`, find the product and update the `image` field:
```js
image: '/images/kspv1s-mop.jpg',   // ← your filename here
```
All placeholder images from Unsplash have a comment above them:
`// REPLACE: ...` — search for that comment to find every image that needs replacing.

---

### Change hero background image
Open `src/components/Hero.jsx`.
Find the `backgroundImage` line and replace the URL:
```jsx
backgroundImage: 'url(/images/your-hero-photo.jpg)',
```

---

### Change hero text
Open `src/components/Hero.jsx`.
Edit the `<h1>`, `<p>`, or button text directly in the JSX.

---

### Add / remove a nav link
Open `src/components/Navbar.jsx`.
Edit the `links` array at the top:
```js
const links = [
  { label: 'Home',     target: 'hero'     },
  { label: 'Products', target: 'products' },
  // add more here — "target" must match the id="" of a section
]
```

---

### Add a new section
1. Create `src/components/YourSection.jsx` and `YourSection.css`
2. In `src/App.jsx` add at the top: `import YourSection from './components/YourSection'`
3. Add `<YourSection />` in the JSX where you want it to appear.

---

## Build for deployment (Netlify / Vercel)

```bash
npm run build
```
Upload the generated `dist/` folder to Netlify (drag and drop).
Done — your site is live.

import React, { useState } from 'react'
import './Products.css'

/* ══════════════════════════════════════════════════════════════
   PRODUCT DATA — sourced from Reona brochure
   ──────────────────────────────────────────────────────────────
   HOW TO EDIT:
   - "name"        → product name displayed on the card
   - "tag"         → category label (top-left badge on card)
   - "specialty"   → bold tagline under the image
   - "specs"       → bullet list of key specifications
   - "image"       → URL of the product photo
                     Replace with your own product photo path:
                     e.g. '/images/kspv1s-mop.jpg'
                     (put images in the /public/images/ folder)
   ══════════════════════════════════════════════════════════════ */

const products = [
  {
    name: 'KSPV1S Cotton Mop',
    tag: 'Mops',
    specialty: 'Superior Absorption for Wet & Dry Floors',
    specs: [
      '80% Cotton, 20% Poly Viscose blend',
      'Excellent water absorption & retention',
      'Durable, weightless PV cloth — Cut End',
      'Available in 350g & 550g',
      '36 pcs per carton (350g) · 24 pcs (550g)',
      '100% Export Quality',
    ],
    // REPLACE: Use a close-up of the KSPV1S mop on a clean floor
    image:
       '/images/mop1.png'
  },
  {
    name: 'BL75 Natural Cotton Mop',
    tag: 'Mops',
    specialty: 'Pure Bleached Cotton, Brilliantly White',
    specs: [
      '100% Natural Bleached Cotton',
      'Pure white colour — Cut End',
      'Available in 350g & 550g',
      '36 pcs per carton (350g) · 24 pcs (550g)',
      '100% Export Quality',
    ],
    // REPLACE: Use a photo of the BL75 white cotton mop head
    image:
      'images/mop2.png',
  },
  {
    name: 'NC2S Natural Cotton Mop',
    tag: 'Mops',
    specialty: 'Ivory White — 100% Pure Cotton',
    specs: [
      '100% Natural Cotton — Ivory White',
      'Cut End construction',
      'Available in 350g & 550g',
      '36 pcs per carton (350g) · 24 pcs (550g)',
      '100% Export Quality',
    ],
    // REPLACE: Use a photo of the NC2S ivory cotton mop
    image:
      'images/mop3.png',
  },
  {
    name: 'Color Mops — 350g',
    tag: 'Mops',
    specialty: 'Vibrant Colour, Professional Grade',
    specs: [
      '100% Pure Bleached Coloured Cotton',
      '350g Cut End — 36 pcs per carton',
      '550g Stitched Loop End — 24 pcs per carton',
      'Colours: Red, Yellow, Blue, Green',
      '100% Extra Virgin Plastic clip',
      '100% Export Quality',
    ],
    // REPLACE: Use a colourful mop head product photo (Red/Blue/Green/Yellow)
    images: {
        green: "/images/mop350-green.jpg",
        red: "/images/mop350-red.jpg",
        blue: "/images/mop350-blue.jpeg",
        yellow: "/images/mop350-yellow.jpeg",
    },
  },
    {
    name: 'Color Mops — 550g',
    tag: 'Mops',
    specialty: 'Vibrant Colour, Professional Grade',
    specs: [
      '100% Pure Bleached Coloured Cotton',
      '350g Cut End — 36 pcs per carton',
      '550g Stitched Loop End — 24 pcs per carton',
      'Colours: Red, Yellow, Blue, Green',
      '100% Extra Virgin Plastic clip',
      '100% Export Quality',
    ],
    // REPLACE: Use a colourful mop head product photo (Red/Blue/Green/Yellow)
     images: {
        red: "/images/mop550-red.jpeg",  
        green: "/images/mop550-green.jpg",
        blue: "/images/mop550-blue.jpeg",
        yellow: "/images/mop550-yellow.jpeg",
    },
    defaultColor: "red",
  },
  {
    name: 'Duck mop',
    tag: 'Mops',
    specialty: 'Large-Area Dust Control for Commercial Spaces',
    specs: [
      '100% Natural Cotton Duck Mop Mix Color',
      '275g Round Clip — 60 pcs per carton',
      'Colours: Red & White, Blue & White',
      '100% Export Quality',
    ],
    // REPLACE: Use a wide-frame photo of the airport/flat mop in use
    image:
      'images/mop4.png',
  },
  {
    name: 'Airport Mop',
    tag: 'Mops',
    specialty: 'Large-Area Dry Dust Cleaning for Commercial & Industrial Floors',
    specs: [
      'Premium 100% Cotton Dust Mop Head',
    'Lightweight Rust-Resistant Aluminum Handle',
    'High Dust Absorption Performance',
     'Reusable & Washable Cotton Refill',
    'Low Maintenance Design',
    'Ideal for Commercial & Industrial Use'
    ],
    // REPLACE: Use a wide-frame photo of the airport/flat mop in use
    image:
      'images/airportmop.jpeg',
  },
  {
    name: '15-inch Silicon Wiper',
    tag: 'Wipers',
    specialty: 'Virgin Rubber Precision — Streak-Free Every Time',
    specs: [
      '100% Virgin Rubber — sharp, durable blade',
      '4-Layer coated metal stick',
      '15-inch coverage per stroke',
      'Suitable for all floor types',
      'Sharp, Streak-Free Cleaning Edge',
      'Lightweight & Easy to Use',
      'Durable & Long-Lasting Construction',
    ],
    // REPLACE: Use a product photo of the silicon wiper on a wet floor
    image:
      'images/wiper1.jpeg',
  },
  {
    name: 'Black Wiper Range',
    tag: 'Wipers',
    specialty: 'Sharp Blade in 12, 15 & 19-inch Widths',
    specs: [
      'Sizes: 12-inch, 15-inch, 19-inch',
      'Sharp black rubber blade',
      '4-Layer coated metal stick',
      'Heavy-duty commercial performance',
      'Lightweight & Easy to Use',
      'Durable & Long-Lasting Construction',
      'Superior Water & Liquid Removal',
    ],
    // REPLACE: Use a product flat-lay photo of the black wiper range
    image:
      'images/wiper2.png',
  },
  {
    name: 'Blue Wiper Range',
    tag: 'Wipers',
    specialty: 'Clean Lines in 12 & 16-inch Formats',
    specs: [
      'Sizes: 12-inch & 16-inch',
      'Blue rubber blade — 4-Layer metal stick',
      'Smooth glide on wet or dry surfaces',
      'Lightweight & Easy to Use',
      'Rust-Free Construction',
      'Sharp, Streak-Free Cleaning Edge',
    ],
    // REPLACE: Use a photo of the blue floor wiper product
    image:
      'images/wiper3.png',
  },  
  {
    name: 'Table Wiper',
    tag: 'Wipers',
    specialty: 'Smooth, Scratch-Free Wiping Performance',
    specs: [
      '100% Virgin Plastic Body',
      'Premium Virgin Rubber Blade',
      'Sharp, Streak-Free Cleaning Edge',
      'Comfortable Ergonomic Handle',
      'Lightweight & Durable Design',
    ],
    // REPLACE: Use a photo of the blue floor wiper product
    image:
      'images/wiper4.jpg',
  },
  {
    name: 'Multy Brush',
    tag: 'Brushes',
    specialty: 'No Scratch on Floor & Wall — 8 & 10-inch',
    specs: [
      'Available in 8-inch and 10-inch',
      'Scratch-free on all floor & wall surfaces',
      '4-Layer coated handle',
      '100% Export Quality',
    ],
    // REPLACE: Use a product photo of the multy brush tool
    image:
      'images/brush1.png',
  },
  {
    name: 'Scratch Brush Range',
    tag: 'Brushes',
    specialty: 'Deep Scrub — 6, 8 & 10-inch',
    specs: [
      'Sizes: 6-inch, 8-inch, 10-inch',
      '4-Layer coating on metal stick',
      'Designed for tough floor scrubbing',
      'No scratch on delicate surfaces',
    ],
    // REPLACE: Use a photo of the scratch brush product lineup
    image:
      'images/brush2.png',
  },
  {
    name: 'Double Hockey Brush with Container',
    tag: 'Brushes',
    specialty: 'Premium Toilet Brush — Single & Double',
    specs: [
      '100% Virgin Plastic — Premium Grade',
      'Heavy Weight construction',
      'Single Hockey and Double Hockey variants',
      'Container included — 100% Export Quality',
    ],
    // REPLACE: Use a product photo of the hockey toilet brush with its container
    image:
      'images/Doublehockey.png',
  },
  {
    name: 'Single Hockey Brush with Container',
    tag: 'Brushes',
    specialty: 'Premium Toilet Brush — Single & Double',
    specs: [
      '100% Virgin Plastic — Premium Grade',
      'Heavy Weight construction',
      'Single Hockey and Double Hockey variants',
      'Container included — 100% Export Quality',
    ],
    // REPLACE: Use a product photo of the hockey toilet brush with its container
    image:
      'images/singlehockey.jpeg',
  },
  {
    name: 'Premium-Round Brush with Container',
    tag: 'Brushes',
    specialty: 'Premium — Heavy Weight Virgin Plastic',
    specs: [
      '100% Virgin Plastic — Premium & Regular variants',
      'Round brush head for full bowl coverage',
      'Stylish container stand included',
      '100% Export Quality',
    ],
    // REPLACE: Use a studio photo of the round toilet brush with container
    image:
      'images/roundbrush.jpeg',
  },
  {
    name: 'Regular-Round Brush with Container',
    tag: 'Brushes',
    specialty: 'Regular — Heavy Weight Virgin Plastic',
    specs: [
      '100% Virgin Plastic — Premium & Regular variants',
      'Round brush head for full bowl coverage',
      'Stylish container stand included',
      '100% Export Quality',
    ],
    // REPLACE: Use a studio photo of the round toilet brush with container
    image:
      'images/roundbrush2.jpeg',
  },
  {
    name: 'Iron Brush Premium',
    tag: 'Brushes',
    specialty: 'Heavy Duty — Built for Tough Cleaning',
    specs: [
      '100% Virgin Plastic — Heavy Duty grade',
      'Stiff, long-lasting bristles',
      'Ergonomic grip handle',
      '100% Export Quality',
    ],
    // REPLACE: Use a product photo of the iron brush on a dark background
    image:
      'images/ironbrush.png',
  },
    {
    name: 'Basin Brush Premium',
    tag: 'Brushes',
    specialty: 'Heavy Duty — Built for Tough Cleaning',
    specs: [
      '100% Virgin Plastic — Heavy Duty grade',
      'Stiff, long-lasting bristles',
      'Ergonomic grip handle',
      '100% Export Quality',
    ],
    // REPLACE: Use a product photo of the iron brush on a dark background
    image:
      'images/basinbrush.png',
  },
      {
    name: 'Carpet Brush Premium',
    tag: 'Brushes',
    specialty: "Efficient Dust Collection & Deep Carpet Cleaning",
    specs: [
      "100% Virgin Plastic Dust Pan",
    "Premium Quality Nylon Bristles",
    "Ergonomic Non-Slip Grip Handle",
    "Wide Dust Pan for Maximum Collection",
    "Durable & Lightweight Construction",
    ],
    // REPLACE: Use a product photo of the iron brush on a dark background
    image:
      'images/carpetbrush.jpg',
  },
  {
    name: 'Grass Broom — Premium Range',
    tag: 'Brooms',
    specialty: 'Natural Grass · Dust-Free · 5 Signature Variants',
    specs: [
      '100% Natural Grass — Dust Free',
      'Variants: Jas (Pure White) · Ruby 5D · Tiyara Flat',
      'Variants: Isha Normal · Fiza Mix',
      'Premium export quality packaging',
    ],
    // REPLACE: Use a product photo of the grass broom variants laid out flat
    image:
      'images/gressbroom.png',
  },
  {
    name: 'Soft & Hard Broom Range',
    tag: 'Brooms',
    specialty: 'Virgin Plastic · Wooden Handle · Export Grade',
    specs: [
      '100% Virgin Plastic — Heavy Weight bristles',
      'Solid wooden handle',
      'Soft Broom Large, Soft Broom Premium, Hard Broom',
      '100% Export Quality',
    ],
    // REPLACE: Use a clean studio shot of the soft and hard broom range
    image:
      'images/softbroom.jpg',
  },
  {
    name: 'Plastic Handle Broom',
    tag: 'Brooms',
    specialty: 'Lightweight. Durable. Everyday Excellence.',
    specs: [
      'Plastic Handle Broom — 100% Virgin Plastic',
      'Aluminium Handle Broom — Premium lightweight',
      'Plastic Dust Free Broom — Small & Big',
      '100% Export Quality',
    ],
    // REPLACE: Use a photo of the plastic/aluminium broom variants together
    image:
      'images/plasticbroom.jpg',
  },
    {
    name: 'Aluminium Handle Broom',
    tag: 'Brooms',
    specialty: 'Lightweight. Durable. Everyday Excellence.',
    specs: [
      'Plastic Handle Broom — 100% Virgin Plastic',
      'Aluminium Handle Broom — Premium lightweight',
      'Plastic Dust Free Broom — Small & Big',
      '100% Export Quality',
    ],
    // REPLACE: Use a photo of the plastic/aluminium broom variants together
    image:
      'images/aluminumbroom.jpg',
  },
  {
    name: 'Cob Web Broom & Telescopic Fan Cleaner',
    tag: 'Brooms',
    specialty: 'Reach Every Corner — Expandable Handle',
    specs: [
      'Cob Web Cleaning Broom — long reach design',
      'Telescopic Fan Cleaner — expandable, extra long stick',
      'Cleans fans, ceilings, corners',
    ],
    // REPLACE: Use a photo of the telescopic cleaner in use on a ceiling fan
    image:
      'images/cobweb.png',
  },
  {
    name: 'Premium Cotton Towels',
    tag: 'Towels',
    specialty: '100% Cotton — Home & Hospitality Grade',
    specs: [
      'Face Towel — 32×32 cm',
      'Kitchen Towel — 40×17 cm',
      'Hand Towel — 50×100 cm',
      'Bath Towel — 70×140 cm',
      'Batch Sheet — 90×160 cm',
      'Kitchen Towel Button Terry & Kitchen Face Cloth — 32×32 cm',
      '100% Cotton · Durable',
    ],
    // REPLACE: Use a luxury stack-of-towels photo on a marble surface
    image:
      'images/towels.jpg',
  },
]

/* ─── Category filter tabs ────────────────────────────────────
   To add a new category: add the category name to the
   `products` array above and it will appear automatically.
   ─────────────────────────────────────────────────────────── */
const allCategories = ['All', ...new Set(products.map((p) => p.tag))]

function Products() {
  const [active, setActive] = useState('All')
  const [selectedImages, setSelectedImages] = useState({});

  const visible =
    active === 'All' ? products : products.filter((p) => p.tag === active)

  return (
    <section id="products" className="products">
      <div className="products__container">

        {/* Section header */}
        <div className="products__header">
          <p className="products__eyebrow">Our Range</p>
          <h2 className="products__title">Crafted for Every Surface</h2>
          <p className="products__subtitle">
            Every product engineered to 100% export quality standards —<br />
            from household to commercial, we have your floor covered.
          </p>
        </div>

        {/* Category filter tabs */}
        <div className="products__tabs">
          {allCategories.map((cat) => (
            <button
              key={cat}
              className={`products__tab ${active === cat ? 'products__tab--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product grid */}
        <div className="products__grid">
          {visible.map((product, i) => (
            <article key={i} className="product-card">
              {/* Product image */}
              {/* Product image */}

<div className="product-card__img-wrap">

  <img
    src={
      selectedImages[product.name] ||
      product.image ||
      product.images?.green
    }
    alt={product.name}
    className="product-card__img"
    loading="lazy"
  />

  <span className="product-card__tag">
    {product.tag}
  </span>

  {product.images && (

    <div className="color-picker">

      <div
    className="dot green"
    onClick={() =>
      setSelectedImages({
        ...selectedImages,
        [product.name]: product.images.green
      })
    }
  />


      <div
    className="dot red"
    onClick={() =>
      setSelectedImages({
        ...selectedImages,
        [product.name]: product.images.red
      })
    }
  />

      <div
    className="dot blue"
    onClick={() =>
      setSelectedImages({
        ...selectedImages,
        [product.name]: product.images.blue
      })
    }
  />

      <div
    className="dot yellow"
    onClick={() =>
      setSelectedImages({
        ...selectedImages,
        [product.name]: product.images.yellow
      })
    }
  />

    </div>

  )}

</div>

              {/* Product info */}
              <div className="product-card__body">
                <h3 className="product-card__name">{product.name}</h3>
                <p className="product-card__specialty">{product.specialty}</p>
                <ul className="product-card__specs">
                  {product.specs.map((spec, j) => (
                    <li key={j}>{spec}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Products

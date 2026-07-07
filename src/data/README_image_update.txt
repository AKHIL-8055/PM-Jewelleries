To update image filenames based on product name matching asset names:
1) For each product, set image: `/src/assets/${product.name.en}.png` (spaces preserved, capitalize preserved as in code).
2) For Hero slides, set image based on slide categories/text, currently:
   - Gold Necklaces -> `/src/assets/Exquisite Gold Necklaces.png` (verify exact asset name)
   - Bridal Set -> `/src/assets/Exclusive Bridal Collections.png` (verify exact asset name)
   - Gold Bangles -> `/src/assets/Traditional Gold Bangles.png` (verify exact asset name)
   - Gold Rings -> `/src/assets/Certified Diamond & Gold Rings.png` (verify exact asset name)

Note: Exact verification required because assets may use commas/dashes/case exactly as filenames.


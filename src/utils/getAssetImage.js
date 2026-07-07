  // Converts a product name into an asset path.
// Assumes the asset filename matches the English product name exactly (including spaces/characters)
// but with the extension preserved from the asset folder.
// Example: "Royal Antique Gold Choker" -> "/src/assets/Royal Antique Gold Choker.png"

export function getAssetImageFromProductName(productName, assetsBasePath = '/src/assets') {
  if (!productName || typeof productName !== 'string') return undefined;

  // The assets folder filenames include a trailing ".png" and may contain special characters like % or ' or parentheses.
  // We rely on the product name string to match the filename (as you requested).
  // Some filenames contain dots (.) and percent (%) characters.
  // They must be URL-encoded to work reliably in browser requests.
  const encodedName = encodeURIComponent(productName);
  return `${assetsBasePath}/${encodedName}.png`;
}



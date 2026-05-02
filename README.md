# Pixel Forge Landing Page

Standalone ecommerce landing page for **Pixel Forge**, designed for retro handheld sales with Shopify Buy Button embeds.

## Files
- `index.html` — One-page storefront structure and Shopify Buy Button placeholders.
- `styles.css` — Mobile-first retro visual styling with reusable CSS variables.
- `script.js` — Navigation behavior, footer year update, and commented Shopify init example.

## Shopify Buy Button Setup

### 1) Create Buy Buttons in Shopify
1. In Shopify admin, install/use the **Buy Button** sales channel.
2. Create a Buy Button for each handheld product:
   - Pixel Forge Classic
   - Pixel Forge Pro
   - Pixel Forge Max
3. Copy each generated embed code snippet.

### 2) Paste Buy Button Code into Product Slots
In `index.html`, locate these placeholders:

- `<div id="shopify-buy-button-classic"></div>`
- `<div id="shopify-buy-button-pro"></div>`
- `<div id="shopify-buy-button-max"></div>`

Paste each Shopify snippet directly inside (or replace) the matching div.

> Tip: If Shopify generates script tags once globally, keep one shared script include and keep product-specific init blocks tied to each placeholder `id`.

### 3) Optional JavaScript-based Initialization
`script.js` includes a fully commented sample for initializing Buy Buttons in code. To use it:
1. Uncomment the block in `script.js`.
2. Replace:
   - `your-store.myshopify.com`
   - `your-storefront-access-token`
   - each `shopify_product_id_*`
3. Remove duplicate inline Shopify scripts if needed.

## Uploading to Standard Hosting (GoDaddy cPanel)
1. Zip these files:
   - `index.html`
   - `styles.css`
   - `script.js`
2. Log in to cPanel → **File Manager**.
3. Open `public_html` (or your domain’s document root).
4. Upload the zip, then extract it.
5. Confirm `index.html` is in the root of the site folder.
6. Visit your domain and hard-refresh browser cache.

## Customization Notes
- Edit colors in `styles.css` under `:root` CSS variables.
- Update policy links in footer once your legal pages are live.
- Replace placeholder contact/social handles with real channels.
- Replace placeholder product visuals with real product images when available.

## Legal Disclaimer Reminder
Keep the disclaimer in the FAQ section to clarify that Pixel Forge is independent and not affiliated with Nintendo, Sony, Sega, or other game publishers. Avoid claims about distributing copyrighted game ROM content.

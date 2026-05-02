const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

document.querySelectorAll('#site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav?.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

/*
  Shopify Buy Button initialization example.
  Replace values with your Shopify shop domain and product component IDs,
  then uncomment and adapt as needed.

(function () {
  const scriptURL = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';

  function loadShopifyScript() {
    const script = document.createElement('script');
    script.async = true;
    script.src = scriptURL;
    document.head.appendChild(script);
    script.onload = initBuyButtons;
  }

  function initBuyButtons() {
    const client = ShopifyBuy.buildClient({
      domain: 'your-store.myshopify.com',
      storefrontAccessToken: 'your-storefront-access-token',
    });

    ShopifyBuy.UI.onReady(client).then((ui) => {
      ui.createComponent('product', {
        id: 'shopify_product_id_classic',
        node: document.getElementById('shopify-buy-button-classic'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
      });

      ui.createComponent('product', {
        id: 'shopify_product_id_pro',
        node: document.getElementById('shopify-buy-button-pro'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
      });

      ui.createComponent('product', {
        id: 'shopify_product_id_max',
        node: document.getElementById('shopify-buy-button-max'),
        moneyFormat: '%24%7B%7Bamount%7D%7D',
      });
    });
  }

  if (window.ShopifyBuy) {
    initBuyButtons();
  } else {
    loadShopifyScript();
  }
})();
*/

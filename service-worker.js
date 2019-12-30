/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a694bb2d27602c4092be83eada0eca18"
  },
  {
    "url": "dist/esm/_rollupPluginBabelHelpers-ed8cbb08.js",
    "revision": "98841d0383596bb5de4892e516827e76"
  },
  {
    "url": "dist/esm/configureStore.js",
    "revision": "d0a41ca1ac228158166574a93fa4a981"
  },
  {
    "url": "dist/esm/connect-mixin-144a42a2.js",
    "revision": "a49ca2c2db5b35f334fe05ae290c94ac"
  },
  {
    "url": "dist/esm/creators.js",
    "revision": "7c0db263f5da6366a69f7951d92f00c5"
  },
  {
    "url": "dist/esm/DecrementButton.js",
    "revision": "6052856f27010efb021c66be65532f1b"
  },
  {
    "url": "dist/esm/dispatchers.js",
    "revision": "ab7d625bea6d29d629023e5194fa0196"
  },
  {
    "url": "dist/esm/events.js",
    "revision": "ae835cc79482f482821f74744dcaf56a"
  },
  {
    "url": "dist/esm/IncrementButton.js",
    "revision": "b9bae5f10a425fd5a4b49ee47d162198"
  },
  {
    "url": "dist/esm/index.js",
    "revision": "84986c6310b3baebae1b6cde5fada43c"
  },
  {
    "url": "dist/esm/index2.js",
    "revision": "03eb8beee67ca55eb29e46e01930a193"
  },
  {
    "url": "dist/esm/index3.js",
    "revision": "06ca8d5c955b2b8e54d336b034745fac"
  },
  {
    "url": "dist/esm/initialState.js",
    "revision": "7de8767f8b06f43afda2d13ab376050f"
  },
  {
    "url": "dist/esm/iron-button-state-7242b070.js",
    "revision": "9a46a061337a78b6f895f8668e48e51b"
  },
  {
    "url": "dist/esm/iron-flex-layout-2a75219c.js",
    "revision": "74f726cc3efe97ea95b84a4806404bd3"
  },
  {
    "url": "dist/esm/lazy-reducer-enhancer-e37d5640.js",
    "revision": "12594383a85b1ee713f176d7b2acf5b6"
  },
  {
    "url": "dist/esm/lit-element-3fe2c8b5.js",
    "revision": "3bcbad2c76acec2e76acfb599afeedaf"
  },
  {
    "url": "dist/esm/lit-redux-router-813ce0f2.js",
    "revision": "15c2d85e7ffc6fed4430bd497cab15a9"
  },
  {
    "url": "dist/esm/middleware.js",
    "revision": "38a4f40b4dca48c7a89300a65ba9c47d"
  },
  {
    "url": "dist/esm/php.js",
    "revision": "4e3b6d8f2f9987c72b7a9d73046e073b"
  },
  {
    "url": "dist/esm/php.loader.js",
    "revision": "35ed5f08bea1a91a5b1e2b64beaf03b6"
  },
  {
    "url": "dist/esm/redux-775a3885.js",
    "revision": "b0cdcd2186e9163f24e851d046b3a78f"
  },
  {
    "url": "dist/esm/types.js",
    "revision": "83be9645f99d96f4deaa6f7a8de51a16"
  },
  {
    "url": "dist/esm/utilities.js",
    "revision": "48a15f8dd71efd97ffc7e92b3eefd998"
  },
  {
    "url": "dist/esm/value.js",
    "revision": "d1f9dbcf159a109f7193a1c6d791a971"
  },
  {
    "url": "dist/esm/x-php-app.js",
    "revision": "88958cf4f68a49583a4dc8dda6b72c49"
  },
  {
    "url": "dist/esm/XPHP.js",
    "revision": "0546aec96d1cc8d7e3029d2879da69d0"
  },
  {
    "url": "dist/esm/XPHPApp.js",
    "revision": "7c5090ce8d02f6d02d3572044c15fffe"
  },
  {
    "url": "dist/esm/XPHPBranding.js",
    "revision": "a5663b2f047b1bc729b7ec241f5b9072"
  },
  {
    "url": "dist/esm/XPHPCounter.js",
    "revision": "f042963c92cee5c63209ec6032c53203"
  },
  {
    "url": "dist/esm/XPHPDrawer.js",
    "revision": "7180d2c6f3bf13d46b0102a8afc5e7d8"
  },
  {
    "url": "dist/esm/XPHPHamburger.js",
    "revision": "dc09cedea7164aae298cb9fdb8351d32"
  },
  {
    "url": "dist/esm/XPHPScript.js",
    "revision": "c85b2f664163dd3cf562d16f09ca9ad7"
  },
  {
    "url": "dist/esm/XPHPStore.js",
    "revision": "4f7d14f4f57fdbd48d3dcff67b0d5f30"
  },
  {
    "url": "favicon.ico",
    "revision": "8e95f1cb8b20c3c74e03e8788dcf2130"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "1541be46d0e48ddf14d4eaffdf2f2fa2"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "b3c4915043fbf42450a262a702a81dc9"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "737dbeeb265bff426a290c3e156b16a7"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "8b0639445ecc159db7848cec32fc1636"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "9843dc733a8bca96ebb41a6e330959e0"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "4b995869ae98ea520a369dad70a19e63"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "d4e01d5114f575aac7ab4ecf13794364"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "602f70018994896e1a4573e738ce1225"
  },
  {
    "url": "index.html",
    "revision": "fac7c07703767ad851e88c4a640306db"
  },
  {
    "url": "service-worker/registerServiceWorker.js",
    "revision": "2430ad6c9c7564564959df43b746fb26"
  },
  {
    "url": "service-worker/workbox-config.js",
    "revision": "e196bbcbdfdfbb53ac2a0c629216333a"
  },
  {
    "url": "theme.css",
    "revision": "8d9768c408d6a33263bbd99e05896737"
  },
  {
    "url": "/x-php/",
    "revision": "129089dbef6dde396c4a2c5d3c2eee08"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|svg)$/, new workbox.strategies.CacheFirst({ "cacheName":"images", plugins: [new workbox.expiration.Plugin({ maxEntries: 100, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/cdn.jsdelivr.net\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"cdn-jsdeliver-net-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/rawgit.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"rawgit-com-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');
workbox.routing.registerRoute(/^https:\/\/unpkg.com\/.*$/, new workbox.strategies.CacheFirst({ "cacheName":"unpkg-com-cache", plugins: [new workbox.cacheableResponse.Plugin({ statuses: [ 0, 200 ] }), new workbox.expiration.Plugin({ maxEntries: 1000, maxAgeSeconds: 31536000, purgeOnQuotaError: false })] }), 'GET');

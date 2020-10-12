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

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */

self.__precacheManifest = [
  {
    url: "index.html",
    revision: "25dd2d2e1f4a92492b9736fab3677713",
  },
  {
    url: "manifest.json",
    revision: "7cd46395a0869e79a9cdaecb4deb4262",
  },
  {
    url: "static/css/aboutme.css",
    revision: "800bdeffb92b921a41882da1a6992517",
  },
  {
    url: "static/css/admin.css",
    revision: "7b17c6b5728fff27f09df351015fe6bf",
  },
  {
    url: "static/css/carousel.css",
    revision: "4d643bcdf7684919b55b4823c9a873b8",
  },
  {
    url: "static/css/contact.css",
    revision: "859e3338acb8c41f94d2cf4ac6a28311",
  },
  {
    url: "static/css/galery.css",
    revision: "b8ee812787d32363965991d4015e6d72",
  },
  {
    url: "static/css/hamburger.css",
    revision: "f1b591ed8cbc2ce5164f24fc6584f5ed",
  },
  {
    url: "static/css/loader.css",
    revision: "b21c242531672fc536280503de5a5e1d",
  },
  {
    url: "static/css/login.css",
    revision: "11e99321bdbe51fc7d004986f51efab4",
  },
  {
    url: "static/css/main.css",
    revision: "d871b2c6944f44f432febf3867e99436",
  },
  {
    url: "static/css/normalize.css",
    revision: "60a41fed17f51dbd05bf96dda300ded8",
  },
  {
    url: "static/js/admin.js",
    revision: "94a64dec4bd6ee7fd0999a0435797100",
  },
  {
    url: "static/js/carousel.js",
    revision: "4a7f1b06a738e99ca735893e4eba2412",
  },
  {
    url: "static/js/contact.js",
    revision: "ad8b9181f60c287d291713f32c75350e",
  },
  {
    url: "static/js/galery.js",
    revision: "c7a6aee4c855826afb73e48cfa0d04fe",
  },
  {
    url: "static/js/home.js",
    revision: "f8936fe7dcdb27dff244aaf2168194bf",
  },
  {
    url: "static/js/login.js",
    revision: "14cacffc480dbec7960d39cac14d0ff8",
  },
  {
    url: "static/js/navbar.js",
    revision: "1166f81ba55ee2c8438f4667cdd8345c",
  },
  {
    url: "static/js/variables.js",
    revision: "f305fe886fa3622c1aa42523d4799ddd",
  },
  {
    url: "views/aboutme.html",
    revision: "d304e46ae0f53b2a61ce33e90d3b73ad",
  },
  {
    url: "views/admin.html",
    revision: "f6c378ba22c264e233fc784fb59c59e0",
  },
  {
    url: "views/contact.html",
    revision: "45c696ad85b5fb219c5d895a951ff9a4",
  },
  {
    url: "views/galery.html",
    revision: "07f74d35e7f054c7fbfa52b3fb444d65",
  },
  {
    url: "views/login.html",
    revision: "bb31efc43da57810e4950d6e1f6e21bc",
  },
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(
  /\.(?:png|jpg|jpeg|svg|ico)$/,
  workbox.strategies.cacheFirst({
    cacheName: "images",
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 10,
        purgeOnQuotaError: false,
      }),
    ],
  }),
  "GET"
);

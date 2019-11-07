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

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-4211f789f7258d52eba6.js"
  },
  {
    "url": "styles.0da7f2f561c8902f407e.css"
  },
  {
    "url": "styles-99a8b2f7e63dcbae43cf.js"
  },
  {
    "url": "commons-5ed37bedb339929b057d.js"
  },
  {
    "url": "app-0feb87dcf5e979a0c4e2.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-a7388efdc62430243a75.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "aad39c1dad34ee9f2af6c880f8570222"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "d274adf0f008ef152ce70a312b04b730"
  },
  {
    "url": "component---src-pages-index-js-3489f027f74795054820.js"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "afe1406463a0178127280b6085ae75fa"
  },
  {
    "url": "component---src-pages-shirts-js-9e5fb5adae7337e2467a.js"
  },
  {
    "url": "page-data/shirts/page-data.json",
    "revision": "7b561de1b7c621d783fc034e46027fa2"
  },
  {
    "url": "component---src-templates-shirt-js-4b5703852e9445c7b6aa.js"
  },
  {
    "url": "page-data/shirts/1/page-data.json",
    "revision": "b5c6008060dd6bed09a0466f053f02ae"
  },
  {
    "url": "page-data/shirts/10/page-data.json",
    "revision": "29a1338f9269ba8bf99794b0991d6919"
  },
  {
    "url": "page-data/shirts/11/page-data.json",
    "revision": "0c821acb77452155eb47f9bedd5ffed3"
  },
  {
    "url": "page-data/shirts/12/page-data.json",
    "revision": "f8123e61ae467761c3e7b6b29bc4ca5f"
  },
  {
    "url": "page-data/shirts/13/page-data.json",
    "revision": "2a9b50072767e119488551ea722bc25a"
  },
  {
    "url": "page-data/shirts/14/page-data.json",
    "revision": "af99b039591963445946763fed3169e1"
  },
  {
    "url": "page-data/shirts/15/page-data.json",
    "revision": "45a90549a497594c133a68238af4efa0"
  },
  {
    "url": "page-data/shirts/16/page-data.json",
    "revision": "fa6540019ed69667c0c8f47ac77dee5a"
  },
  {
    "url": "page-data/shirts/17/page-data.json",
    "revision": "7ab75683aab7fa4ab810a3fd8b954258"
  },
  {
    "url": "page-data/shirts/18/page-data.json",
    "revision": "d0f0b46024808639a61148a16c5490b2"
  },
  {
    "url": "page-data/shirts/19/page-data.json",
    "revision": "df33086ed97c8eb21085155967a53a19"
  },
  {
    "url": "page-data/shirts/2/page-data.json",
    "revision": "9daed1556112334f3e93d86cadb89838"
  },
  {
    "url": "page-data/shirts/20/page-data.json",
    "revision": "0bd52127e48cf6044172b1fa5dbf9088"
  },
  {
    "url": "page-data/shirts/21/page-data.json",
    "revision": "1d745ff94a400df6137891bd9df56023"
  },
  {
    "url": "page-data/shirts/22/page-data.json",
    "revision": "ef1aba73c777640a2900769eede8000b"
  },
  {
    "url": "page-data/shirts/23/page-data.json",
    "revision": "4b36c1f4751c14878fcf8b1674bff064"
  },
  {
    "url": "page-data/shirts/24/page-data.json",
    "revision": "bebbfd295a7ef16536ed78655334bae0"
  },
  {
    "url": "page-data/shirts/25/page-data.json",
    "revision": "ce2567054a57339c2e4de282db20b991"
  },
  {
    "url": "page-data/shirts/26/page-data.json",
    "revision": "270bb8bd9f36d22449e095c59084c167"
  },
  {
    "url": "page-data/shirts/27/page-data.json",
    "revision": "d1c46bfad9eef22a2d9ba17eb263f388"
  },
  {
    "url": "page-data/shirts/28/page-data.json",
    "revision": "6e5ed04102e6c503b08bebd0c1d4ecd5"
  },
  {
    "url": "page-data/shirts/29/page-data.json",
    "revision": "4b625e08366aef58f941bba8172ace34"
  },
  {
    "url": "page-data/shirts/3/page-data.json",
    "revision": "571e734e73385247e90616a8a7920a13"
  },
  {
    "url": "page-data/shirts/4/page-data.json",
    "revision": "812f15416a687f6dd12160071d591a32"
  },
  {
    "url": "page-data/shirts/5/page-data.json",
    "revision": "0a9cd4c390865cf47184b9603b024e1d"
  },
  {
    "url": "page-data/shirts/6/page-data.json",
    "revision": "d985e879610bf555cf85443cefe5105f"
  },
  {
    "url": "page-data/shirts/7/page-data.json",
    "revision": "3946ea81c6e199d5dda2f9fb3d861d10"
  },
  {
    "url": "page-data/shirts/8/page-data.json",
    "revision": "cad9f11cc792fdc6a07a88363fc0dee2"
  },
  {
    "url": "page-data/shirts/9/page-data.json",
    "revision": "b6ff1d8c21cc21e6c5f1e5414e0f213c"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "535dd19248e02683f53c542acc08f931"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.NetworkFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.indexOf(`=`) !== -1) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-0feb87dcf5e979a0c4e2.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

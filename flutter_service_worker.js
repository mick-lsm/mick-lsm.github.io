'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "130f805aa22fc7f23334ca839cb17ea4",
"assets/AssetManifest.bin.json": "1bc72cad235ea08fdf1688dbad4be894",
"assets/AssetManifest.json": "acf4c9868a7b7d9d384197d7ca668fc9",
"assets/assets/blogs/Welcome%2520to%2520my%2520first%2520Website!.md": "fa82fa7d80a1bc9427f910b1a78685f0",
"assets/assets/fonts/Pacifico-1.ttf": "9b79bde19b07cbc80daeff1aaa085b5c",
"assets/assets/fonts/UnidreamLED.ttf": "12fc160800285847a53d4592b2357737",
"assets/assets/imgs/avatar.png": "9d40c29e77ea36cf1ab5e331bf7f3b4f",
"assets/assets/imgs/backgrounds/10-12--thumb.jpg": "03277966fc3249abf27aea8761ba4332",
"assets/assets/imgs/backgrounds/33b97087-9508-4338-8ea9-bdf8b058fe26_stackoverflow.png": "910c3b1f9716d50fadd8c215f7d11026",
"assets/assets/imgs/backgrounds/A149_Almost_nearly_perfect_reflection_of_the_Three_Sisters_Peaks_in_the_Bow_River._58244570-1b77-4313-9194-c3d7bae9449c.webp": "629551b8768d7cea0aa9261e5e1bc43e",
"assets/assets/imgs/backgrounds/Aqua.jpg": "ed81f522be768f4f7d2c69a83d159b7e",
"assets/assets/imgs/backgrounds/blue-sunset_bg.jpg": "cf8983b7d84a556ca5c76ab023ee45a1",
"assets/assets/imgs/backgrounds/CHILL-SUNSET.jpg": "8c7b4f34cfe314163cffc4811f8437b4",
"assets/assets/imgs/backgrounds/G3Kjk4.jpg": "fd8d48617e192440bd72b0ac139ed399",
"assets/assets/imgs/backgrounds/github-wallpaper-scaled.webp": "2d53b771d65f8192c42ec00c014bdc45",
"assets/assets/imgs/backgrounds/LOYDm_HoXe6ohgip6nzdimTJbARs1uc_jQvP7NxQOYQ.webp": "f7e19dc5f7399a1640519f0da19b5bb3",
"assets/assets/imgs/backgrounds/photo-1485470733090-0aae1788d5af.jpg": "f1de23c10505cc98dffe132571638848",
"assets/assets/imgs/backgrounds/photo-1656986488839-98d639cac5cd.jpg": "8ef6aba71142bddc855e4637fab17da2",
"assets/assets/imgs/backgrounds/ubuntu-24-04-noble-numbat-jpg.webp": "97b7f132ca354520b0951b2fb10074ac",
"assets/assets/imgs/backgrounds/wallpapersden.com_amazing-starry-twilight-2k-hd-desktop_2912x1632.jpg": "459c30739ca4386398f5fba2905b6fd0",
"assets/assets/imgs/backgrounds/wallpapersden.com_the-mountain_3840x2160.jpg": "465335d2bf4942fe0f1c5961e5d2eaa6",
"assets/assets/imgs/bilibili-fill.png": "aaf21d668b0ffad3aa9389d64501403b",
"assets/assets/imgs/bilibili_icon.png": "0af0e9ab932c0f86c1fd3bf5a107fec9",
"assets/assets/imgs/github_icon.png": "8eeb159965db2a3d72b8b7f5a189b7c4",
"assets/assets/imgs/gmail_icon.png": "9d3e74d5b85b96de89f95ddaffc9f0f7",
"assets/assets/imgs/instagram_icon.png": "60e11f3b1e1343349965bc36373cf847",
"assets/assets/imgs/qqmail_icon.png": "c85a153f70038df7a6d516ebaade5bbc",
"assets/assets/imgs/reddit_icon.png": "2ecc6509079dd4dbe423a0b7f65bc156",
"assets/assets/imgs/x_icon.png": "b6c14bf69631e3c5926828069de46c7a",
"assets/assets/imgs/youtube_icon.png": "d2018bc17e556f1a0bebb27dfe723b9d",
"assets/FontManifest.json": "71df03108efef2be1161cb2179a191b7",
"assets/fonts/MaterialIcons-Regular.otf": "e2affadaf8b36bcdf506ff38362d74e6",
"assets/NOTICES": "0925d2a52b827316ffae7b9024518e8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "49cc1a6202134ed4e2264e1721dac74c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "34da8f4f8ff43491829b69a565393efc",
"/": "34da8f4f8ff43491829b69a565393efc",
"main.dart.js": "43fb02a8d78bc16bb179198b05e3266e",
"manifest.json": "6905ac44c8758ef3a48cd57c72aec45b",
"version.json": "5b123284dd079194019257267a8af08f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

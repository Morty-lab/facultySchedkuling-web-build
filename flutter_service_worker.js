'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b883379826c00682490421f713401d45",
".git/config": "19fe1235bec7760f67552fd7e23d1781",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "18f1bfab10a9286127d9526e5f2a9dca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "0b55fe078b6d729c5f8afe6814a8ca3e",
".git/logs/refs/heads/main": "0b55fe078b6d729c5f8afe6814a8ca3e",
".git/logs/refs/remotes/origin/main": "d4df1b844f2f11c2ca5fd8109ccf539d",
".git/objects/00/bc985b2c2c339575f772d8801153b605b7eb68": "7a5f928b221031f02a6c5f7a9101b449",
".git/objects/01/dac9a9e2e7f635ac3c231565711d8efc5ae94f": "2c75f8a92092e7138e6bbba5b1326dd5",
".git/objects/03/3f3938c820eefcdaef0c66379d19d92f1cfd35": "959102ffdb49a46e34c12605f848fdb2",
".git/objects/0f/5afce5f5e7f75dc32e52633da6318361163e39": "a4ac145e652c86233a3961111faffd83",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/4ea7edf56411bbbf17a4dc3ce8e142df090aeb": "633b4d2c6881f20d16bee395881406e3",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1c/741c26e45fa4bcfea5ea98d988a1dc43923ca7": "219e1d4cd26222d225eb936d7941606f",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/22/de4cd7afba15782d71c830a0d57738ef5b443e": "9011bbf41c162a93d534b3322233e19b",
".git/objects/27/4b331e937a778a02ba7b592ce784ac70d1f60c": "0f620251443e394a1803e635f6a6c657",
".git/objects/28/9279792a6d0311981db995a0d9b67a29b91342": "15d0afa9cf6b5a960de1cfc45becdff4",
".git/objects/2a/bc0dcab2847c8ae640e9f7707360addaca5119": "9ac1a1e7fe79ebc3acac5c773d649984",
".git/objects/2c/23d4c3259cd118593b013add6086ce9839c1a3": "46cd4ace87eb3ed9f2b3ee48b6813618",
".git/objects/34/db6ccb2e355760ff9fbfa94795ba84dddb8f7d": "ce6f71d3d64489a5c3ca832b585266b8",
".git/objects/37/f571b42a0a399094b1203c1751d2bc8cb4714a": "6b5fb597c35dfa41ceb2b91863974244",
".git/objects/3d/7ff0e881e40c5e27f6fd5ccaebe5a5a1638438": "b98b4d22cf8d7c79552eaa940ad5aef2",
".git/objects/3d/cfb141802d82b8cf1a93e59e2008f8a369977e": "47ba38481e9f4add7566cdcfe7a16c19",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4c/08c8df3196065b4594217505f6779f56d53fc8": "d9e7c395cf03f9907082b73a31d785eb",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/ab326eadb82b2e60a691884b6efe0ea89ec3ce": "704dd31e7fd2a613f1410446dc23dab6",
".git/objects/60/878723884cf97f1cda1233f32e61eaa113fd5d": "cbed965d229dff79c482bc10e7082c6e",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/63/9343db7020c786bec61bbba1c3a68d1ec5dbb6": "e20ac65e34a6e4b3a503c194e1c4259b",
".git/objects/6d/83125f544b0560dc205ce99bd4095def334cec": "7ffc5f548db42c182e640626ddac52df",
".git/objects/6d/fc2d87bcb7d67ebb6d577d581b632d3deb2ccd": "90b86d329fba7a25e47ecf6d79f67409",
".git/objects/6f/fd7c1c57ea6960bf3aac355aef4397d7d4639f": "b2b430ec86df58a2ff9b4cc24f8df71c",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/d1248552089b3f95b60b00875ccdaa0f5db5c6": "d862ec78e7f981ec742111825deaa38b",
".git/objects/72/983cce7bc3709ba7fa33b32e9b7a0b15a96fa6": "bbce7fbb74d6a11766b7f143156bdae1",
".git/objects/76/80968a10286271590ef85cd78adc399b7e85a1": "583816b22f9dea37bd49e5557af792f0",
".git/objects/78/5383774a7403ff43f483c515aa1ac989b62c09": "832d7b6fbf7670968a2956d14a2450e5",
".git/objects/80/1e73880182eece4a9ead7d775cd5501680154d": "0b97497d884dabc86ad04ef3657c59e8",
".git/objects/82/2f4f2d6cc3abf16c73955309820a2308a1a4c1": "51941c97b2469ad333b5eba660b6a56b",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/4787e70eff763e21c73679efed35af9618ca2a": "ac541f3747b841a9a90aa42f2552928d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/2720a631cd4754bc6d712cfa5c4a35b47987df": "eabdf95a436694d50de3956a329b94bf",
".git/objects/90/70e8e88da73a58d142b4b96e406c99b2458be5": "e114ba57488f405086721fc45ff5fc3e",
".git/objects/93/d6eaaff43211eacb03d62985a6df2e0bc3f2c9": "3211edb4b25b395769e0e146f9751a04",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a5/5b4bbc1bd82f3fe64f5108170b0837ef691d8a": "52f09d1d613142593963a51d1d939f47",
".git/objects/ab/149b719f24da5333b57de3b5160ec27bea3fc1": "262a44599564b606f384b8c79f3a2468",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/be/7f6bf0165192d26fd7504f4d3edcb88bed8de3": "3f70880e6579def3448f353b5ea074ca",
".git/objects/c2/c17b2e351d0023dd11bf0e0582d8c0070e07fe": "e8554aaefb353b94d3cfdb3dc442f16d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/3f3171e7f57cdcee085d05f0cfd89eb7d401f8": "3c5310df67298495d9cdf650a2a3c764",
".git/objects/e9/240743b21f1388c4fd5b0ea55b457a49fed6b9": "e0c898833d7ab593845476f95504a2ab",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/c9ecc54e395514bacfa44f51fd0a1d7063a3ac": "446a7b1c70d86f43284d3fab1b63eb0e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/85cd6c9e7fdb748c63ba7e85d069adee2e178d": "65100c3e2b17eccd9b74a2eae161aff2",
".git/refs/heads/main": "2bc0363daf3047581e2f744d5d2f99bb",
".git/refs/remotes/origin/main": "2bc0363daf3047581e2f744d5d2f99bb",
"assets/AssetManifest.bin": "e428754213249ff62c6d198a40ee5e4b",
"assets/AssetManifest.bin.json": "8906f1eaee4422423135997920e83b34",
"assets/AssetManifest.json": "a36cb37f9334c037e6a9b5fd6b9c3297",
"assets/FontManifest.json": "c16f0f7a3c1f40152f188e90b2fcaf94",
"assets/fonts/MaterialIcons-Regular.otf": "642780a97ed2ee893fca4263a501ffd9",
"assets/lib/assets/avatar.png": "28674b3ec8aa1a32aa098ba1ce19a65a",
"assets/lib/assets/fonts/Satoshi-Bold.ttf": "50eee48d495ab752b3e6b873b1206f10",
"assets/lib/assets/fonts/Satoshi-Medium.ttf": "7bec814954d059a7e7dae047285eedbc",
"assets/lib/assets/fonts/Satoshi-Regular.ttf": "4da5359f3f975b25249e8cfcf142f39e",
"assets/lib/assets/images/auth-illustration.png": "d469a2574fa80ee72be4fc7697143407",
"assets/lib/assets/images/avatar.jpg": "d0127c6a8b0d5bd088ad670269b159da",
"assets/NOTICES": "9c2cd3319cf1a5cd59404998eac5bfbd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Bold.ttf": "8fedcf7067a22a2a320214168689b05c",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Duotone.ttf": "c48df336708c750389fa8d06ec830dab",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Fill.ttf": "5d304fa130484129be6bf4b79a675638",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Light.ttf": "f2dc1cd993671b155e3235044280ba47",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Thin.ttf": "f128e0009c7b98aba23cafe9c2a5eb06",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor.ttf": "003d691b53ee8fab57d5db497ddc54db",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "e965eec2190a028f34bc6ffe2b3a3bdc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "6060cec0dd5d50564d00cf582b7d3684",
"/": "6060cec0dd5d50564d00cf582b7d3684",
"main.dart.js": "161257b732cd019927a3dad362bcfabf",
"manifest.json": "181530f0d13ecacac09e8057134766e3",
"version.json": "86fdf136379e1a306ddceb73ab953dd3"};
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

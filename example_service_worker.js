//This is the "Offline page" service worker

//Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener('install', function(event) {
  var offlinePage = new Request('offline.html');
  event.waitUntil(
  fetch(offlinePage).then(function(response) {
    return caches.open('offline1').then(function(cache) {
      console.log('[off] Cached offline page during Install'+ response.url);
      return cache.put(offlinePage, response);
    });
  }));
});

//If any fetch fails, it will show the offline page.
//Maybe this should be limited to HTML documents?
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function(error) {
        console.error( '[off] Network request Failed. Serving offline page ' + error );
        return caches.open('offline1').then(function(cache) {
          return cache.match('offline.html');
      });
    }));
});


//cache of files that are part of offline.html cache.put
var ASSETS = [

          '/pwa/offline/js/main.js',
          '/upload/off-1about.jpg',
          '/upload/off-1best-bg.jpg',
          '/upload/off-1gallery-bg.jpg',
          '/upload/off-1intro-bg.jpg',
          '/upload/off-1logo.png',
          '/upload/off-1menu-bg.jpg',
          '/upload/off-best-01.jpg',
          '/upload/off-best-02.jpg',
          '/upload/off-best-03.jpg',
          '/upload/off-call-me-32.png'
          ];
self.oninstall = function (evt) {
  evt.waitUntil(caches.open('offline1').then(function (cache) {
    return Promise.all(ASSETS.map(function (url) {
      return fetch(url).then(function (response) {
        return cache.put(url, response);
      });
    }));
  }))
};

// or

//cache of files that are part of offline.html cache.addAll
/*
var ASSETS = [

          '/pwa/offline/js/main.js',
          '/upload/off-1about.jpg',
          '/upload/off-1best-bg.jpg',
          '/upload/off-1gallery-bg.jpg',
          '/upload/off-1intro-bg.jpg',
          '/upload/off-1logo.png',
          '/upload/off-1menu-bg.jpg',
          '/upload/off-best-01.jpg',
          '/upload/off-best-02.jpg',
          '/upload/off-best-03.jpg',
          '/upload/off-call-me-32.png'
          ];
self.oninstall = function (evt) {
  evt.waitUntil(caches.open('offline-cache-name').then(function (cache) {
    return cache.addAll(ASSETS);
  }))
};
*/

//This is a event that can be fired from your page to tell the SW to update the offline page
self.addEventListener('refreshOffline', function(response) {
  return caches.open('offline1').then(function(cache) {
    console.log('[off] Offline page updated from refreshOffline event: '+ response.url);
    return cache.put(offlinePage, response);
  });
});
caching browser-cache service-worker
shareedit

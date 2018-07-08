 let arrayToCache = [
      '/',
      'index.html',
      'restaurant.html',
      'css/styles.css',
      '/js/main.js',
      '/js/dbhelper.js',
      '/js/restaurant_info.js',
      'data/restaurants.json',
      '/img/1.jpg',
      '/img/2.jpg',
      '/img/3.jpg',
      '/img/4.jpg',
      '/img/5.jpg',
      '/img/6.jpg',
      '/img/7.jpg',
      '/img/8.jpg',
      '/img/9.jpg',
      '/img/10.jpg'
   ];



  //define cache name
  let CACHE = 'network-or-cache-v1';
  // add image to cache
  self.addEventListener('install', function(event){
     self.skipWaiting();
     event.waitUntil(
        caches
            .open(CACHE)
            .then((cache) => cache.addAll(arrayToCache))
      );
  });

//get dates from cache, after that from Network
self.addEventListener('fetch', function(event, cache=CACHE){
  const url = new URL(event.request.url);
  console.log(url);
    caches.open(CACHE)
    .then((cache) => {
      caches.match(url, {ignoreSearch: true}).then((res) => {
        return response || fetch(event.request);//res is the Response Object
      })
    })
    event.waitUntil(update(event.request));
});


   // We only want to call event.respondWith() if this is a GET request for an HTML document.

      //event.waitUntil(update(event.request));
//update dates from network
function update(request, cache) {
  return caches.open(CACHE)
    .then((cache)=>fetch(request))
      .then((response)=>cache.put(request, response))
};

//This is a event that can be fired from your page to tell the SW to update the offline page
  self.addEventListener('refreshOffline', function(response) {
    let offlinePage = new Request('/index.html');
    return caches.open(CACHE).then(function(cache) {
      console.log('[off] Offline page updated from refreshOffline event: '+ response.url);
      return cache.put(offlinePage, response);
    });
  });


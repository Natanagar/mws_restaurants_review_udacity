   let objectToCache = [
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

  //Registration Service Worker
  if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', {scope: './'}).then(function(registration) {
    console.log('Registration service worker has been done:', registration);
  }).catch(function(error) {
    console.log('Failed in registration', error);
  });
} else {
  console.log('Browsers API dont support service worker');
}
let CACHE = 'network-or-cache-v1';
self.addEventListener('install', function(event){
   event.waitUntil(
        caches
            .open(CACHE)
            .then((cache) => cache.addAll(objectToCache))
      );
  });

/*self.addEventListener('activate', function(event){
  // Todo...
});*/
self.addEventListener('fetch', function(event) {
      console.log(event.request.url);
      //compare url with cache
       if (event.request.url.endsWith('/restaurant.html'?id=2)) {
      event.respondWith(
        fetch('/restaurant.html')
      );
    } else event.respondWith(
      fromCache(event.request));
        event.waitUntil(
            update(event.request));

  });
//get dates from cache
function fromCache(request){
  return caches.open(CACHE)
    .then(cache)=>(request)=>{caches.match(request)};
    .then(matching)=>(reject)=>{matching || Promise.reject('no-match')};
  };
//update dates from network
function update(request) {
  return caches.open(CACHE)
    .then(cache)=>
      fetch(request)
      .then(response)=>
        cache.put(request, response)
      )
  );
}


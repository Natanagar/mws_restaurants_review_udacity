if(navigator.serviceWorker){
  navigator.serviceWorker.register('/sw.js', { scope: './' }); //after deployment add scope for Service Worker
}


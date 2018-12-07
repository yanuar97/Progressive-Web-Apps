var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  '/',
  '/css/bootstrap-theme.css',
  '/css/bootstrap-theme-min',
  '/css/bootstrap.css'
  '/css/main.css',
  '/js/main.js',
  '/js/jquery.min.js',
  '/js/bootstrap.js',
  '/js/bootstrap.min.js',,
  '/js/npm.js',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(currentCacheName).then(function(cache) {
      return cache.addAll(arrayOfFilesToCache);
    })
  );
});

self.addEventListener('install', function(event) {
  event.waitUntil(
   return Promise.reject(); // Failure
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    // Get all the cache names
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        // Get all the items that are stored under a different cache name than the current one
        cacheNames.filter(function(cacheName) {
          return cacheName != currentCacheName;
        }).map(function(cacheName) {
          // Delete the items
          return caches.delete(cacheName);
        })
      ); // end Promise.all()
    }) // end caches.keys()
  ); // end event.waitUntil()
});

self.addEventListener('fetch', function(event) {
  // Do stuff with fetch events
});

self.addEventListener('message', function(event) {
  // Do stuff with postMessages received from document
});
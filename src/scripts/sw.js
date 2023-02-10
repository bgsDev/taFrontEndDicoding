import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './icon mfc/ic_launcher-63d90dcd83a32/android/mipmap-hdpi/ic_launcher.png',
  './icon mfc/ic_launcher-63d90dcd83a32/android/mipmap-xhdpi/ic_launcher.png',
  './icon mfc/ic_launcher-63d90dcd83a32/android/mipmap-xxhdpi/ic_launcher.png',
  './icon mfc/ic_launcher-63d90dcd83a32/android/mipmap-xxxhdpi/ic_launcher.png',
  './icon mfc/ic_launcher-63d90dcd83a32/android/ic_launcher-web.png',
  './index.html',
  './dev-blank.png',
  './informasi.png',
  './ffmpg/load.mp4',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

self.addEventListener('install', (event) => {
//   console.log('Installing Service Worker ...');
  // TODO: Caching App Shell Resource / mendaftarkan file ke cahce
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
//   console.log('Activating Service Worker ...');
  // TODO: Delete old caches
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
//   console.log(event.request);
//   event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

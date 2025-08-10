self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()))
// Optional: cache minimalist (lăsat gol pt. simplitate). Doar prezența SW + manifest face app-ul instalabil.

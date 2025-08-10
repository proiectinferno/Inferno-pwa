import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inferno Escape House',
  description: 'Rezervă rapid prin telefon sau WhatsApp. PWA instalabil.',
  themeColor: '#D7263D',
  manifest: '/manifest.webmanifest',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro">
      <head>
        {/* Plausible Analytics (RO) */}
        <script defer data-domain="inferno.vercel.app" src="https://plausible.io/js/script.js"></script>
      </head>
      <body>
        {/* Service Worker register */}
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js');
            });
          }
        `}} />
        {children}
      </body>
    </html>
  )
}

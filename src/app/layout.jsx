import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { Analytics } from '@vercel/analytics/react'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Gan Liu',
    default: 'Gan Liu - Business Analyst & Web Developer',
  },
  description:
    'Business Analyst at WeGo, specializing in Data Visualization & Business Intelligence. Web Developer building with Next.js & Vue.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}

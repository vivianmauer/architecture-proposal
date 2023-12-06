'use client';

import keyHolderStore from '@/stores/keyholder'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={keyHolderStore}>
          {children}
        </Provider>
      </body>
    </html>
  )
}
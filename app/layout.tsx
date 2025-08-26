'use client';

import { EuiProvider } from '@elastic/eui';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <EuiProvider colorMode="light">
          {children}
        </EuiProvider>
      </body>
    </html>
  )
}

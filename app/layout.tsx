'use client';

import { EuiProvider } from '@elastic/eui';
import './globals.css';
import { SidebarProvider } from './context/SidebarContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <EuiProvider colorMode="light">
          <SidebarProvider>
            {children}
          </SidebarProvider>
        </EuiProvider>
      </body>
    </html>
  )
}

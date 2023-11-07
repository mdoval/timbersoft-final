import type { Metadata } from 'next'
import './globals.css'
import { MiSessionProvider } from '@/app/components/MiSessionProvider'

export const metadata: Metadata = {
  title: 'TimberSoft',
  description: 'Creado por NubeCosmica',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <MiSessionProvider>
        {children}
      </MiSessionProvider>
      </body>
    </html>
  )
}

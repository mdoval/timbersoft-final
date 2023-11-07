import { MainNavBar } from '@/app/components/MainNavBar'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MainNavBar />
        {children}
      </body>
    </html>
  )
}

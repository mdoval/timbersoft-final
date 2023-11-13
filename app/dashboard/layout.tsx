import { MainNavBar } from '@/app/components/MainBar/MainNavBar'

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <section className='w-full h-full'>
      <div className='flex w-full h-full'>
        <div className='w-1/6 bg-gray-700'>
          <MainNavBar />
        </div>
        <div className='w-full'>
          {children}
        </div>
      </div>
    </section>
  )
}
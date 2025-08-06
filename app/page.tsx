'use client'

import { useState } from 'react'
import { Navbar } from '@/components/navbar'
import { Sidebar } from '@/components/sidebar'
import { ContentSection } from '@/components/content-section'
import { AsidePanel } from '@/components/aside-panel'
import { Footer } from '@/components/footer'
import { StatsCards } from '@/components/stats-cards'
import { mockUsers } from '@/lib/data/fake'

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false) // Changed to false to hide sidebar by default

  return (
    <div className='min-h-screen bg-background flex flex-col'>
      {/* Navbar */}
      <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Layout */}
      <div className='flex flex-1'>
        {/* Sidebar - Hidden on mobile, part of flow on desktop */}
        <div className='hidden md:block'>
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            onOpen={() => setSidebarOpen(true)}
          />
        </div>

        {/* Mobile Sidebar - Overlay */}
        <div className='md:hidden'>
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
            onOpen={() => setSidebarOpen(true)}
          />
        </div>

        {/* Content and Aside */}
        <div className='flex flex-1'>
          {/* Main Content */}
          <main className='flex-1 p-4 md:p-6 transition-all duration-500 ease-in-out'>
            <div className='w-full mx-auto'>
              {/* Stats Cards - Hidden on mobile, shown on desktop */}
              <div className='hidden md:block'>
                <StatsCards />
              </div>

              {/* Who's On Section */}
              <ContentSection title="Who's On" users={mockUsers.slice(0, 4)} />

              {/* Who Viewed Me Section */}
              <ContentSection
                title='Who Viewed Me'
                showSettings={true}
                users={mockUsers.slice(2, 7)}
              />

              {/* Newest Matches Section */}
              <ContentSection
                title='Newest Matches'
                users={mockUsers.slice(3, 7)}
              />

              {/* Stats Cards - Shown on mobile at the bottom */}
              <div className='md:hidden'>
                <StatsCards />
              </div>
            </div>
          </main>

          {/* Aside Panel - Hidden on mobile */}
          <div className='hidden lg:block'>
            <AsidePanel />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

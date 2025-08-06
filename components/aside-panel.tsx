'use client'

import { useState } from 'react'
import { Heart, Calendar, MapPin, User, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { LastEventCard } from '@/components/last-event-card'

export function AsidePanel() {
  const [activeTab, setActiveTab] = useState<'hot-date' | 'event'>('hot-date')

  return (
    <aside className='w-80 bg-white border-l border-gray-200 p-6 h-full flex flex-col'>
      {/* Tabs */}
      <div className='flex space-x-1 mb-6 bg-gray-100 rounded-none p-1'>
        <Button
          variant={activeTab === 'hot-date' ? 'default' : 'ghost'}
          size='sm'
          onClick={() => setActiveTab('hot-date')}
          className={`flex-1 rounded-none ${
            activeTab === 'hot-date'
              ? 'bg-black hover:bg-gray-800 font-medium'
              : ''
          }`}
          style={activeTab === 'hot-date' ? { color: '#d7b157' } : {}}
        >
          <Heart className='h-4 w-4 mr-2' />
          Hot Date
        </Button>
        <Button
          variant={activeTab === 'event' ? 'default' : 'ghost'}
          size='sm'
          onClick={() => setActiveTab('event')}
          className={`flex-1 rounded-none ${
            activeTab === 'event'
              ? 'bg-black hover:bg-gray-800 font-medium'
              : ''
          }`}
          style={activeTab === 'event' ? { color: '#d7b157' } : {}}
        >
          <Calendar className='h-4 w-4 mr-2' />
          Event
        </Button>
      </div>

      {/* Content */}
      <div className='flex-0 mb-10'>
        {activeTab === 'hot-date' && (
          <div className='space-y-4'>
            <div className='bg-white border border-gray-200 rounded-none p-4'>
              <div className='flex items-start space-x-3'>
                {/* Profile Image */}
                <div className='w-16 h-16 bg-gray-200 rounded-none overflow-hidden'>
                  <Image
                    src='/images/p3.jpg'
                    alt='Profile'
                    className='w-full h-full object-cover'
                    width={64}
                    height={64}
                  />
                </div>

                <div className='flex-1'>
                  {/* Mismatch Message */}
                  <p className='text-sm text-gray-600 mb-3'>
                    Sorry, you do not match their relationship or age
                    requirement.
                  </p>

                  {/* Requirements */}
                  <div className='space-y-1 text-sm'>
                    <div className='flex items-center'>
                      <User className='h-4 w-4 mr-2 text-gray-500' />
                      <span className='text-gray-700'>
                        Interested In: Single Male
                      </span>
                    </div>
                    <div className='flex items-center'>
                      <Clock className='h-4 w-4 mr-2 text-gray-500' />
                      <span className='text-gray-700'>Age Range: 30 - 75</span>
                    </div>
                  </div>

                  {/* Date and Location */}
                  <div className='mt-3 p-2 bg-gray-50 rounded-none'>
                    <div className='flex items-center text-sm text-gray-600'>
                      <Calendar className='h-4 w-4 mr-2' />
                      <span>August 5, 2025</span>
                    </div>
                    <div className='flex items-center text-sm text-gray-600 mt-1'>
                      <MapPin className='h-4 w-4 mr-2' />
                      <span>Rosenberg, TX US 38 Mi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Button
              className='w-full bg-black hover:bg-gray-800 rounded-none font-medium'
              style={{ color: '#d7b157' }}
            >
              More Hot Dates
            </Button>
          </div>
        )}

        {activeTab === 'event' && (
          <div className='text-center text-gray-500 py-8'>
            <Calendar className='h-12 w-12 mx-auto mb-4 text-gray-300' />
            <p>No events available</p>
          </div>
        )}
      </div>

      {/* Last Event Card - Always visible */}
      <div className='mt-0'>
        <h3 className='text-lg font-semibold text-gray-900 mb-4'>Last Event</h3>
        <LastEventCard />
      </div>
    </aside>
  )
}

'use client'

import Image from 'next/image'
import { Calendar, MapPin, User } from 'lucide-react'

export function LastEventCard() {
  return (
    <div className='py-4 px-1 border-t border-border'>
      <div className='bg-card rounded-none border border-border overflow-hidden shadow-sm'>
        {/* Image */}
        <div className='relative h-32 w-full'>
          <Image
            src='/images/p1.jpg'
            alt='Event image'
            fill
            className='object-cover'
          />
        </div>

        {/* Content */}
        <div className='p-3'>
          {/* Header */}
          <div className='flex items-center gap-2 mb-2'>
            <div className='w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center'>
              <User className='w-3 h-3 text-white' />
            </div>
            <span className='text-sm font-medium text-card-foreground'>
              Sarah Johnson
            </span>
          </div>

          {/* Event details */}
          <div className='space-y-1 mb-2'>
            <h4 className='text-sm font-semibold text-card-foreground line-clamp-2'>
              Weekend Beach Party at Malibu
            </h4>
            <div className='flex items-center gap-1 text-xs text-muted-foreground'>
              <Calendar className='w-3 h-3' />
              <span>Yesterday at 8:30 PM</span>
            </div>
            <div className='flex items-center gap-1 text-xs text-muted-foreground'>
              <MapPin className='w-3 h-3' />
              <span>Malibu Beach, CA</span>
            </div>
          </div>

          {/* Description */}
          <p className='text-xs text-muted-foreground line-clamp-3'>
            Amazing sunset vibes with great company! Perfect weather for a beach
            party. Everyone had such a wonderful time dancing and enjoying the
            ocean breeze.
          </p>
        </div>
      </div>
    </div>
  )
}

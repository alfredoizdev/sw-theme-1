'use client'

import { Menu, MessageSquare, Bell, ChevronDown, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { ThemeToggle } from '@/components/theme-toggle'
import Image from 'next/image'

interface NavbarProps {
  onMenuClick: () => void
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className='bg-background border-b border-border px-4 py-3'>
      <div className='flex items-center justify-between'>
        {/* Left side - Menu (mobile only) and Logo */}
        <div className='flex items-center space-x-4'>
          <Button
            variant='ghost'
            size='sm'
            onClick={onMenuClick}
            className='p-2 rounded-none md:hidden'
          >
            <Menu className='h-5 w-5' />
          </Button>
          <div className='flex items-center'>
            <Image
              src='/images/logo-color.png'
              alt='Swing! Logo'
              width={80}
              height={80}
              className='rounded'
            />
          </div>
        </div>

        {/* Right side - Notifications and User */}
        <div className='flex items-center space-x-4'>
          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Messages */}
          <Button
            variant='ghost'
            size='sm'
            className='relative p-2 rounded-none'
          >
            <MessageSquare className='h-5 w-5' />
            <Badge
              className='absolute -top-1 -right-1 h-5 w-5 rounded-full bg-black text-xs font-bold'
              style={{ color: '#d7b157' }}
            >
              2
            </Badge>
          </Button>

          {/* Notifications */}
          <Button variant='ghost' size='sm' className='p-2 rounded-none'>
            <Bell className='h-5 w-5' />
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='ghost'
                className='flex items-center space-x-2 rounded-none'
              >
                <div className='w-8 h-8 bg-black rounded-lg flex items-center justify-center'>
                  <User className='h-4 w-4' style={{ color: '#d7b157' }} />
                </div>
                <span className='text-sm font-medium'>sls_alfredo</span>
                <ChevronDown className='h-4 w-4' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' className='w-48'>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Help</DropdownMenuItem>
              <DropdownMenuItem className='text-red-600'>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

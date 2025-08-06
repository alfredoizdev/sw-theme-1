'use client'

import {
  Home,
  Users,
  Search,
  UserCheck,
  Eye,
  MessageSquare,
  MessageCircle,
  User,
  Smartphone,
  Heart,
  Calendar,
  Users2,
  Briefcase,
  Wrench,
  HelpCircle,
  Facebook,
  Twitter,
  LogOut,
  X,
  ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onOpen: () => void
}

export function Sidebar({ isOpen, onClose, onOpen }: SidebarProps) {
  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Users, label: "Who's On", href: '/whos-on' },
    { icon: Search, label: 'Search', href: '/search' },
    { icon: UserCheck, label: 'Friends', href: '/friends' },
    { icon: Eye, label: 'Viewed Me', href: '/viewed-me' },
    { icon: MessageSquare, label: 'Messages', href: '/messages' },
    { icon: MessageCircle, label: 'Chat', href: '/chat' },
    { icon: User, label: 'My Account', href: '/account' },
    { icon: Smartphone, label: 'Mobile App', href: '/mobile' },
    { icon: Heart, label: 'Hot Date', href: '/hot-date' },
    { icon: Calendar, label: 'Events', href: '/events' },
    { icon: Users2, label: 'Clubs', href: '/clubs' },
    { icon: Briefcase, label: 'Travel', href: '/travel' },
    { icon: Wrench, label: 'Tools', href: '/tools' },
    { icon: HelpCircle, label: 'Help', href: '/help' },
  ]

  const socialItems = [
    { icon: Facebook, label: 'Facebook', href: '/facebook' },
    { icon: Twitter, label: 'Twitter', href: '/twitter' },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className='fixed inset-0 bg-black/40 bg-opacity-10 z-40 md:hidden'
          onClick={onClose}
        />
      )}

      <div
        className={`bg-background border-r border-border transition-all duration-500 ease-in-out flex flex-col ${
          isOpen ? 'w-64' : 'w-16'
        } md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        } fixed md:static left-0 top-0 h-full z-50`}
      >
        {/* Header */}
        <div className='flex items-center justify-between p-4 border-b border-border'>
          <div className='flex-1 flex justify-center'>
            {isOpen ? (
              <h1 className='text-lg font-semibold text-foreground'>Menu</h1>
            ) : (
              <Button
                variant='ghost'
                size='sm'
                onClick={onOpen}
                className='p-2 rounded-none hover:bg-accent transition-all duration-500 ease-in-out'
                title='Open sidebar'
              >
                <ChevronRight className='h-6 w-6 text-muted-foreground' />
              </Button>
            )}
          </div>
          {isOpen && (
            <Button
              variant='ghost'
              size='sm'
              onClick={onClose}
              className='p-2 rounded-none transition-all duration-500 ease-in-out'
            >
              <X className='h-4 w-4' />
            </Button>
          )}
        </div>

        {/* Navigation */}
        <nav className='flex-1 p-4 space-y-2'>
          {menuItems.map((item) => (
            <Button
              key={item.label}
              variant='ghost'
              className={`w-full justify-start text-foreground hover:text-foreground hover:bg-accent rounded-none transition-all duration-500 ease-in-out ${
                isOpen ? 'px-3' : 'px-3 justify-center'
              }`}
              title={!isOpen ? item.label : undefined}
            >
              <item.icon
                className={`h-6 w-6 flex-shrink-0 transition-all duration-500 ease-in-out ${
                  isOpen ? 'mr-3' : ''
                }`}
              />
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
                }`}
              >
                {item.label}
              </span>
            </Button>
          ))}
        </nav>

        {/* Social Links */}
        <div className='p-4 border-t border-border space-y-2'>
          {socialItems.map((item) => (
            <Button
              key={item.label}
              variant='ghost'
              className={`w-full justify-start text-foreground hover:text-foreground hover:bg-accent rounded-none transition-all duration-500 ease-in-out ${
                isOpen ? 'px-3' : 'px-3 justify-center'
              }`}
              title={!isOpen ? item.label : undefined}
            >
              <item.icon
                className={`h-6 w-6 flex-shrink-0 transition-all duration-500 ease-in-out ${
                  isOpen ? 'mr-3' : ''
                }`}
              />
              <span
                className={`transition-all duration-500 ease-in-out ${
                  isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
                }`}
              >
                {item.label}
              </span>
            </Button>
          ))}
          <Button
            variant='ghost'
            className={`w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10 rounded-none transition-all duration-500 ease-in-out ${
              isOpen ? 'px-3' : 'px-3 justify-center'
            }`}
            title={!isOpen ? 'Logout' : undefined}
          >
            <LogOut
              className={`h-6 w-6 flex-shrink-0 transition-all duration-500 ease-in-out ${
                isOpen ? 'mr-3' : ''
              }`}
            />
            <span
              className={`transition-all duration-500 ease-in-out ${
                isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
              }`}
            >
              Logout
            </span>
          </Button>
        </div>
      </div>
    </>
  )
}

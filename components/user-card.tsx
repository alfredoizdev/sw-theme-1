import { MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { User } from '@/lib/data/fake'

interface UserCardProps {
  user: User
}

export function UserCard({ user }: UserCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-500'
      case 'offline':
        return 'bg-gray-400'
      default:
        return 'bg-gray-400'
    }
  }

  const getRelationshipColor = () => {
    return 'bg-gray-600'
  }

  return (
    <div className='bg-card border border-border rounded-none p-2 md:p-4 hover:shadow-md transition-shadow'>
      <div className='relative'>
        {/* Profile Image */}
        <div className='w-full aspect-[4/3] bg-gray-200 rounded-none mb-2 md:mb-3 overflow-hidden'>
          <Image
            src={user.image}
            alt={user.name}
            fill
            className='object-cover'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
          />
        </div>

        {/* Online Status */}
        <div
          className={`absolute top-1 md:top-2 right-1 md:right-2 w-2 md:w-3 h-2 md:h-3 rounded-full ${getStatusColor(
            user.status
          )}`}
        />

        {/* Distance */}
        <div className='absolute bottom-1 md:bottom-2 left-1 md:left-2 bg-black bg-opacity-50 text-white px-1 md:px-2 py-0.5 md:py-1 rounded-none text-xs flex items-center'>
          <MapPin className='h-2 md:h-3 w-2 md:w-3 mr-0.5 md:mr-1' />
          <span className='text-xs md:text-xs'>{user.distance}</span>
        </div>
      </div>

      {/* User Info */}
      <div className='space-y-1 md:space-y-2'>
        <div className='flex items-center justify-between'>
          <h3 className='font-medium text-card-foreground truncate text-xs md:text-sm'>
            {user.name}
          </h3>
          <Badge
            className={`${getRelationshipColor()} text-white text-xs px-1 md:px-2 py-0.5 md:py-1`}
          >
            <span className='hidden md:inline'>
              {user.relationship.charAt(0).toUpperCase() +
                user.relationship.slice(1)}
            </span>
            <span className='md:hidden'>
              {user.relationship.charAt(0).toUpperCase()}
            </span>
          </Badge>
        </div>

        <div className='flex items-center justify-between text-xs md:text-sm text-muted-foreground'>
          <span className='flex items-center text-xs md:text-xs'>
            <Clock className='h-3 md:h-4 w-3 md:w-4 mr-0.5 md:mr-1' />
            {user.onlineTime}
          </span>
          <span className='text-xs text-muted-foreground hidden md:block'>
            {user.id}
          </span>
        </div>

        <Button
          className='w-full bg-black hover:bg-gray-800 rounded-none font-medium text-xs md:text-sm py-1 md:py-2'
          style={{ color: '#d7b157' }}
        >
          <span>Connect</span>
        </Button>
      </div>
    </div>
  )
}

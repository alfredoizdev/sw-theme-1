import { ChevronRight, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { UserCard } from './user-card'
import { User } from '@/lib/data/fake'
import { useState, useEffect } from 'react'

interface ContentSectionProps {
  title: string
  showSettings?: boolean
  users: User[]
}

export function ContentSection({
  title,
  showSettings = false,
  users,
}: ContentSectionProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <section className='mb-8'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg md:text-xl font-semibold text-foreground'>
          {title}
        </h2>
        <div className='flex items-center space-x-2'>
          {showSettings && (
            <Button variant='ghost' size='sm' className='p-2 rounded-none'>
              <Settings className='h-4 w-4' />
            </Button>
          )}
          <Button
            variant='ghost'
            size='sm'
            className='text-foreground hover:text-muted-foreground rounded-none'
          >
            More
            <ChevronRight className='h-4 w-4 ml-1' />
          </Button>
        </div>
      </div>

      <div className='grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 md:gap-4'>
        {users.slice(0, isMobile ? 3 : 6).map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </section>
  )
}

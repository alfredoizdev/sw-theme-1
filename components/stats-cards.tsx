import { Users, UserPlus, Smile, Star, Globe } from 'lucide-react'

export function StatsCards() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
      {/* Members Online Now */}
      <div className='bg-card border border-border rounded-none p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-12 h-12 bg-black rounded-none flex items-center justify-center'>
              <Users className='h-6 w-6' style={{ color: '#d7b157' }} />
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>Members Online Now</p>
              <p className='text-2xl font-bold text-card-foreground'>5,112</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Members This Week */}
      <div className='bg-card border border-border rounded-none p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-12 h-12 bg-black rounded-none flex items-center justify-center'>
              <Smile className='h-6 w-6' style={{ color: '#d7b157' }} />
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>New Members This Week</p>
              <p className='text-2xl font-bold text-card-foreground'>5,023</p>
            </div>
          </div>
        </div>
      </div>

      {/* New Pictures This Week */}
      <div className='bg-card border border-border rounded-none p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-12 h-12 bg-black rounded-none flex items-center justify-center'>
              <Star className='h-6 w-6' style={{ color: '#d7b157' }} />
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>New Pictures This Week</p>
              <p className='text-2xl font-bold text-card-foreground'>19,636</p>
            </div>
          </div>
        </div>
      </div>

      {/* SLS Member Groups */}
      <div className='bg-card border border-border rounded-none p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-3'>
            <div className='w-12 h-12 bg-black rounded-none flex items-center justify-center'>
              <Globe className='h-6 w-6' style={{ color: '#d7b157' }} />
            </div>
            <div>
              <p className='text-sm text-muted-foreground'>SLS Member Groups</p>
              <p className='text-2xl font-bold text-card-foreground'>14,654</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

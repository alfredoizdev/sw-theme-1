import { Apple, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <footer className='bg-card text-card-foreground py-8'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {/* App Downloads */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Download Our App</h3>
            <div className='space-y-3'>
              <Button
                className='w-full bg-black hover:bg-gray-800 rounded-none font-medium'
                style={{ color: '#d7b157' }}
              >
                <Apple className='h-5 w-5 mr-2' />
                Download on the App Store
              </Button>
              <Button
                className='w-full bg-black hover:bg-gray-800 rounded-none font-medium'
                style={{ color: '#d7b157' }}
              >
                <Play className='h-5 w-5 mr-2' />
                GET IT ON Google Play
              </Button>
            </div>
          </div>

          {/* Legal Disclaimers */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Legal Information</h3>
            <div className='text-sm text-muted-foreground space-y-2'>
              <p>
                This site does not contain sexually explicit images as defined
                in 18 U.S.C. 2256 and 18 USC 2257(a)-(c).
              </p>
              <p>
                This site contains adult material and all members must be 18
                years or older or 21 years or older in areas where 18 is not the
                age of majority.
              </p>
              <p>All Members are over 18 years of age.</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground'>
          <p>&copy; 2024 Swing! All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

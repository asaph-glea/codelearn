import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
  return (
    <div className='w-full relative h-screen overflow-hidden'>

      <Image src={'/hero.gif'} alt='hero' width={1000} height={1000}
      className='w-full h-full object-cover absolute inset-0'/>

      <div className='absolute w-full flex flex-col items-center p-4'>

        <h2 className='font-bold text-7xl font-game text-[clamp(2rem,5vw,4rem)]'
         style={{textShadow:'2px 2px 0 #000, -2px -2px 0 #000, -2px -2px 0 #000'}}
        >Start Your</h2>

        <h2 className='font-bold text-8xl font-game text-yellow-400 '
        style={{textShadow:'2px 2px 0 #000, -2px -2px 0 #000, -2px -2px 0 #000'}}
        >Coding Adventure</h2>

        <h2 className='font-game mt-5 text-3xl' 
         style={{textShadow:'2px 2px 0 #000, -2px -2px 0 #000, -2px -2px 0 #000'}}>
          Learn to Code. Build Real Skills. Shape Your Future.</h2>
         <Link href={'/sign-in'}>
        <Button className='font-game text-2xl p-4 mt-2' variant={'pixel'}>Get Started</Button>
        </Link>
      </div>
    </div>
  )
}

export default Hero
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function UpgradeToPro() {
  return (
    <div className='flex items-center flex-col p-5 border-4 rounded-2xl mt-8'>
        <Image src={'/logo.png'} alt='logo' width={70} height={70}/>
        <h2 className='font-game text-3xl'>Upgrade To Pro</h2>
        <p className='font-game text-gray-500 text-center'>Join Pro Membership and Get All Course Access</p>
        <Link href={'/pricing'}>
        <Button className='font-game text-2xl' variant={'pixel'} size={'lg'}>Upgrade</Button>
        </Link>
    </div>
  )
}

export default UpgradeToPro
import Image from 'next/image'
import React from 'react'

import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button'

function InviteFriend() {
  return (
    <div className='flex flex-col items-center mt-8 p-4 border rounded-xl bg-zinc-900'>
        <Image src={'/dancing.png'} alt='mail' width={80} height={80}/>
        <h2 className='font-3xl font-game'>Invite Friend</h2>
        <p className='font-game text-lg'>Having fun ? Share with a friend ! Enter an email and let your friends join in the  the fun</p>
        <div className='flex gap-2 items-center mt-5'>
            <Input placeholder='Enter Invitation Email'/>
            <Button variant={'pixel'} className='font-game' > Invite !</Button>
        </div>
    </div>
  )
}

export default InviteFriend
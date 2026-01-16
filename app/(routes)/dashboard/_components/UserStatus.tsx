"use client"
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'



function UserStatus() {
    const {user} = useUser();
  return (
    <div className='p-4 border-4 rounded-2xl'>
        <div className='flex gap-3 items-center'>
            <Image src={'/walking.gif'} alt='walking' width={100} height={100} unoptimized={true}/>
            <h2 className='font-game text-2xl'>{user?.firstName}</h2>
        </div>
        <div className='grid grid-cols-2 gap-5'>
             <div className='flex gap-3 items-center'>
                    <Image src={"/stars.png"} alt='star' width={30} height={30} />
                    <div>
                    <h2 className='font-4xl font-game'>20</h2>
                    <h2 className='font-game text-xl text-gray-500'>Total Rewards</h2>
                 </div>
             </div>

             <div className='flex gap-3 items-center'>
                    <Image src={"/badge.png"} alt='badge' width={30} height={30} />
                    <div>
                    <h2 className='font-4xl font-game'>4</h2>
                    <h2 className='font-game text-xl text-gray-500'>Badge</h2>
                </div>
             </div>

             <div className='flex gap-3 items-center'>
                    <Image src={"/fire.png"} alt='fire' width={30} height={30} />
                 <div>
                    <h2 className='font-4xl font-game'>6</h2>
                    <h2 className='font-game text-xl text-gray-500'>Daily Streak</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserStatus
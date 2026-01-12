"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React, {useState} from 'react';

function EnrolledCourses() {

    const [enrollCourses, setEnrollCourses] = useState([]);

  return (
    <div className='mt-8'>

           <h2 className='text-4xl font-game'>Enrolled courses</h2>

       { enrollCourses?.length==0 ?
       <div className='flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900'>
            <Image src={'/books.png'} alt='book' width={90} height={90}/>
            <h2  className='text-2xl font-game'>No enrolled courses</h2>
            <Button variant={'pixel'} className='font-game text-lg' size={'lg'}>Browse All Courses</Button>
       </div>
       :
       <div>
        List
       </div>
       }
    </div>
  )
}

export default EnrolledCourses
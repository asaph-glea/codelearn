import React from 'react'
import { Course } from '../../_components/CourseList'
import Image from 'next/image'
import { Skeleton } from '@/components/ui/skeleton'

type Props = {
  loading:boolean,
  courseDetail:Course|undefined
}
function CourseDetailBanner({loading, courseDetail}:Props) {

  return (
    // <div>
    //   {! courseDetail ?
    //     <Skeleton className='w-full h-75 rounded-2xl'/>
    //     :
    //       <div>
    //        <Image 
    //           src={courseDetail?.bannerImage} 
    //           alt={courseDetail?.title}
    //           width={1400}
    //           height={300}
    //           className='w-full h-75 object-cover'
    //           />
    //     </div>
    //   }
      
    // </div>

    <div>
      CourseDetailBanner
    </div>
  )
}

export default CourseDetailBanner
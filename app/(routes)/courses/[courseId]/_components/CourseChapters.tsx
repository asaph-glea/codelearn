import React from 'react'
import { Course } from '../../_components/CourseList'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Skeleton } from '@/components/ui/skeleton'
import { Button } from '@/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Link from 'next/link'
type Props = {
  loading:boolean,
  courseDetail:Course|undefined
}

function CourseChapters({loading, courseDetail}:Props) {

  const EnableExercise = (
    chapterIndex:number,
    exerciseIndex:number,
    chapterExerciseLenght:number
  )=>{
    const completed = courseDetail?.completedExercises;

    // if not completed, enable first exercise only
    if (!completed || completed.length === 0) {
      return chapterIndex === 0 && exerciseIndex ===0
    }
    // last completed
    const last = completed[completed.length-1];

    //conver to global exercise number
    const currentExerciseNumber = chapterIndex * chapterExerciseLenght + exerciseIndex + 1

    const lastCompletedNumber = (last.chapterId - 1) * chapterExerciseLenght + last.exerciseId;

    return currentExerciseNumber === lastCompletedNumber + 2;

  }

  const isExerciseCompleted = (chapterId:number, execriseId:number)=>{
    const completeChapters = courseDetail?.completedExercises;
    
    const completeChapter = completeChapters?.find(item => (item.chapterId == chapterId && item.exerciseId == execriseId));

    return completeChapter ? true : false
  }

  return (
    <div>
      { courseDetail?.chapters?.length == 0 ?
    <div>
      <Skeleton className='w-full h-25 rounded-xl'/>
      <Skeleton className='w-full h-25 mt-5 rounded-xl'/>
    </div>  
   :
      <div className='p-5 border-4 rounded-2xl'>
        { courseDetail?.chapters?.map((chapter, index)=>(
          <Accordion type="single" collapsible key={index}>
            <AccordionItem value="item-1">
              <AccordionTrigger className='p-3 hover:bg-zinc-800 font-game text-2xl'>
                <div className='flex gap-10'>
                  <h2 className='h-10 w-10 bg-zinc-800 flex items-center justify-center rounded-full'>{index + 1}</h2>
                  <h2 className='font-game'> {chapter?.name}</h2>
                </div>
                </AccordionTrigger>
              <AccordionContent>
               <div className='p-7 bg-zinc-900 rounded-2xl'>
                    {chapter?.exercises.map((exc, indexExc)=>(
                     <div key={indexExc} className='flex items-center justify-between mt-2'>
                       <div className='flex items-center gap-10 font-game'>
                        <h2 className='text-2xl'>Exercise {index * chapter?.exercises?.length + indexExc + 1}</h2>
                         <h2 className='text-2xl'>{exc.name}</h2>
                      </div>

                      { EnableExercise(index,indexExc,chapter?.exercises.length) ?
                      <Link href={'/courses/' + courseDetail?.courseId + '/' + chapter?.chapterId + '/' + exc?.slug}>
                        <Button variant={'pixel'}>{exc?.xp} xp</Button>
                      </Link>
                      :
                      isExerciseCompleted(chapter?.chapterId,indexExc+1) ? <Button variant={'pixel'} className='bg-green-700'>Completed</Button>
                      :
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant={'pixelDisabled'}>???</Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className='font-game text-lg'>Please Enroll first</p>
                        </TooltipContent>
                      </Tooltip>
                    }
                  </div>
                
                ))}
               </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
       }
    </div>
  )
}

export default CourseChapters
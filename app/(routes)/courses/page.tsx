import Image from 'next/image'
import CourseList from './_components/CourseList'

function Courses() {
  return (
    <div>
        <div className='relative'>
             <Image src={'/course-banner0.gif'} alt='course-banner'
              width={1200}
              height={300} 
              className='w-full h-75 object-cover'/>
              <div className='absolute top-0 h-full pt-24 px-10 sm:px-12 md:px-24 lg:px-36 bg-linear-to-r from-black/80 to-white-50/50'>
                    <h2 className='font-game text-6xl sm:text-4xl'> Explore All Courses</h2>
                    <p className='font-game text-2xl'> Explore All Courses and enroll to Learn. Gain new skills and boost your abilities </p>
              </div>
        </div>

       <div className='mt-6 sm:mt-1 md:mt-4 px-10 md:px-24 lg:px-36'>
            <h2 className='font-game'>All Courses </h2>
            <CourseList/>
        </div>   
    </div>
  )
}

export default Courses
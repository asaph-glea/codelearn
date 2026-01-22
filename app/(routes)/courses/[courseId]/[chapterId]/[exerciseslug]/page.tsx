"use client"
import axios from 'axios';
import { useParams } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import 'react-splitter-layout/lib/index.css';
import { exercise } from '../../../_components/CourseList';
import ContentSection from './_components/ContentSection';

export type CourseExercise = {
  chapterId:number,
  courseId:number,
  desc:string,
  name:string,
  exercises: exercise[],
  exerciseData: ExerciseData
}

type ExerciseData = {
  chapterId:number,
  exerciseId:string,
  exerciseName:string,
  exercisesContent: ExercisesContent
}

type ExercisesContent = {
  content:string,
  hint:string,
  starterCode:any,
  task:string
}

function Playground() {

  const  {courseId,chapterId, exerciseslug} = useParams();

  const [loading, setLoading] = useState(false);

  const [courseExerciseData, setcourseExerciseData] = useState<CourseExercise>();

  useEffect(()=>{
    GetExerciseCourseDetail();
  }, [])

  const GetExerciseCourseDetail = async ()=> {
    setLoading(true)
    const result = await axios.post('/api/exercise' , {
      courseId:courseId,
      chapterId:chapterId,
      exerciseId:exerciseslug
    })
    console.log(result.data);
    setcourseExerciseData(result.data)
    setLoading(false);
  }

  
  return (
    <div className='border-t-4'>
      <SplitterLayout percentage primaryMinSize={40} secondaryInitialSize={60}>
        <div>
          <ContentSection 
          courseExerciseData = {courseExerciseData} 
          loading = {loading}/>
        </div>
        <div>Code editor</div>
      </SplitterLayout>
    </div>
  )
}

export default Playground

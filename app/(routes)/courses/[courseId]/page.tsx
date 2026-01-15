"use client"

import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseDetailBanner from './_components/CourseDetailBanner';
import axios from 'axios';
import { Course } from '../_components/CourseList';

// type courseDetail = {

// }

function CourseDetail() {

    const {courseId} = useParams();
    const [courseDetail, setCourseDetail] = useState<Course>();
    const [loading, setLoading] = useState(false);
    
    useEffect(()=>{
        courseId&&GetCourseDetail();
    },[courseId])

    const GetCourseDetail =async () =>{
        setLoading(true);
        const result = await axios.get('/api/course?courseid='+courseId);
        console.log(result.data)
        setCourseDetail(result?.data);
        setLoading(false);
    }
 
    return (

    <div>
        <CourseDetailBanner loading={loading}
        courseDetail = {courseDetail}/>
    </div>
  )
}

export default CourseDetail
import { db } from "@/config/db";
import { CourseTable } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest){

    const {searchParams} = new URL(req.url);

    const courseId = searchParams.get('courseId');

    if(courseId){
        const result = await db.select().from(CourseTable)
        //@ts-ignore
        .where(eq(CourseTable.courseId, courseId))

        return NextResponse.json(result[0]);
    }
    else{
    //Fetch All Courses
    const result = await db.select().from(CourseTable);

    return NextResponse.json(result);
    }
}


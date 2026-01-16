import { db } from "@/config/db";
import { CourseChaptersTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

const DATA =[ 
  
      {
        "id": 43,
        "name": "Load Balancing",
        "desc": "Distributing traffic across multiple servers to ensure high availability.",
        "exercises": [
          { "name": "Round Robin", "slug": "sd-round-robin", "xp": 300, "difficulty": "Intermediate" },
          { "name": "Sticky Sessions", "slug": "sd-sticky", "xp": 350, "difficulty": "Intermediate" },
          { "name": "Reverse Proxy", "slug": "sd-proxy", "xp": 400, "difficulty": "Advanced" },
          { "name": "Health Checks", "slug": "sd-health", "xp": 250, "difficulty": "Intermediate" },
          { "name": "SSL Termination", "slug": "sd-ssl", "xp": 450, "difficulty": "Advanced" },
          { "name": "Layer 7 Balancing", "slug": "sd-layer7", "xp": 500, "difficulty": "Advanced" }
        ]
      },
      {
        "id": 44,
        "name": "Caching Strategies",
        "desc": "Reducing latency using Redis and CDN implementations.",
        "exercises": [
          { "name": "Cache Aside", "slug": "sd-aside", "xp": 350, "difficulty": "Intermediate" },
          { "name": "Write-Through", "slug": "sd-write-through", "xp": 400, "difficulty": "Advanced" },
          { "name": "Redis Data Types", "slug": "sd-redis-types", "xp": 300, "difficulty": "Intermediate" },
          { "name": "Eviction Policies", "slug": "sd-evict", "xp": 450, "difficulty": "Advanced" },
          { "name": "CDN Invalidation", "slug": "sd-cdn", "xp": 350, "difficulty": "Intermediate" },
          { "name": "Cache Stampede", "slug": "sd-stampede", "xp": 550, "difficulty": "Advanced" }
        ]
      },
      {
        "id": 45,
        "name": "Database Scaling",
        "desc": "Managing massive datasets through Sharding and Replication.",
        "exercises": [
          { "name": "Master-Slave Rep", "slug": "sd-replication", "xp": 400, "difficulty": "Advanced" },
          { "name": "Horizontal Sharding", "slug": "sd-sharding", "xp": 500, "difficulty": "Advanced" },
          { "name": "Read vs Write Scaling", "slug": "sd-scaling", "xp": 350, "difficulty": "Intermediate" },
          { "name": "NoSQL vs SQL", "slug": "sd-db-choice", "xp": 250, "difficulty": "Intermediate" },
          { "name": "CAP Theorem", "slug": "sd-cap", "xp": 550, "difficulty": "Advanced" },
          { "name": "Consistent Hashing", "slug": "sd-hashing", "xp": 600, "difficulty": "Advanced" }
        ]
      }
  
    ]

export async function GET(req:NextRequest){

    DATA .forEach(async(item)=>{
        await db.insert(CourseChaptersTable).values({
            courseId:8,
            desc:item?.desc,
            exercises:item.exercises,
            name:item?.name,
            chapterId:item?.id
        })
    })

    return NextResponse.json('sucess')

}
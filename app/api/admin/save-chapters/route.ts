import { db } from "@/config/db";
import { CourseChaptersTable } from "@/config/schema";
import { NextRequest, NextResponse } from "next/server";

const DATA =
 [
      {
        "id":1,
        "name": "Classes and Instances",
        "desc": "Understand the core philosophy of OOP by creating blueprints for real-world objects.",
        "exercises": [
          { "name": "Class Definition", "slug": "class-def", "xp": 200, "difficulty": "Beginner" },
          { "name": "Instance Attributes", "slug": "inst-attr", "xp": 250, "difficulty": "Intermediate" },
          { "name": "Constructor Methods", "slug": "init-method", "xp": 300, "difficulty": "Intermediate" },
          { "name": "String Representation", "slug": "repr-str", "xp": 300, "difficulty": "Intermediate" },
          { "name": "Multiple Instances", "slug": "multi-inst", "xp": 200, "difficulty": "Beginner" }
        ]
      },
      {
         "id":2,
         "name": "Encapsulation",
        "desc": "Protect your data and hide internal complexity using access modifiers and property methods.",
        "exercises": [
          { "name": "Private Variables", "slug": "private-vars", "xp": 350, "difficulty": "Advanced" },
          { "name": "Getter Methods", "slug": "getters", "xp": 300, "difficulty": "Intermediate" },
          { "name": "Setter Methods", "slug": "setters", "xp": 300, "difficulty": "Intermediate" },
          { "name": "Data Hiding", "slug": "data-hiding", "xp": 400, "difficulty": "Advanced" },
          { "name": "Access Modifiers", "slug": "access-mod", "xp": 350, "difficulty": "Intermediate" }
        ]
      },
      {
         "id":3,
        "name": "Inheritance",
        "desc": "Learn how to reuse code by establishing parent-child relationships between different classes.",
        "exercises": [
          { "name": "Superclass Basics", "slug": "super-class", "xp": 300, "difficulty": "Intermediate" },
          { "name": "Extending Classes", "slug": "extend-class", "xp": 350, "difficulty": "Intermediate" },
          { "name": "Multiple Inheritance", "slug": "multi-inherit", "xp": 500, "difficulty": "Advanced" },
          { "name": "Method Resolution", "slug": "mro-logic", "xp": 500, "difficulty": "Advanced" },
          { "name": "The super() Function", "slug": "super-func", "xp": 400, "difficulty": "Advanced" }
        ]
      },
      {
         "id":4,
        "name": "Polymorphism",
        "desc": "Enable objects of different classes to be treated as instances of a common superclass.",
        "exercises": [
          { "name": "Method Overloading", "slug": "method-overload", "xp": 400, "difficulty": "Advanced" },
          { "name": "Interface Design", "slug": "interface-design", "xp": 450, "difficulty": "Advanced" },
          { "name": "Abstract Classes", "slug": "abstract-class", "xp": 500, "difficulty": "Advanced" },
          { "name": "Duck Typing", "slug": "duck-typing", "xp": 450, "difficulty": "Advanced" },
          { "name": "Dynamic Binding", "slug": "dynamic-bind", "xp": 550, "difficulty": "Advanced" }
        ]
      },
      {
         "id":5,
        "name": "Advanced OOP",
        "desc": "Explore complex patterns like composition, static methods, and operator overloading.",
        "exercises": [
          { "name": "Static Methods", "slug": "static-methods", "xp": 350, "difficulty": "Advanced" },
          { "name": "Class Methods", "slug": "class-methods", "xp": 350, "difficulty": "Advanced" },
          { "name": "Composition vs Inheritance", "slug": "composition", "xp": 500, "difficulty": "Advanced" },
          { "name": "Operator Overloading", "slug": "op-overload", "xp": 600, "difficulty": "Advanced" },
          { "name": "Design Patterns Intro", "slug": "singleton-pat", "xp": 700, "difficulty": "Advanced" }
        ]
      }
    ]

export async function GET(req:NextRequest){

    DATA .forEach(async(item)=>{
        await db.insert(CourseChaptersTable).values({
            courseId:4,
            desc:item?.desc,
            exercises:item.exercises,
            name:item?.name,
            chapterId:item?.id
        })
    })

    return NextResponse.json('sucess')

}
'use client'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import Link from 'next/link'
import { UserButton, useUser } from '@clerk/nextjs'
import { useParams, usePathname } from 'next/navigation'

const courses = [
  {
    "id": 1,
    "name": "Introduction to Artificial Intelligence",
    "description": "Learn the basics of AI, including machine learning concepts, real-world applications, and ethical considerations.",
    "path": "/courses/1/introduction-to-artificial-intelligence"
  },
  {
    "id": 2,
    "name": "Web Development Fundamentals",
    "description": "A beginner-friendly course covering HTML, CSS, and JavaScript for building modern websites.",
    "path": "/courses/2/web-development-fundamentals"
  },
  {
    "id": 3,
    "name": "Data Science with Python",
    "description": "Explore data analysis, visualization, and basic machine learning using Python libraries.",
    "path": "/courses/3/data-science-with-python"
  },
  {
    "id": 4,
    "name": "Mobile App Development",
    "description": "Learn how to design and build mobile applications for Android and iOS platforms.",
    "path": "/courses/4/mobile-app-development"
  },
  {
    "id": 5,
    "name": "Cybersecurity Essentials",
    "description": "Understand the fundamentals of cybersecurity, online threats, and how to protect digital systems.",
    "path": "/courses/5/cybersecurity-essentials"
  },
  {
    "id": 6,
    "name": "UI/UX Design Basics",
    "description": "Learn user interface and user experience design principles for creating intuitive digital products.",
    "path": "/courses/6/ui-ux-design-basics"
  },
  {
    "id": 7,
    "name": "Digital Marketing Strategies",
    "description": "Discover modern digital marketing techniques including social media, SEO, and content marketing.",
    "path": "/courses/7/digital-marketing-strategies"
  },
  {
    "id": 8,
    "name": "Cloud Computing Fundamentals",
    "description": "An introduction to cloud services, deployment models, and major cloud platforms.",
    "path": "/courses/8/cloud-computing-fundamentals"
  }
]

function Header() {

  const user = useUser();

  const path = usePathname();
  const {exerciseslug} = useParams();


  return (
    <div className='p-4 max-w-7xl flex justify-between items-center w-full'>
        <div className='flex gap-2 items-center'>
            <Image src={'/logo.png'} alt='logo' width={40} height={40}/>
            <h2 className='text-2xl font-game'>Codelearn</h2>
        </div>
        {/* Navbar */}
             {!exerciseslug ?
                <NavigationMenu>
                    <NavigationMenuList className='gap-4'>
                        <NavigationMenuItem>
                        <NavigationMenuTrigger>Courses</NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className='grid md:grid-cols-2 gap-2 sm:w-100 md:w-125 lg:w-150'>
                                {courses.map((course, index)=>(
                                    <div key={index} className='p-2 hover:bg-accent rounded-2xl cursor-pointer'>
                                        <h2 className='font-medium'>{course.name}</h2>
                                        <p className='text-sm text-gray-500'>{course.description}</p>
                                    </div>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <Link href={'/projects'}>Projects</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink>
                                <Link href={'/pricing'}>Pricing</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem><NavigationMenuItem>
                            <NavigationMenuLink>
                                <Link href={'/contact-us'}>Contact Us</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
              :
              <h2 className='text-2xl font-game'>{exerciseslug?.toString()?.replaceAll('-',' ').toLocaleUpperCase()}</h2>  
              }
          
        {/* signupButton */}
        {!user  ? 
          <Link href={'/sign-in'}>
        <Button className ='font-game' variant={'pixel'}>Sign Up</Button>
         </Link>
         : 
        <div className='flex gap-2 items-center'>
          <Link href={"/dashboard"}>
          <Button className ='font-game' variant={'pixel'}>Dashboard</Button>
          </Link>
          <UserButton/>
        </div>}
    </div>
  )
}

export default Header
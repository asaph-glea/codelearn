import Image from 'next/image'
import React from 'react'

const ExploreMoreOptions = [
  {
    "id": 1,
    "title": "AI-Powered Code Guidance",
    "description": "Get real-time explanations, suggestions, and corrections as you write code, powered by intelligent AI models.",
    "icon": "/robot.png"
  },
  {
    "id": 2,
    "title": "Personalized Learning Paths",
    "description": "Learn at your own pace with AI-curated lessons based on your skill level, goals, and progress.",
    "icon": "/tree.png"
  },
  {
    "id": 3,
    "title": "Practice with Real Projects",
    "description": "Build real-world projects with guided tasks and instant AI feedback to strengthen practical skills.",
    "icon": "/gift-box.png"
  },
  {
    "id": 4,
    "title": "Progress Tracking & Insights",
    "description": "Track your learning progress with smart analytics, skill breakdowns, and achievement milestones.",
    "icon": "/book.png"
  },

]


function ExploreMore() {
  return (
    <div className='mt-8'>
      <h2 className='text-4xl font-game'>Enrolled courses</h2>
      <div className='grid grid-cols-2 gap-5'>
        {ExploreMoreOptions.map((option, index)=>(
          <div key={index} className='flex gap-2  p-2 border rounded-xl bg-zinc-900'>
            <Image src={option?.icon} alt={option.title} width={80} height={80}/>
            <div>
              <h2 className='font-medium text-xl font-game'>{option?.title}</h2>
              <p className='font-game text-gray-500'>{option.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ExploreMore
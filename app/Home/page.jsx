'use client'
import React from 'react'
import Sidenav from '../components/sidenav/Sidenav'
import Allsection from '../about/About'
import Project from '../projects/Project'
import { ChevronDown } from 'lucide-react'
import Experience from '../experience/Experience'

function Page() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[45%_55%] md:h-screen md:overflow-hidden">
      {/* Left sidebar */}
      <div className="text-white md:sticky md:top-0 md:h-screen md:overflow-y-auto">
        <Sidenav />
      </div>

      {/* Right scrollable content */}
      <div className="overflow-y-auto no-scrollbar text-white scroll-smooth relative">
        <div className="min-h-screen pt-10 px-4">
          <Allsection />
        </div>

        <div className="min-h-screen pt-10 px-4">
          <Project />
        </div>

        <div className="min-h-screen pt-10 px-4">
          <Experience />
        </div>

        {/* Scroll down hint arrow */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white opacity-60 animate-bounce">
          <ChevronDown size={28} />
        </div>
      </div>
    </div>
  )
}

export default Page

'use client'
import React from 'react'
import Sidenav from '../components/sidenav/Sidenav'
import Allsection from '../about/About'
import Project from '../projects/Project'
import { ChevronDown } from 'lucide-react'
import Experience from '../experience/Experience'

function Page() {
  return (
    <div className="flex h-screen overflow-hidden relative">
      {/* Left sidebar */}
      <div className="w-[45%] overflow-y-auto text-white">
        <Sidenav />
      </div>

      {/* Right scrollable content */}
      <div className="w-[55%] overflow-y-auto no-scrollbar text-white scroll-smooth relative">
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

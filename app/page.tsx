import React from 'react'
import Hero from './ui/hero'
import Competencies from './ui/competencies'
import Projects from './ui/projects'
import Resume from './ui/resume'
import Footer from './ui/footer'

function home() {
  return (
    <div className="flex flex-col min-h-screen m-8 lg:m-24">
      <div>
        <Hero />
      </div>
      <div className=" text-center justify-items-center">
        <Competencies />
        <Projects />
        <Resume />
      </div>
      <div className="text-center justify-items-center">
        <Footer />
      </div>
    </div>
  )
}

export default home

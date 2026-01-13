import SideNav from './ui/dashboard/sidenav'
import Header from './ui/header'
import Nav from './ui/nav'
import Hero from './ui/hero'
import Expertise from './ui/expertise'
import Projects from './ui/projects'
import Resume from './ui/resume'
import Footer from './ui/footer'

function home() {
  return (
    <>
    <SideNav id="sideNav" />
    <Header id="header" />
    <div className="flex flex-col min-h-screen m-4 gap-12 lg:m-24">
      <div>
        <Hero id="hero"/>
      </div>
      <div className="text-center justify-items-center pt-12 gap-12">
        <Nav id="nav" />
        <Expertise id="expertise" />
        <Projects id="projects" />
        <Resume id="resume" />
        <Footer id="footer" />
      </div>
    </div>
    </>
  )
}

export default home

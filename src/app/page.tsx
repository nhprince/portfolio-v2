import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Services from '@/components/Services'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import SmoothScroll from '@/components/SmoothScroll'
import CinematicLoader from '@/components/CinematicLoader'

export default function Home() {
  return (
    <>
      <CinematicLoader />
      <SmoothScroll />
      <main className='relative bg-[#f0edf8] min-h-screen overflow-x-hidden'>
        <Navigation />
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Services />
        <Blog />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

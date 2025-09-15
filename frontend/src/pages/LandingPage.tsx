import Footer from "../Components/Footer/Footer"
import Navbar from "../Components/Navbar/Navbar"
import Hero from "../Components/Hero/Hero"
import Contact from "../Components/Contact/Contact"
import Projects from "../Components/Projects/Projects"


const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Projects/>
        <Contact/>
        <Footer/>
        
    </div>
  )
}

export default LandingPage;
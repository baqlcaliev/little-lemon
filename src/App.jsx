import React from 'react'
import Header from './components/Header/header'
import Nav from './components/Nav/nav'
import About from './components/About/about'
import Services from './components/Services/services'
import Portfolio from './components/Portfolio/portfolio'
import Experience from './components/Experience/experience'
// import Testimonials from './components/Testimonials/testimonials'
import Contact from './components/Contact/contact'
import Footer from './components/Footer/footer'


const App = ()=> {
    return(
        <>
            <Header /> 
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            {/* <Testimonials /> */}
            <Contact />
            <Footer />
        </>
    )
}

export default App
import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Banner from './components/Banner'
import AppStore from './components/AppStore'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import AOS from 'aos'

const App = () => {

  
    React.useEffect(() => {
      AOS.init({
        offset: 100,
        duration: 500,
        easing: "ease-in-sine",
        delay: 100,
      });
      AOS.refresh();
    }, []);

  return (
    <>

      <Navbar />

      <Hero />

      <div className='dark:bg-gray-800 dark:text-white'>

        <Services />

        <Banner />

      </div>

      <AppStore />

      <Testimonial />

      <Footer />

    </>
  )
}

export default App
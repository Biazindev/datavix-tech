import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Header from './components/header'
import Hero from './components/Hero'
import './global.css';
import Solutions from './components/solutions';
import Footer from './components/footer';
import HeroSection from './components/heroSection';
import Berion from './components/Berion/berion';


function App() {
  return (
    <>
      <Header />
      <Hero />
      <Solutions />
      <HeroSection />
      <Berion />
      <Footer />
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Blog from './components/Blog'
import Training from './components/Training'
import AboutUs from './components/AboutUs'
import JoinTraining from './components/JoinTraining'
import Footer from './components/Footer'

function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <AboutUs />
            <Blog />
            <Training />
            <JoinTraining />
            <Footer />
        </div>
    )
}

export default App

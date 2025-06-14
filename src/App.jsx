import { useState , useEffect } from 'react'
import Lenis from "@studio-freight/lenis";
import './App.css'

import Nav from "./assets/component/nav/page";
import Hero from "./assets/component/hero/page";
import About from "./assets/component/about/page";
import Performance from "./assets/component/performance/page";


function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Nav/>
      <Hero/>
      <About/>
      <Performance/>
    </>
  )
}

export default App

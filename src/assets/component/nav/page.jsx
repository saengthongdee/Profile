import React ,{useEffect , useRef}from 'react'
import './style.css';
import { gsap } from 'gsap';

function page() {

    const navRef = useRef();

    useEffect(() => {

        gsap.fromTo(navRef.current, {opacity: 0, y: -100}, {opacity:1, y:0,delay: 4 , duration: 2, ease: "power2.inOut"})
    })


  return (
    <div>
      <nav>
        <ul ref={navRef}>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Performance</a></li>
            <li><a href="">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default page

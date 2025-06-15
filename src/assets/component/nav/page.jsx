import React, { useEffect, useRef } from "react";
import "./style.css";
import { gsap } from "gsap";

function page() {
  const navRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (window.matchMedia("(min-width: 768px)").matches) {
        gsap.fromTo(
          navRef.current,
          { opacity: 0, y: -100 },
          { opacity: 1, y: 0, delay: 4, duration: 2, ease: "power2.inOut" }
        );
      }
      // ipad

      // mobile
    });
    return () => ctx.revert();
  });

  return (
    <div>
      <nav>
        <ul ref={navRef}>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#performance">Performance</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default page;

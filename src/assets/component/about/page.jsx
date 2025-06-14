import React, { useEffect, useState, useRef } from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function aboutpage() {
  const textRef = useRef(null);
  const aboutRef = useRef(null);
  const textaboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: aboutRef.current,
        start: "top top",
        end: "bottom 90%",
        pin: textRef.current,
        pinSpacing: false,
      });
    });

    return () => ctx.revert();
  }, []);

  useEffect(() =>{
    gsap.fromTo(
        textaboutRef.current,
        {opacity: 0, x:-30},
        {opacity: 1, x: 0, duration: 1, ease:"power2.inOut",
            scrollTrigger: {
                trigger: textaboutRef.current,
                start: "top 80%",
                end: "bottom",
                toggleActions: "play none none none"
            }
        }
    )
  },[]);

  return (
    <div>
      <div className="about" ref={aboutRef}>
        <div className="box-content-about">
          <div className="box-text" ref={textRef}>
            <h4>
              <span>
                <h1 ref={textaboutRef}>About Me</h1>
              </span>
            </h4>
          </div>
          <div className="space"></div>

          <div className="text">
            <h2>Personal Profile</h2>
            <p>
              Hello, I'm Rujdanai Saengthongdee nickname Rang 23 years old.
            </p>
          </div>
        </div>
        <div className="box-content-about">
          <div className="space"></div>

          <div className="text">
            <h2>Educational</h2>
            <p>
              Currently studying at Silpakorn University Faculty of Science
              Information Technology Program 5th year student.
            </p>
          </div>
        </div>
        <div className="box-content-about">
          <div className="space"></div>

          <div className="text">
            <h2>Favorite Activities</h2>
            <p>Programming</p>
            <p>Drawing</p>
            <p>Walking in the park</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default aboutpage;

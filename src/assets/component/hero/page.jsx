import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { gsap } from "gsap";
import {  FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function hero() {
  const skill = ["Frontend Developer", "UX/UI Designer", "Website Animation"];
  const [index, setIndex] = useState(0);

  const imgRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(
      imgRef.current,
      { y: -750, duration: 2, scaleX: 1,  scale: 1, ease: "power4.inOut" },
    );

    tl.to(
      ".box-hero",
      {
        scale: 1,
        duration: 1,
        opacity: 1,
        border: 0,
        borderRadius: 0,
        ease: "power2.inOut",
      },
      ">0.5"
    );

    tl.to(
      imgRef.current,
      { y: -1000, x: 300, duration: 1.2, scale: 1.1, ease: "power4.inOut" },
      "<-0.2"
    );
    tl.fromTo(
      ".text-name",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "circ.inOut" }
    );
    tl.fromTo(
      ".text-skill",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "circ.inOut" },
      "<0.2"
    );
    tl.fromTo(
      ".text-lorem",
      { opacity: 0, y: 50},
      { opacity: 1, y: 0, duration: 1, ease: "circ.inOut" },
    );
    tl.fromTo(
      ".icon",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1,duration: 1, stagger: 0.2, ease: "power2.inOut" },
      "<0.5"
    );
    tl.fromTo(
      ".name",
      { opacity: 0, x: -200 },
      { opacity: 1, x: 0, duration: 1, ease: "sine.inOut" }
    );
  }, []);

useEffect(() => {
  const interval = setInterval(() => {
    setIndex(prevIndex => (prevIndex + 1) % skill.length);
  }, 3000);

  return () => clearInterval(interval);
}, [])

  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      y: -100, 
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top top", 
        end: "bottom",  
        scrub: true, 
      }
    });
  }, []);

  return (
    <div>
      <section>
        <div className="box-hero" ref={imageRef}>
          <div className="text-hero">
            <h1 className="text-name">
              Hello, my name <span className="name">Rang</span>
            </h1>

            <h2 className="text-skill">
              I am a <span>{skill[index]}</span>
            </h2>
            <p className="text-lorem">
              Hi, I'm Rang! I'm a Developer and UX/UI Designer who loves turning
              ideas into clean, creative, and user-friendly digital experiences.
              I enjoy coding just as much as I love designing interfaces, and
              I'm always looking to learn something new or build something cool.
            </p>

            <div className="contact-icon">
              <FaFacebook className="icon" />
              <FaInstagram className="icon" />
              <FaTiktok className="icon" />
              <FaGithub className="icon"/>
            </div>
          </div>
          <div className="image-hero">
            <img ref={imgRef} src="/profile.webp" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default hero;

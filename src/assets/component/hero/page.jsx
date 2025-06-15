import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { gsap } from "gsap";
import { FaTiktok } from "react-icons/fa";
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
    const ctx = gsap.context(() => {
      if (window.matchMedia("(min-width: 1000px)").matches) {
        const tl = gsap.timeline();

        tl.to(imgRef.current, {
          y: -750,
          duration: 2,
          scaleX: 1,
          scale: 1,
          ease: "power4.inOut",
        });

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
          {
            y: -1000,
            x: 300,
            duration: 1.2,
            scale: 1.1,
            ease: "power4.inOut",
          },
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
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "circ.inOut" }
        );
        tl.fromTo(
          ".icon",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.inOut",
          },
          "<0.5"
        );
        tl.fromTo(
          ".name",
          { opacity: 0, x: -200 },
          { opacity: 1, x: 0, duration: 1, ease: "sine.inOut" }
        );
        tl.to(imgRef.current, {
          y: -1500,
          x: -1200,
          
          duration: 6,
          scale: 0,
          rotate: -1200,
          ease: "power4.inOut",
        });
      }

      // -----mobile ---

      if (window.matchMedia("(max-width: 480px)").matches) {
        const tl = gsap.timeline();

        tl.fromTo(imgRef.current, {
          y: 50,
          opacity: 0
        },{
           y: 0,
           opacity: 1,
           duration: 1,
           ease: "power2.inOut"
        });

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
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "circ.inOut" }
        );
        tl.fromTo(
          ".icon",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.inOut",
          },
          "<0.5"
        );
      }

      // ipad
      if (window.matchMedia("(min-width: 480px) and (max-width: 1024px)").matches) {
        const tl = gsap.timeline();

        tl.fromTo(imgRef.current, {
          y: 50,
          x: 200,
          opacity: 0
        },{
           y: 0,
           x:0,
           rotate: 0,
           opacity: 1,
           duration: 1,
           ease: "power2.inOut"
        });

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
          ".icon",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power2.inOut",
          },
          "<0.5"
        );
        tl.to(imgRef.current, {
          y: -1000,
          x: -1000,
          duration: 5,
          scale: 0.1,
          rotate: 1000,
        },);
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % skill.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <section id="hero">
        <div className="box-hero">
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
              <a href="https://www.facebook.com/rutdanai.saengthongdee/"><FaFacebook className="icon" /></a>
              <a href="https://www.instagram.com/__raaaaa.g?igsh=MTBvcmRsanY2eG5rZg%3D%3D&utm_source=qr"><FaInstagram className="icon" /></a>
              <a href="https://www.tiktok.com/@bluffers520?_t=ZS-8xE7CfZYGgL&_r=1"><FaTiktok className="icon" /></a>
              <a href="https://github.com/saengthongdee"><FaGithub className="icon" /></a>
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

import React, { useEffect, useRef, useState } from "react";
import "./style.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaGithub } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

function performancepage() {
  const data = [
    {
      id: 1,
      name: "Profile",
     description: "An animated personal profile page with smooth scrolling and interactive UI effects.",
      framework: "React, CSS, GSAP, Lenis",
      image: "/profilelast.webp",
      link: "",
    },
    {
      id: 2,
      name: "Lamborghini website",
      description:
        "A high-end car showcase website featuring luxury vehicle visuals and smooth transitions.",
      framework: "React, CSS, GSAP, Lenis, Swiper",
      image: "/lamborghini.webp",
      link: "",
    },
    {
      id: 3,
      name: "cloths shop",
      description:
        "An animated clothing portfolio site with clean layout and carousel interactions.",
      framework: "React, CSS, Swiper",
      image: "/shop.webp",
      link: "",
    },
    {
      id: 4,
      name: "fanta product",
      description:
        "A visually appealing landing page to showcase Fanta products with smooth scroll effects.",
      framework: "React, CSS, GSAP",
      image: "/fanta.webp",
      link: "",
    },
  ];

  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          end: "bottom",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        textRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.inOut" }
      );
      tl.to(
        textRef.current,
        {
          y: -250,
          x: -500,
          duration: 1,
          fontSize: 25,
          borderLeft: "3px solid rgb(243, 171, 84)",
          ease: "power2.inOut",
        },
        "> .5"
      );
      tl.fromTo(
        ".box",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.Out",
          stagger: 0.2
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="performance">
        <div className="text">
          <h1 ref={textRef}>Performance</h1>
        </div>

        <div className="box-performance">
          {data.map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.image} alt={item.description} />
              </div>
              <div className="performance-name">
                <h4>{item.name}</h4>
              </div>
              <div className="performance-description"> {item.description} </div>
              <div className="performance-framework"> {item.framework} </div>
              <div className="performance-link">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.link} <FaGithub className="icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default performancepage;

import React,{ useEffect , useState , useRef} from "react";
import "./style.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLine } from "react-icons/fa";
import { LuMailMinus } from "react-icons/lu";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function page() {

  useEffect(()=> {
      
    const ctx = gsap.context(() => {

        if (window.matchMedia("(min-width: 480px)").matches) {
            gsap.fromTo(".box-link",
              {y:20, opacity:0},{ y: 0,opacity: 1, duration: 1 , ease:"elastic.inOut",stagger: 0.2,
                  scrollTrigger: {
                    trigger: ".box-link",
                    start:"top 80%",
                    end: "bottom",
                    toggleActions: "play none none none"
                  }
              }
            )
        }
    })
    return () => ctx.revert();
    
  },[]);

  return (
    <div id="contact">
      <div className="skill-container">
        <div className="box-container">
          <div className="text-skill">
            <h1>contact</h1>
          </div>
          <div className="box-skill">
            <div className="box-link">
              <FaFacebook className="i" />
              <h3>Rutdanai saengthongdee</h3>
            </div>
            <div className="box-link">
              <FaInstagram className="i" />
              <h3>__raaaaa.g</h3>
            </div>
            <div className="box-link">
              <FaLine className="i" />
              <h3>rang12340</h3>
            </div>
            <div className="box-link">
              <LuMailMinus className="i" />
              <h3>rang0983201594a@gmail.com</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;

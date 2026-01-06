import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TextAni = () => {
  const textAni = useRef(null);

  useEffect(() => {
    const spans = textAni.current.querySelectorAll("span");

    gsap.fromTo(
      spans,
      {
        opacity: 0,
        y: 64,
        color: "#ff0000",
      },
      {
        opacity: 1,
        y: 0,
        color: "#0000ff",
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2, // 🔥 same animation, slight delay
        scrollTrigger: {
          trigger: textAni.current,
          start: "top 80%",
          end: "bottom 30%",
          markers: true,
          toggleActions: "play none restart none",
        },
      }
    );
  }, []);

  return (
    <div className="min-h-[200vh] flex items-center justify-center">
      <div ref={textAni} className="text-3xl text-blue-500 font-semibold">
        <span className="inline-block mr-2">Fahad</span>
        <span className="inline-block">Khan</span>
      </div>
    </div>
  );
};

export default TextAni;

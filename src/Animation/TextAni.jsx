import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function SnapExample() {
  const sectionRef = useRef(null);
  const panelsRef = useRef([]);

  useEffect(() => {
    gsap.to(panelsRef.current, {
      xPercent: -100 * (panelsRef.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=3000",
        scrub: true,
        pin: true,
        snap: 1 / (panelsRef.current.length - 1), // 👈 SNAP
        markers: true,
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="h-screen overflow-hidden">
      <div className="flex w-[300vw] h-full">
        {["One", "Two", "Three"].map((text, i) => (
          <div
            key={i}
            ref={(el) => (panelsRef.current[i] = el)}
            className="w-screen h-full flex items-center justify-center text-4xl font-bold"
          >
            {text}
          </div>
        ))}
      </div>
    </section>
  );
}

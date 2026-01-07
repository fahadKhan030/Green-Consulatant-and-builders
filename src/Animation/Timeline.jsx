import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Timeline = () => {
  const parent = useRef(null);
  const one = useRef(null);
  const two = useRef(null);
  const three = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "top 80%",
        end: "bottom 30%",
        markers: true,
        toggleActions: "play none restart none",
      },
    });

    tl.fromTo(
      one.current,
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, duration: 0.2 }
    )
      .fromTo(
        two.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.2 }
      )
      .fromTo(
        three.current,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, duration: 0.2 }
      );
  }, []);

  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div ref={parent} className="flex gap-4">
        <span
          ref={one}
          className="inline-block h-[100px] w-[100px] bg-blue-600"
        />
        <span
          ref={two}
          className="inline-block h-[100px] w-[100px] bg-green-700"
        />
        <span
          ref={three}
          className="inline-block h-[100px] w-[100px] bg-red-400"
        />
      </div>
    </div>
  );
};

export default Timeline;

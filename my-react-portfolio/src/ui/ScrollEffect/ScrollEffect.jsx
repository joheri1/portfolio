import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import TextPlugin from "gsap/TextPlugin";
import "./ScrollEffect.css";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

export const ScrollEffect = () => {
  const scrollRef = useRef(null);
  const h1Ref = useRef(null);

  useEffect(() => {
    const arr1 = ["1bb28c", "e86a58", "fed45b", "9bc7c5"];
    const arr2 = [...arr1];
    const arr3 = [...arr1];
    // First text change: "SCROLL FOR MORE" -> "DON’T BE STRANGER"
    const words2 = ["DON’T", "BE", "STRANGER"];
    // Second text change: "DON’T BE STRANGER" -> "CONTACT ME:" "LINKEDIN" "GITHUB"
    const words3 = ["CONTACT ME:", "LINKEDIN", "GITHUB"];

    const spans = h1Ref.current.querySelectorAll("span");
    const getHexFrom = (arr) =>
      arr.splice(gsap.utils.random(0, arr.length - 1, 1), 1);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollRef.current,
        scrub: 0.5,
        pin: h1Ref.current,
        start: "top center",
        end: "bottom center",
      },
    });

    spans.forEach((span, i) => {
      gsap.set(span, { "--bg": "#" + getHexFrom(arr1) });
      tl.add(gsap.to(span, { text: words2[i] }), i);
      tl.add(
        gsap.to(span, { "--bg": "#" + getHexFrom(arr2), duration: 0.15 }),
        i
      );
      tl.add(gsap.to(span, { text: words3[i] }), i + 3);
      tl.add(
        gsap.to(span, { "--bg": "#" + getHexFrom(arr3), duration: 0.15 }),
        i + 3
      );
    });
  }, []);

  return (
    <div className="scroll-effect-container" ref={scrollRef}>
      <h1 ref={h1Ref}>
        <span>SCROLL</span>
        <span>FOR</span>
        <span>MORE</span>
      </h1>
    </div>
  );
};

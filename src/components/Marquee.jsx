import { useEffect, useRef } from "react";
import gsap from "gsap";

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    gsap.to(marqueeRef.current, {
      xPercent: -50, // solo metà perché abbiamo duplicato il contenuto
      ease: "linear",
      duration: 35,
      repeat: -1,
    });
  }, []);

  const text = `
    APE emessi nel 2022 → 1.354.336  /  l’80,9% per compravendita o locazione  /  il 59% degli immobili residenziali è ancora nelle classi F-G  /
  `;

  return (
    <div className="marquee-container overflow-hidden whitespace-nowrap">
      <div className="marquee inline-block" ref={marqueeRef}>
        <span className="inline-block px-4">{text}</span>
        <span className="inline-block px-4">{text}</span> {/* Duplicato */}
      </div>
    </div>
  );
};

export default Marquee;

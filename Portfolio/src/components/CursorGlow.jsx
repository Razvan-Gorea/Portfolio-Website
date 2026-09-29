import { useEffect, useRef } from "react";

const GLOW_SIZE = 360;
const EASE = 0.12;

function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reducedMotion || !glowRef.current) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const current = { ...target };
    let rafId;

    const handleMouseMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const tick = () => {
      current.x += (target.x - current.x) * EASE;
      current.y += (target.y - current.y) * EASE;
      if (glowRef.current) {
        glowRef.current.style.transform =
          `translate3d(${current.x - GLOW_SIZE / 2}px, ${current.y - GLOW_SIZE / 2}px, 0)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", handleMouseMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-30"
      style={{
        width: GLOW_SIZE,
        height: GLOW_SIZE,
        background: "radial-gradient(circle, rgba(217, 122, 78, 0.14) 0%, transparent 70%)",
        filter: "blur(20px)",
        willChange: "transform",
      }}
    />
  );
}

export default CursorGlow;

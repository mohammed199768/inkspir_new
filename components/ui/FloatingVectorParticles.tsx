"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingVectorParticles() {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const ctx = gsap.context(() => {
            const particles = gsap.utils.toArray<HTMLDivElement>(".vector-particle");

            particles.forEach((p, i) => {
                // Initial random position
                gsap.set(p, {
                    left: Math.random() * 100 + "%",
                    top: Math.random() * 100 + "%",
                    opacity: 0,
                    scale: 0.5 + Math.random() * 0.5
                });

                // Fade in
                gsap.to(p, {
                    opacity: 0.4, // Reduced max opacity for better performance
                    duration: 1,
                    delay: Math.random() * 0.5
                });

                // Floating animation
                gsap.to(p, {
                    x: "random(-50, 50)",
                    y: "random(-50, 50)",
                    rotation: "random(-180, 180)",
                    duration: "random(10, 20)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: Math.random() * 5
                });

                // Parallax effect using ScrollTrigger for better performance than raw scroll listener
                gsap.to(p, {
                    y: (i + 1) * 50, // Parallax movement
                    ease: "none",
                    scrollTrigger: {
                        trigger: document.body,
                        start: "top top",
                        end: "bottom bottom",
                        scrub: 1
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Reduced particle count for performance
    const particles = Array.from({ length: 8 }).map((_, i) => ({
        id: i,
        src: i % 2 === 0 ? "/Vector1.png" : "/Vector2.png",
        size: Math.random() * 150 + 100
    }));

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
            aria-hidden="true"
        >
            {particles.map((p) => (
                <div
                    key={p.id}
                    className="vector-particle absolute will-change-transform"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                    }}
                >
                    <img
                        src={p.src}
                        alt=""
                        className="w-full h-full object-contain mix-blend-screen"
                        loading="lazy"
                    />
                </div>
            ))}
        </div>
    );
}

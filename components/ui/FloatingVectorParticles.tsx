"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function FloatingVectorParticles() {
    const containerRef = useRef<HTMLDivElement>(null);
    const particleRefs = useRef<{ container: HTMLDivElement | null; img: HTMLImageElement | null }[]>([]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Initialize particles
        particleRefs.current.forEach((ref, i) => {
            if (!ref.container || !ref.img) return;

            // 1. Set initial random position using CSS top/left to avoid transform conflicts
            // We use percentages to be responsive
            gsap.set(ref.container, {
                left: Math.random() * 100 + "%",
                top: Math.random() * 100 + "%",
                opacity: 0
            });

            // Fade in
            gsap.to(ref.container, {
                opacity: 1,
                duration: 1,
                delay: Math.random() * 0.5
            });

            // 2. Continuous floating animation on the IMAGE (local transform)
            gsap.to(ref.img, {
                x: "+=50", // Move relative to container
                y: "+=50",
                rotation: Math.random() * 360,
                duration: 15 + Math.random() * 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 5
            });
        });

        // 3. Scroll Parallax Effect on the CONTAINER (global transform)
        const handleScroll = () => {
            const scrollY = window.scrollY;

            particleRefs.current.forEach((ref, i) => {
                if (!ref.container) return;

                // Different speed for depth effect
                // Some move up, some move down, or all move up at different speeds
                const speed = (i % 5 + 1) * 0.05; // 0.05 to 0.25
                const direction = i % 2 === 0 ? 1 : -1; // Some move opposite to scroll? Usually parallax moves opposite to scroll direction (up as you scroll down)
                // Let's make them all move with scroll but at different rates to create depth
                const movement = scrollY * speed * direction;

                gsap.to(ref.container, {
                    y: movement,
                    duration: 1, // Smooth follow
                    ease: "power2.out",
                    overwrite: "auto"
                });
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            // Cleanup GSAP tweens if needed, though usually auto-cleaned on unmount for simple ones
            gsap.killTweensOf(particleRefs.current.map(p => p.container));
            gsap.killTweensOf(particleRefs.current.map(p => p.img));
        };
    }, []);

    // Create an array of 15 particles
    const particles = Array.from({ length: 15 }).map((_, i) => ({
        id: i,
        src: i % 2 === 0 ? "/Vector1.png" : "/Vector2.png",
        size: Math.random() * 150 + 100 // Size between 100px and 250px (Larger)
    }));

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
            aria-hidden="true"
        >
            {particles.map((p, i) => (
                <div
                    key={p.id}
                    ref={(el) => {
                        if (!particleRefs.current[i]) particleRefs.current[i] = { container: null, img: null };
                        particleRefs.current[i].container = el;
                    }}
                    className="absolute will-change-transform"
                    style={{
                        width: `${p.size}px`,
                        height: `${p.size}px`,
                    }}
                >
                    <img
                        ref={(el) => {
                            if (!particleRefs.current[i]) particleRefs.current[i] = { container: null, img: null };
                            particleRefs.current[i].img = el;
                        }}
                        src={p.src}
                        alt=""
                        className="w-full h-full object-contain opacity-40 mix-blend-screen"
                    />
                </div>
            ))}
        </div>
    );
}

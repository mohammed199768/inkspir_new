import type { ISourceOptions } from "@tsparticles/engine";

export const particlesConfig: ISourceOptions = {
    background: {
        color: "transparent",
    },
    fullScreen: {
        enable: false,
    },
    fpsLimit: 60,
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                width: 1000,
            },
        },
        size: {
            value: { min: 1, max: 3 },
            animation: {
                enable: true,
                speed: 2,
                sync: false,
            },
        },
        links: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            outModes: {
                default: "out",
            },
            attract: {
                enable: false,
            },
        },
        rotate: {
            value: { min: 0, max: 360 },
            direction: "random",
            animation: {
                enable: true,
                speed: 3,
                sync: false,
            },
        },
        life: {
            duration: {
                sync: false,
                value: 0,
            },
            count: 0,
            delay: {
                random: {
                    enable: true,
                    min: 0.5,
                },
                value: 1,
            },
        },
    },
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "attract",
            },
            onClick: {
                enable: true,
                mode: "push",
            },
            resize: {
                enable: true,
                delay: 0.5,
            },
        },
        modes: {
            attract: {
                distance: 200,
                duration: 0.4,
                easing: "ease-out-quad",
                factor: 3,
                maxSpeed: 50,
                speed: 1,
            },
            push: {
                quantity: 4,
            },
        },
    },
    detectRetina: true,
};

window.onload = function () {
    particlesJS("particles-js", {
        particles: {
            number: {
                value: 40,
                density: { enable: true, value_area: 960 }
            },
            color: { value: "#fff" },
            shape: {
                type: "image",
                stroke: { width: 5, color: "#ffffff" },
                polygon: { nb_sides: 11 },
                image: { src: "sp.png", width: 240, height: 240 }
            },
            opacity: {
                value: 1,
                random: true,
                anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
            },
            size: {
                value: 40,
                random: true,
                anim: {
                    enable: true,
                    speed: 4,
                    sync: true
                }
            },
            line_linked: {
                enable: true,
                distance: 200,
                color: "#fff",
                opacity: 1,
                width: 1.8,
            },
            move: {
                enable: true,
                speed: 6,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "bounce",
                bounce: false,
                attract: { enable: false, rotateX: 600, rotateY: 1200 }
            }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
            },
            modes: {
                grab: { distance: 400, line_linked: { opacity: 1 } },
                bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                repulse: { distance: 150, duration: 0.4 },
                push: { particles_nb: 4 },
                remove: { particles_nb: 2 }
            }
        },
        retina_detect: true
    });

}
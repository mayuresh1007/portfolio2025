import React, { useCallback, useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    init && (
      // <Particles
      //   id="tsparticles"
      //   particlesLoaded={particlesLoaded}
      //   options={{
      //     background: {
      //       color: {
      //         value: "black",
      //       },
      //     },
      //     fpsLimit: 120,
      //     fullScreen: {
      //       zIndex: -1, // Ensure particles stay in the background
      //     },
      //     interactivity: {
      //       detectsOn: "window", // Detect interactions on the whole window
      //       events: {
      //         onClick: {
      //           enable: true,
      //           mode: "push",
      //         },
      //         onHover: {
      //           enable: true,
      //           mode: "repulse",
      //         },
      //         resize: true,
      //       },
      //       modes: {
      //         push: {
      //           quantity: 4,
      //         },
      //         repulse: {
      //           distance: 200,
      //           duration: 0.4,
      //         },
      //       },
      //     },
      //     particles: {
      //       color: {
      //         value: "#ffffff",
      //       },
      //       links: {
      //         color: "#ffffff",
      //         distance: 150,
      //         enable: true,
      //         opacity: 0.5,
      //         width: 1,
      //       },
      //       move: {
      //         direction: "none",
      //         enable: true,
      //         outModes: {
      //           default: "bounce",
      //         },
      //         random: false,
      //         speed: 6,
      //         straight: false,
      //       },
      //       number: {
      //         density: {
      //           enable: true,
      //           area: 800,
      //         },
      //         value: 80,
      //       },
      //       opacity: {
      //         value: 0.5,
      //       },
      //       shape: {
      //         type: "circle",
      //       },
      //       size: {
      //         value: { min: 1, max: 5 },
      //       },
      //     },
      //     detectRetina: true,
      //   }}
      // />
      <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      options={{
        // background: {
        //   color: {
        //     value: "black",
        //   },
        // },
        fpsLimit: 120,
        fullScreen: {
          zIndex: -1, // Ensure particles stay in the background
        },
        interactivity: {
          detectsOn: "window", // Detect interactions on the whole window
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: { enable: true, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
    )
  );
};

export default ParticlesComponent;
// import { useEffect, useState, useMemo } from "react";
// import Particles from "@tsparticles/react";
// // import { loadSlim } from "tsparticles-slim"; // Ensure version compatibility
// import { loadFull } from "tsparticles";

// const ParticleComponent = () => {
//   const [initError, setInitError] = useState(false);

//   useEffect(() => {
//     const initParticles = async () => {
//       try {
//         const { initParticlesEngine } = await import("@tsparticles/react");
//         await initParticlesEngine(async (engine) => {
//           // await loadSlim(engine); // Load only the slim bundle
//           await loadFull(engine);
//         });
//       } catch (error) {
//         console.error("Error initializing particles engine:", error);
//         setInitError(true);
//       }
//     };

//     initParticles();
//   }, []);

//   const options = useMemo(
//     () => ({
//       background: {
//         color: {
//           value: "#0d47a1",
//         },
//       },
//       fpsLimit: 120,
//       interactivity: {
//         events: {
//           onClick: {
//             enable: true,
//             mode: "push",
//           },
//           onHover: {
//             enable: true,
//             mode: "repulse",
//           },
//         },
//         modes: {
//           push: {
//             quantity: 4,
//           },
//           repulse: {
//             distance: 200,
//             duration: 0.4,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#ffffff",
//         },
//         links: {
//           color: "#ffffff",
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 1,
//         },
//         move: {
//           direction: "none",
//           enable: true,
//           outModes: {
//             default: "bounce",
//           },
//           random: false,
//           speed: 6,
//           straight: false,
//         },
//         number: {
//           density: {
//             enable: true,
//           },
//           value: 80,
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 5 },
//         },
//       },
//       detectRetina: true,
//     }),
//     []
//   );

//   if (initError) {
//     return <div>Error initializing particles. Please try again later.</div>;
//   }

//   return <Particles id="tsparticles" options={options} />;
// };

// export default ParticleComponent;

import { motion } from 'framer-motion';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from 'react';

export default function Hero() {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-slate-800 dark:via-slate-900 dark:to-indigo-900 opacity-80"></div>
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#6366F1", "#8B5CF6"]
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.3, 
              random: true,
              anim: {
                enable: true,
                speed: 0.3,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 4,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                size_min: 0.1,
                sync: false
              }
            },
            links: {
              enable: true,
              distance: 150,
              color: "#6366F1",
              opacity: 0.2,
              width: 1
            },
            move: {
              enable: true,
              speed: 0.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce"
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "bubble"
              },
              onClick: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 200,
                size: 6,
                duration: 2,
                opacity: 0.3,
                speed: 1.5
              },
              repulse: {
                distance: 200,
                duration: 1
              }
            }
          },
          background: {
            color: "transparent"
          },
          fullScreen: {
            enable: false,
            zIndex: 0
          }
        }}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1
        }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center text-gray-800 dark:text-white z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-6xl font-bold mb-4 bg-clip-text bg-gradient-to-r text-indigo-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Pervin Eren
          </motion.h1>
          
          <motion.p 
            className="text-2xl mb-8 text-gray-600 dark:text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Développeuse Full-Stack & Étudiante en BTS SIO
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
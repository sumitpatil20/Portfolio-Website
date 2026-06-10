import { useCallback } from 'react';

import Particles from 'react-tsparticles';

import { loadSlim } from 'tsparticles-slim';

function ParticlesBackground() {

  const particlesInit = useCallback(async (engine) => {

    await loadSlim(engine);

  }, []);

  return (

    <Particles

      id="tsparticles"

      init={particlesInit}

      options={{

        fullScreen: {
          enable: true,
          zIndex: -1
        },

        background: {
          color: {
            value: 'transparent'
          }
        },

        fpsLimit: 60,

        particles: {

          number: {
            value: 50,
            density: {
              enable: true,
              area: 800
            }
          },

          color: {
            value: [
              '#6366f1',
              '#8b5cf6',
              '#06b6d4',
              '#ec4899'
            ]
          },

          shape: {
            type: 'circle'
          },

          opacity: {
            value: 0.4
          },

          size: {
            value: {
              min: 2,
              max: 6
            }
          },

          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            outModes: {
              default: 'out'
            }
          },

          links: {
            enable: true,
            distance: 150,
            color: '#c4b5fd',
            opacity: 0.3,
            width: 1
          }
        },

        detectRetina: true
      }}

    />

  );
}

export default ParticlesBackground;
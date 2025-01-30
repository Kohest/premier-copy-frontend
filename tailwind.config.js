/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-before': `linear-gradient(
          89.73deg,
          #0f0f10 0.29%,
          rgba(15, 15, 16, 0.992) 12.07%,
          rgba(15, 15, 16, 0.969) 22.55%,
          rgba(15, 15, 16, 0.932) 31.85%,
          rgba(15, 15, 16, 0.883) 40.12%,
          rgba(15, 15, 16, 0.824) 47.49%,
          rgba(15, 15, 16, 0.756) 54.07%,
          rgba(15, 15, 16, 0.68) 60.01%,
          rgba(15, 15, 16, 0.599) 65.43%,
          rgba(15, 15, 16, 0.513) 70.46%,
          rgba(15, 15, 16, 0.425) 75.23%,
          rgba(15, 15, 16, 0.336) 79.88%,
          rgba(15, 15, 16, 0.247) 84.54%,
          rgba(15, 15, 16, 0.161) 89.32%,
          rgba(15, 15, 16, 0.078) 94.38%,
          rgba(15, 15, 16, 0) 99.82%
        )`,
        'custom-after': `linear-gradient(
          1.35deg,
          #0f0f10 0.57%,
          rgba(15, 15, 16, 0.997) 4.47%,
          rgba(15, 15, 16, 0.986) 8.27%,
          rgba(15, 15, 16, 0.969) 12.05%,
          rgba(15, 15, 16, 0.943) 15.88%,
          rgba(15, 15, 16, 0.909) 19.85%,
          rgba(15, 15, 16, 0.866) 24.01%,
          rgba(15, 15, 16, 0.814) 28.44%,
          rgba(15, 15, 16, 0.752) 33.23%,
          rgba(15, 15, 16, 0.68) 38.43%,
          rgba(15, 15, 16, 0.596) 44.13%,
          rgba(15, 15, 16, 0.502) 50.4%,
          rgba(15, 15, 16, 0.395) 57.31%,
          rgba(15, 15, 16, 0.276) 64.94%,
          rgba(15, 15, 16, 0.145) 73.36%,
          rgba(15, 15, 16, 0) 82.65%
        )`,
        'player-shadow': `linear-gradient(1turn,#171c22 -1.09%,rgba(23,28,34,.991) 5.41%,rgba(23,28,34,.964) 11.91%,rgba(23,28,33,.918) 18.4%,rgba(23,27,32,.853) 24.9%,rgba(23,27,31,.768) 31.4%,rgba(22,26,30,.668) 37.9%,rgba(22,25,29,.557) 44.4%,rgba(22,25,28,.443) 50.9%,rgba(22,24,27,.332) 57.4%,rgba(21,23,26,.232) 63.89%,rgba(21,23,25,.147) 70.39%,rgba(21,22,24,.082) 76.89%,rgba(21,22,23,.036) 83.39%,rgba(21,22,23,.009) 89.89%,rgba(21,22,23,0) 96.39%)`

      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0'
          },
          '100%': {
            opacity: '1'
          }
        },
        fadeOut: {
          '0%': {
            opacity: '1'
          },
          '100%': {
            opacity: '0'
          }
        },
        scaleIn: {
          '0%': {
            opacity: '1',
            transform: 'scale(1)'
          },
          '100%': {
            opacity: '0.1',
            transform: ' scale(1.5)'
          }
        },
        slideIn: {
          '0%': {
            transform: 'scaleX(0)'
          },
          '100%': {
            transform: ' scaleX(1)'
          }
        },
        slideDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)'
          },
          '100%': {
            opacity: '1',
            transform: ' translateY(0)'
          }
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        fadeOut: 'fadeOut 0.3s ease-out',
        scaleIn: 'scaleIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.2s ease-in-out',
        slideDown: 'slideDown 0.3s ease-in-out'
      }
    },
  },
  plugins: [],
}


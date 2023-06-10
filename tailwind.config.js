/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    container: {
      center: true
    },
    extend: {
      colors: {
        primary0: '#7FCCE3',
        primary: '#39B7DF',
        primary2: '#29839E',
        primary3: '#194E5E',
        secondary: '#7755D8',
        secondary2: '#553C99',
        secondary3: '#312359',
        gradient: {
          g1: '#0E3062',
          g2: '#121D3A'
        },
        dark: '#2B282F',
        warm: '#FE5F50',
        warm2: '#BF463B',
        warm3: '#802F28'
      },
      typography: {
        // prose-front 使用以下樣式
        front: {
          css: {
            '--tw-prose-counters': 'white',
            '--tw-prose-bullets': 'white'
          }
        }
      },
      opacity: {
        38: '0.38',
        85: '0.85',
        87: '0.87'
      },
      fontFamily: {
        primary: ['Noto Sans TC', 'sans-serif']
      },
      spacing: {
        auto: 'auto'
      },
      backgroundPosition: {
        'right-10%': 'top right -10%'
      },
      animation: {
        'bounce-0.5': 'bounce 0.5s infinite'
      }
    }
  },
  variants: {
    extend: false
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('flowbite/plugin')
  ]
}

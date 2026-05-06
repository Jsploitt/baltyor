import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A4A',
          dark:    '#0D1A2E',
          deep:    '#07101E',
          mid:     '#243460',
          light:   '#2E4070',
          50:      '#EEF1F7',
          100:     '#C5D0E5',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#D9BE70',
          lighter: '#E8D097',
          dark:    '#A88734',
          darker:  '#7A6020',
          subtle:  'rgba(201,168,76,0.12)',
        },
        cream: '#FAF8F4',
        stone: '#F2EDE4',
      },
      fontFamily: {
        sans:    ['var(--font-cairo)', 'Cairo', 'Arial', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'hero-pattern': "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A84C' fill-opacity='0.03'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S10 25.523 10 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s ease-out infinite',
        'float':      'float 6s ease-in-out infinite',
      },
      keyframes: {
        'pulse-ring': {
          '0%':   { transform: 'scale(1)',   opacity: '0.8' },
          '100%': { transform: 'scale(1.8)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};

export default config;

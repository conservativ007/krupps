import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '0.8rem', // 10px по умолчанию для всех размеров экрана
        lg: '2rem', // 40px начиная с md и до 2xl
      },
    },
    extend: {
      fontFamily: {
        kur: 'Kurale',
        inter: ['"Inter"', 'sans-serif'],
      },
      keyframes: {
        move: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100px)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        move: 'move 2s infinite',
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}
export default config

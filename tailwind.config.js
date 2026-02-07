/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Warm/Editorial Palette
        background: '#FAF8F3', // Warm cream
        surface: '#FFFDF7',    // Warm white
        primary: {
          DEFAULT: '#C7522A',  // Terracotta
          light: '#E57A57',
          dark: '#A03E1E',
        },
        accent: {
          DEFAULT: '#5F8575',  // Sage Green
          light: '#84A596',
          dark: '#3F5E50',
        },
        highlight: '#E3A857',  // Warm Amber
        text: {
          main: '#2C2826',     // Rich Charcoal
          muted: '#5C5552',    // Softer Charcoal
          light: '#857F7C',
        },
        border: '#E8DCC8',     // Warm Tan
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'gentle-bounce': 'gentleBounce 2s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gentleBounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'paper-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E\")",
        'gradient-warm': 'linear-gradient(135deg, #FAF8F3 0%, #FFFDF7 100%)',
        'gradient-accent': 'linear-gradient(135deg, #C7522A 0%, #E3A857 100%)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(44, 40, 38, 0.08)',
        'card': '0 10px 40px -10px rgba(44, 40, 38, 0.08)',
        'glow': '0 0 20px rgba(199, 82, 42, 0.3)',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Enterprise Palette
        background: '#FFFFFF',
        surface: '#FFFFFF',
        'surface-highlight': '#F8FAFC', // Slate-50
        border: '#E2E8F0',              // Slate-200

        primary: {
          DEFAULT: '#0F172A', // Slate-900
          light: '#334155',   // Slate-700
          dark: '#020617',    // Slate-950
        },

        accent: {
          DEFAULT: '#4F46E5', // Indigo-600
          light: '#818CF8',   // Indigo-400
          dark: '#3730A3',    // Indigo-800
        },

        text: {
          main: '#0F172A',    // Slate-900
          muted: '#64748B',   // Slate-500
          light: '#94A3B8',   // Slate-400
        },

        functional: {
          success: '#10B981', // Emerald-500
          warning: '#F59E0B', // Amber-500
          error: '#EF4444',   // Red-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'pulse-subtle': 'pulseSubtle 3s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
        'gradient-accent': 'linear-gradient(135deg, #4F46E5 0%, #3B82F6 100%)',
        'grid-pattern': "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40' stroke='%23E2E8F0' stroke-width='1' fill='none' opacity='0.4'/%3E%3C/svg%3E\")",
        'dot-pattern': "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='19' y='19' width='1' height='1' fill='%2394A3B8' opacity='0.4'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'elevated': '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
        'glow': '0 0 20px rgba(79, 70, 229, 0.15)',
      },
    },
  },
  plugins: [],
}

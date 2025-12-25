/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backpacker jungle theme colors
        jungle: {
          dark: '#0F2F2A',    // Deep jungle green - primary background
          moss: '#5E6F64',     // Olive moss - secondary
          light: '#2B463F',    // Lighter jungle for cards
          DEFAULT: '#0F2F2A',
        },
        sand: {
          light: '#F4EFEA',    // Warm paper/sand - light backgrounds
          cream: '#FAF7F4',    // Lighter cream
          DEFAULT: '#F4EFEA',
        },
        charcoal: {
          DEFAULT: '#2B2622',  // Text primary
          light: '#3D3834',
        },
        coral: {
          DEFAULT: '#F26B4F',  // Sunset coral - accent/CTA
          hover: '#E05A3F',
          light: '#FF8770',
        },
        // Keep neutral for utility
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      backgroundImage: {
        'paper-texture': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence baseFrequency=\"0.9\" numOctaves=\"3\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\" opacity=\"0.04\"/%3E%3C/svg%3E')",
      },
      boxShadow: {
        'polaroid': '4px 4px 12px rgba(0, 0, 0, 0.15)',
        'polaroid-hover': '6px 6px 16px rgba(0, 0, 0, 0.2)',
        'organic': '0 8px 20px rgba(15, 47, 42, 0.12)',
        'soft': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      rotate: {
        '1': '1deg',
        '-1': '-1deg',
        '2': '2deg',
        '-2': '-2deg',
      },
      keyframes: {
        'dropdown': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'dropdown': 'dropdown 0.2s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Jungle Theme
        jungle: {
          dark: '#0F2F2A',      // Deep jungle - primary dark
          DEFAULT: '#0F2F2A',
          moss: '#2B463F',       // Secondary jungle
          light: '#3D5A50',      // Lighter jungle for hovers
          muted: '#5E6F64',      // Muted olive
        },
        
        // Accent - Sunset/Adventure
        sunset: {
          gold: '#EEA727',       // Primary CTA - vibrant gold
          DEFAULT: '#EEA727',
          orange: '#E84D1B',     // Hover/active state
          coral: '#FF8770',      // Soft accent
          warm: '#F59E0B',       // Alternative warm
        },
        
        // Neutral - Sand/Paper
        sand: {
          light: '#F4EFEA',      // Page background
          DEFAULT: '#F4EFEA',
          cream: '#FAF7F4',      // Cards/surfaces
          warm: '#FDF8F3',       // Warmer variant
        },
        
        // Text Colors
        charcoal: {
          DEFAULT: '#1E1F1C',    // Primary text
          light: '#3D3834',      // Secondary
          muted: '#5E625A',      // Tertiary/placeholder
        },
        
        // Border/Divider
        border: {
          DEFAULT: '#E6E4DF',
          light: '#F0EDE8',
          dark: '#D0CCC4',
        },
        
        // Semantic
        success: '#4CAF50',
        warning: '#FF9800',
        error: '#F44336',
        info: '#2196F3',
        
        // Keep coral for backwards compatibility
        coral: {
          DEFAULT: '#F26B4F',
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
        sans: ['var(--font-inter)', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['var(--font-outfit)', 'Outfit', 'Plus Jakarta Sans', 'sans-serif'],
        accent: ['Caveat', 'Indie Flower', 'cursive'],
      },
      
      fontSize: {
        'hero-xl': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero': ['clamp(2rem, 5vw, 3.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display': ['clamp(1.75rem, 4vw, 2.5rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      
      boxShadow: {
        'polaroid': '4px 4px 12px rgba(0, 0, 0, 0.15)',
        'polaroid-hover': '6px 6px 16px rgba(0, 0, 0, 0.2)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'button': '0 4px 16px rgba(238, 167, 39, 0.3)',
        'button-hover': '0 6px 20px rgba(238, 167, 39, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.1)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'organic': '0 8px 20px rgba(15, 47, 42, 0.12)',
        'inner-glow': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      },
      
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-sunset': 'linear-gradient(135deg, #EEA727 0%, #E84D1B 100%)',
        'gradient-jungle': 'linear-gradient(180deg, #0F2F2A 0%, #2B463F 100%)',
        'gradient-card': 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.03) 100%)',
        'paper-texture': "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"n\"%3E%3CfeTurbulence baseFrequency=\"0.9\" numOctaves=\"3\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23n)\" opacity=\"0.03\"/%3E%3C/svg%3E')",
      },
      
      rotate: {
        '1': '1deg',
        '-1': '-1deg',
        '2': '2deg',
        '-2': '-2deg',
        '3': '3deg',
        '-3': '-3deg',
      },
      
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out infinite 2s',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'dropdown': 'dropdown 0.2s ease-out',
        'slide-down': 'slide-down 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-10px) rotate(2deg)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        dropdown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
        'spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
      
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },
    },
  },
  plugins: [],
}

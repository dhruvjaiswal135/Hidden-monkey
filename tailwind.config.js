/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        teal: { DEFAULT: '#128790', dark: '#0C6B73' },
        gold: { DEFAULT: '#FBB11A' },
        jungle: { DEFAULT: '#0F2F2A', moss: '#2B463F' },
        ink: { DEFAULT: '#1E1F1C', 2: '#3D3834', 3: '#6B665E', 4: '#9A948C' },
        surface: { DEFAULT: '#FBFBF9', sand: '#F4EFEA' },
        line: { DEFAULT: '#E6E4DF', light: '#F0EDE8' },
        // legacy aliases kept so untouched components still compile
        brand: { teal: '#128790', gold: '#FBB11A' },
        sunset: { gold: '#FBB11A', DEFAULT: '#FBB11A', orange: '#E84D1B' },
        sand: { light: '#F4EFEA', DEFAULT: '#F4EFEA', cream: '#FAF7F4' },
        charcoal: { DEFAULT: '#1E1F1C', light: '#3D3834', muted: '#5E625A' },
        border: { DEFAULT: '#E6E4DF', light: '#F0EDE8' },
      },
      fontFamily: {
        sans: ['var(--font-body)', 'Barlow', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Barlow Condensed', 'sans-serif'],
      },
      fontSize: {
        'd-hero': ['clamp(56px,9vw,136px)', { lineHeight: '.9', letterSpacing: '-0.015em' }],
        'd-page': ['clamp(48px,8vw,112px)', { lineHeight: '.9', letterSpacing: '-0.015em' }],
        'd-h2': ['clamp(40px,6vw,80px)', { lineHeight: '.92', letterSpacing: '-0.01em' }],
        'd-h3': ['clamp(30px,3vw,44px)', { lineHeight: '.95' }],
      },
      maxWidth: { site: '1400px' },
      borderRadius: { card: '20px', hero: '24px' },
      boxShadow: { lift: '0 20px 40px rgba(15,47,42,0.10)', bar: '0 30px 80px rgba(0,0,0,0.35)', gold: '0 4px 14px rgba(251,177,26,0.35)' },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        kenburns: { from: { transform: 'scale(1)' }, to: { transform: 'scale(1.08)' } },
      },
      animation: { marquee: 'marquee 40s linear infinite', kenburns: 'kenburns 14s ease-in-out infinite alternate' },
      transitionTimingFunction: { 'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)' },
    },
  },
  plugins: [],
}

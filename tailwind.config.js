/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    container: { center: true, padding: '1rem' },
    extend: {
      colors: {
        background:  { DEFAULT: 'var(--background)' },
        foreground:  { DEFAULT: 'var(--foreground)' },
        primary:     { DEFAULT: 'var(--primary)',   foreground: 'var(--primary-foreground)' },
        secondary:   { DEFAULT: 'var(--secondary)', foreground: 'var(--secondary-foreground)' },
        accent:      { DEFAULT: 'var(--accent)',     foreground: 'var(--accent-foreground)' },
        gold:        { DEFAULT: 'var(--gold)',        foreground: 'var(--gold-foreground)' },
        muted:       { DEFAULT: 'var(--muted)',       foreground: 'var(--muted-foreground)' },
        card:        { DEFAULT: 'var(--card)',        foreground: 'var(--card-foreground)' },
        border:      { DEFAULT: 'var(--border)' },
        input:       { DEFAULT: 'var(--input)' },
        ring:        { DEFAULT: 'var(--ring)' },
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm:  'calc(var(--radius) * 0.5)',
        lg:  'calc(var(--radius) * 1.5)',
        xl:  'calc(var(--radius) * 2)',
        '2xl': 'calc(var(--radius) * 3)',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta-sans)', 'sans-serif'],
      },
      animation: {
        'reveal-up':    'revealUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in':      'fadeIn 1s ease forwards',
        'float-slow':   'floatSlow 6s ease-in-out infinite',
        'subtle-pulse': 'subtlePulse 3s ease-in-out infinite',
        'ping-once':    'pingOnce 1s ease-out forwards',
        'slide-left':   'slideLeft 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        revealUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-10px)' },
        },
        subtlePulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%':       { opacity: '0.9' },
        },
        pingOnce: {
          '0%':   { transform: 'scale(1)', opacity: '1' },
          '75%':  { transform: 'scale(2)', opacity: '0' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(40px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
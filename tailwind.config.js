/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: '#F8F7F4',
          subtle: '#F2EFE9',
          dark: '#0E1110',
          'dark-subtle': '#151917',
        },
        surface: {
          DEFAULT: '#EFECE6',
          white: '#FFFFFF',
          card: '#FAF9F6',
          dark: '#161B18',
          'dark-elevated': '#1E2421',
        },
        border: {
          hairline: '#E2DCD3',
          subtle: '#ECE7E0',
          dark: '#242C28',
          'dark-subtle': '#1B221E',
        },
        ink: {
          DEFAULT: '#111312',
          secondary: '#383E3A',
          muted: '#626964',
          faint: '#989F9A',
          light: '#F5F3EF',
          'light-muted': '#A4ADA7',
        },
        accent: {
          DEFAULT: '#EE4D2A',
          hover: '#D73E1B',
          soft: '#FDECE7',
          'dark-soft': 'rgba(238, 77, 42, 0.15)',
        },
        emerald: {
          live: '#10B981',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        arabic: ['"Alexandria"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'ticker-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 1, transform: 'scale(1)' },
          '50%': { opacity: 0.5, transform: 'scale(1.15)' },
        },
      },
      animation: {
        ticker: 'ticker 35s linear infinite',
        'ticker-rtl': 'ticker-rtl 35s linear infinite',
        pulseGlow: 'pulseGlow 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

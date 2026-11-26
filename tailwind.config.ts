import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,tsx}'],
  theme: {
    colors: {
      'background': '#fafafa',
      'primary': 'var(--accent-color)',
      'text': '#2b2b2b',
      'idle': '#ff5722',
      'offline': '#aaa',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config

import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,tsx}'],
  theme: {
    colors: {
      'background': '#fffef9',
      'primary': '#009440',
      'text': '#020817',
      'idle': '#f0b232',
      'offline': '#434343',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config


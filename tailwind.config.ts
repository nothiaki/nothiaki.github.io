import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,tsx}'],
  theme: {
    colors: {
      'background': '#0D1117',
      'primary': '#28C85E',
      'text': '#EFEFEF',
      'idle': '#f0b232',
      'offline': '#434343',
    },
    extend: {},
  },
  plugins: [],
} satisfies Config


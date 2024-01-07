import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        jr: {
          dark: '#0F0A4D',
          blue: '#175CFF',
          light: '#f5f5f5',
          lightblue: '#52C4FF',
          lightgray: '#E5E5E5',
          gray: '#B2B2B2',
          yellow: '#FFD61A',
          orange: '#FF8031',
        },
        social: {
          fb: '#4267B2',
          ig: '#C13584',
          tw: '#1DA1F2',
          wb: '#4285F4',
          wa: '#25D366',
        },
      },
    },
  },
  plugins: [],
}
export default config

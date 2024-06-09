import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    flowbite.content(),
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        'app-color' : '#CEB700',
        'border-color' : '#bbaa26',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}


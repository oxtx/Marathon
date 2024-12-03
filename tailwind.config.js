/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}',
    './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
  ],
  theme: {
    extend: {
      colors: {
        'Header_button_orange' : '#E46322',
        'Custom_color_grey' : "#D9D4C7",
        'Custom_color_yellow': '#E7B53C'
      },
      width: {
        Custom_width: '1530px'
      }
    },
  },
  plugins: [],
}


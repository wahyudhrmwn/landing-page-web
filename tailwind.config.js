// tailwind.config.js
import daisyui from 'daisyui' // Import DaisyUI using ES module syntax

export default {
  content: [
    './src/**/*.{html,js,vue,ts}', // Adjust according to your file structure
  ],
  theme: {
    extend: {},
  },
  plugins: [
    daisyui, // Use DaisyUI without require()
    // Include other plugins as necessary
  ],
}

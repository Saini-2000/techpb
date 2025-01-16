/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensures Tailwind is applied to all your React components
  ],
  theme: {
    extend: {
      keyframes: {
        zoomOutCenter: {
          '0%': {
            opacity: 0,
            transform: 'scale(0.5)', // Start small, zoomed in at the center
          },
          '100%': {
            opacity: 1,
            transform: 'scale(1)', // Final state is at full size
          },
        },
      },
      animation: {
        zoomOutCenter: 'zoomOutCenter 0.3s ease-in-out', // Define the zoom-out animation
      },
    },
  },
  plugins: [],
};

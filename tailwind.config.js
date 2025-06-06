// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // If you're using Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // For Pages Router
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1E40AF", // primary
          accent: "#F59E0B", // accent
          secondary: "#0EA5E9", // supporting color
          light: "#F9FAFB", // light background
          dark: "#111827", // dark footer/nav
          text: "#374151", // main body text
        },
      },
    },
  },
  plugins: [],
};

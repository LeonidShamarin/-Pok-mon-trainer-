module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Вказує, де Tailwind має шукати класи
    ],
    theme: {
      extend: {
        colors: {
          primary: "#1E40AF", // Приклад кастомного кольору
        },
      },
    },
    plugins: [],
  };
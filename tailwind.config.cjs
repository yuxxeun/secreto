module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    fontFamily: {
      basement: "BasementGrotesque-Black, cursive",
      space: "SpaceMono-Regular, cursive",
      inter: "Inter-Regular, cursive",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  // daisyui: {
  //   themes: ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"],
  // }
};

// See https://next.tailwindcss.com/docs/configuration for details

module.exports = {
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#f3694f',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'main': '#fafafa',
    })
  },
  variants: {},
  plugins: []
};

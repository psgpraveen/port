const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
});
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
      'node_modules/flowbite-react/lib/esm/**/*.js'
  
  ],
  theme: {
    extend: {},
  },
    plugins: [
        require('flowbite/plugin'),
        require("daisyui"),
    ]
}
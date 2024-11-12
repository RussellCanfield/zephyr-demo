const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('node:path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'hero-',
  content: [
    join(__dirname, 'src/**/*!(*.stories|*.spec).{ts,tsx,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: ['class', '[class~="dark"]']
};

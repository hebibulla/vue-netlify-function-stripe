
// Example: snowpack.config.js
// The added "@type" comment will enable TypeScript type information via VSCode, etc.

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: {url: '/', static: true},
        src: {url: '/dist'},
    },
    plugins: ['@snowpack/plugin-vue', '@snowpack/plugin-dotenv','@snowpack/plugin-sass'],
  };
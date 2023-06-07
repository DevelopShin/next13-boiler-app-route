/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    swcMinify: false,
    // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;

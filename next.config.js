/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  experimental: {
    outputStandalone: true,
  }
};

module.exports = {
  //...
  resolve: {
    alias: {
      '@material-tailwind/react': '@material-tailwind/react/dist/index',
    },
  },
};

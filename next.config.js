/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.experiments = { ...config.experiments, topLevelAwait: true };
    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ["mysql2"],
  },
};

module.exports = nextConfig;

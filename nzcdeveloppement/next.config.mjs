/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            // Options supplémentaires ici si nécessaire
          },
        },
      ],
    });
    return config;
  },
};

export default nextConfig;

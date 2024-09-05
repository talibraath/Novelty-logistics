/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['images.remotePatterns'], // Configure external domain here
    },
    images: {
      domains: ['via.placeholder.com'], // Add the domain here
    },
};

export default nextConfig;

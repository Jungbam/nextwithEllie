/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["plus.unsplash.com", "images.unsplash.com", "unsplash.com"],
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/about",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/item",
        destination: "/products",
      },
    ];
  },
};

module.exports = nextConfig;

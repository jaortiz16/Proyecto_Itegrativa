/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ZEGO_APP_ID: 907670043,
    NEXT_PUBLIC_ZEGO_SERVER_ID: "0b277dda5c42ff90c59d8ae2d703b695",
  },
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;

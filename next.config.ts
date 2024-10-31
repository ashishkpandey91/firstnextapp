import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["example.com", "images.unsplash.com"], // Add the hostname you want to allow
  },
};

export default nextConfig;

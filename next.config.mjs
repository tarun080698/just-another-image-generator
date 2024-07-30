/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "w0.peakpx.com", // Replace with your domain
        port: "",
      },
    ],
  },
};

export default nextConfig;

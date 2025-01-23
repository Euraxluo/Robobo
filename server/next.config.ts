import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  async headers() {
    return [
        {
        source: "/api/:path*",
        headers: [
            { key: "Access-Control-Allow-Credentials", value: "true" },
            { key: "Access-Control-Allow-Origin", value: "*" },
            {
            key: "Access-Control-Allow-Methods",
            value: "GET,DELETE,PATCH,POST,PUT,HEAD,OPTIONS",
            },
            {
            key: "Access-Control-Allow-Headers",
            value:
                "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
            },
        ],
        },
    ];
  },
};

export default nextConfig;

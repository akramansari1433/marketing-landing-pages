import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "flowbite.s3.amazonaws.com",
                pathname: "**",
            },
        ],
    },
};

export default nextConfig;

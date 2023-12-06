import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx"

const withMDX = createMDX({
    options: {
        remarkPlugins: [
            remarkGfm,
        ]
    },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: "loose", // <-- add this
        serverComponentsExternalPackages: ["mongoose"], // <-- and this
    },
    pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.jsdelivr.net",
                port: '',
                pathname: '/npm/twemoji@latest/2/svg/**'
            }
        ],
    }
};

export default withMDX(nextConfig);

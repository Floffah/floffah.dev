import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import Icons from "unplugin-icons/webpack";

const withMDX = createMDX({
    options: {
        remarkPlugins: [remarkGfm],
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
                port: "",
                pathname: "/npm/twemoji@latest/2/svg/**",
            },
        ],
    },
    webpack(config) {
        config.plugins.push(
            Icons({
                compiler: "jsx",
                jsx: "react",
            }),
        );

        return config;
    },
};

export default withMDX(nextConfig);

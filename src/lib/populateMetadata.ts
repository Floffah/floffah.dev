import { Metadata } from "next";

interface PopulateMetadataOptions {
    title?: string;
    description?: string;
    image?: string;
}

export function populateMetadata(
    { title, description, image }: PopulateMetadataOptions,
    override: Metadata = {},
): Metadata {
    return {
        icons: [
            {
                url: "/floffah16.png",
                rel: "icon",
                type: "image/png",
                sizes: "16x16",
            },
            {
                url: "/floffah32.png",
                rel: "icon",
                type: "image/png",
                sizes: "32x32",
            },
            {
                url: "/floffah64.png",
                rel: "icon",
                type: "image/png",
                sizes: "64x64",
            },
            {
                url: "/floffah.png",
                rel: "icon",
                type: "image/png",
                sizes: "664x664",
            },
        ],
        metadataBase: new URL("https://www.floffah.dev"),
        title,
        description,
        openGraph: {
            title,
            description,
            ...override.openGraph,
        },
        twitter: {
            title,
            description,
            ...override.twitter,
        },
        ...override,
    };
}

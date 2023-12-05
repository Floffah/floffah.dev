import "./globals.css";
import { Nunito } from "next/font/google";
import { PropsWithChildren, forwardRef } from "react";

import { populateMetadata } from "@/app/lib/populateMetadata";

export const metadata = populateMetadata({
    title: "Floffah",
    description: "Floffah's personal website",
});

const nunito = Nunito({ subsets: ["latin"] });

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="en">
            <body className={nunito.className}>{children}</body>
        </html>
    );
}

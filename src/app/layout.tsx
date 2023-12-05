import "./globals.css";
import { Nunito } from "next/font/google";
import { PropsWithChildren, forwardRef } from "react";

import { populateMetadata } from "@/app/lib/populateMetadata";

export const metadata = populateMetadata({
    title: "Floffah",
    description: "Floffah's personal website",
});

const nunito = Nunito({ subsets: ["latin"] });

const BaseLayout = forwardRef<HTMLHtmlElement, PropsWithChildren>(
    ({ children }, ref) => {
        return (
            <html lang="en" ref={ref}>
                <body className={nunito.className}>{children}</body>
            </html>
        );
    },
);

export default BaseLayout;

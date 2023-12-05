"use client";

import { useEffect, useRef, useState } from "react";

import { Header } from "@/app/Header";
import { Navbar } from "@/app/components/Navbar";

export default function RootPage() {
    const headerRef = useRef<HTMLDivElement>(null);

    const [standaloneNavbar, setStandaloneNavbar] = useState(false);

    useEffect(() => {
        let prevScrollY = 0;

        const scrollHandler = () => {
            prevScrollY = window.scrollY;
            const headerBox = headerRef.current?.getBoundingClientRect();

            if (
                headerBox &&
                window.scrollY > headerBox.height &&
                !standaloneNavbar
            ) {
                setStandaloneNavbar(true);
            } else if (
                headerBox &&
                window.scrollY < headerBox.height &&
                standaloneNavbar
            ) {
                setStandaloneNavbar(false);
            }
        };

        window.addEventListener("scroll", scrollHandler);

        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [standaloneNavbar]);

    return (
        <>
            <Navbar
                standalone={standaloneNavbar}
                hideTitle={!standaloneNavbar}
            />
            <Header ref={headerRef} />

            <div className="h-screen" />
            <div className="h-screen" />
        </>
    );
}

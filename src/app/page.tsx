"use client";

import Link from "next/link";
import { ReactNode, useEffect, useRef, useState } from "react";

import { Header } from "@/app/Header";
import { Emoji } from "@/components/Emoji";
import { Navbar } from "@/components/Navbar";

const ProjectCard = ({
    title,
    children,
    link,
}: {
    title: ReactNode;
    children: ReactNode;
    link: string;
}) => {
    return (
        <Link
            href={link}
            target="_blank"
            className="flex flex-[0_0_33%] flex-col items-center gap-1 rounded-lg border border-white/10 px-3 py-2"
        >
            <h1 className="flex w-full items-center justify-center gap-1.5 text-xl font-bold">
                {title}
            </h1>
            <p className="text-white/90">{children}</p>
        </Link>
    );
};

export default function RootPage() {
    const headerRef = useRef<HTMLDivElement>(null);

    const [standaloneNavbar, setStandaloneNavbar] = useState(false);

    useEffect(() => {
        const scrollHandler = () => {
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

            <div className="flex h-screen w-full flex-col items-center gap-32 pt-36">
                <div className="flex gap-6 px-5 md:max-w-2xl 2xl:px-0">
                    <Emoji emoji="👋" alt="waving" className="h-24 w-24" />
                    <div className="flex flex-col gap-1">
                        <h2 className="text-4xl font-bold">Hello!</h2>
                        <p className="text-lg font-semibold text-white/80">
                            I am Floffah (Ramsay). I am a web developer and
                            software engineer from Scotland! I love building
                            cool products that I can share with my friends, and
                            have worked on some really cool ones in the past!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col items-center gap-3 px-5 text-center xl:max-w-[81rem] xl:px-0">
                    <h1 className="text-4xl font-bold">Previous projects</h1>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <ProjectCard
                            link="https://studyverse.live"
                            title={
                                <>
                                    <img
                                        src="https://studyverse.live/images/favicon.svg"
                                        className="h-8 w-8"
                                    />
                                    Studyverse
                                </>
                            }
                        >
                            The virtual study hall. I worked on this product
                            from February 2022 until October 2023. I helped
                            build the original MVP product and continued working
                            on the web product beyond that.
                        </ProjectCard>
                    </div>
                </div>
            </div>
        </>
    );
}

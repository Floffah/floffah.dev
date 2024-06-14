import floffahImage from "../../public/floffah.png";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { forwardRef } from "react";

import { Emoji } from "@/components/Emoji";
import { Icon } from "@/components/Icon";

export const Header = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div
            ref={ref}
            className={clsx("flex h-screen w-full flex-col bg-black/25 px-3")}
        >
            <div className="flex flex-auto items-center">
                <div className="pb-40 pl-10 md:pl-[20%]">
                    <div className="flex items-center gap-3">
                        <Image
                            src={floffahImage}
                            alt="floffah"
                            className="h-28 w-28 rounded-xl"
                            placeholder="blur"
                        />
                        <div>
                            <h1 className="text-6xl font-bold text-blue-100">
                                Floffah
                            </h1>
                            <p className="gap-1 text-lg text-blue-100/90">
                                Web developer & software engineer from Scotland{" "}
                                <Emoji
                                    emoji="🏴󠁧󠁢󠁳󠁣󠁴󠁿"
                                    alt="scotland flag"
                                    className="-mt-1 inline-block h-5 w-5"
                                />
                            </p>
                        </div>
                    </div>

                    <div className="mt-5 flex items-center gap-4 text-blue-100/90">
                        <Link href="https://github.com/floffah">
                            <Icon
                                label="github icon"
                                icon="mdi:github"
                                className="h-10 w-10 transition-all duration-150 hover:scale-110"
                            />
                        </Link>
                        <Link href="https://discord.gg/DsSeGSc5na">
                            <Icon
                                label="discord icon"
                                icon="ic:baseline-discord"
                                className="h-10 w-10 transition-all duration-150 hover:scale-110"
                            />
                        </Link>
                        <Link href="https://blog.floffah.dev">
                            <Icon
                                label="blog icon"
                                icon="mdi:post-outline"
                                className="h-10 w-10 transition-all duration-150 hover:scale-110"
                            />
                        </Link>
                        <Link href="https://twitter.com/floffah">
                            <Icon
                                label="blog icon"
                                icon="mdi:twitter"
                                className="h-10 w-10 transition-all duration-150 hover:scale-110"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            <Icon
                label="down icon"
                icon="ic:round-keyboard-arrow-down"
                className="h-10 w-10 animate-bounce cursor-pointer self-center justify-self-end"
                onClick={() =>
                    window.scrollTo({
                        top: window.innerHeight,
                        behavior: "smooth",
                    })
                }
            />
        </div>
    );
});

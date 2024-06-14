"use client";

import floffahImage from "../../public/floffah.png";
import { animated, useTransition } from "@react-spring/web";
import clsx from "clsx";
import Image from "next/image";

interface NavbarProps {
    visible?: boolean;
    showTitle?: boolean;
}

export function Navbar({ visible: propsVisible = true }: NavbarProps) {
    const containerTransition = useTransition(propsVisible, {
        from: { opacity: 0, translateY: -100 },
        enter: { opacity: 1, translateY: 0 },
        leave: { opacity: 0, translateY: -100 },
        config: {
            tension: 500,
            friction: 35,
        },
    });

    return containerTransition(
        (style, visible) =>
            visible && (
                <animated.div
                    style={style}
                    className={clsx(
                        "fixed left-0 top-0 flex w-screen items-center justify-between bg-black/20 px-3 py-2 transition-[padding,background-color] duration-150",
                    )}
                >
                    <div className="flex items-center gap-2">
                        <Image
                            src={floffahImage}
                            alt="floffah"
                            className="h-6 w-6 rounded-md"
                            placeholder="blur"
                        />
                        <p className="text-2xl font-semibold">Floffah</p>
                    </div>
                </animated.div>
            ),
    );
}

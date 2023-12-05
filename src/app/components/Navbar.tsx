"use client";

import clsx from "clsx";

interface NavbarProps {
    standalone?: boolean;
    hideTitle?: boolean;
}

export function Navbar({ standalone = true, hideTitle = false }: NavbarProps) {
    return (
        <div
            className={clsx(
                "fixed left-0 top-0 flex w-screen items-center justify-between px-3 transition-[padding,background-color] duration-150",
                {
                    "py-4": !standalone,
                    "bg-black/20 py-2": standalone,
                },
            )}
        >
            <div className="flex items-center gap-2">
                {!hideTitle && (
                    <p className="text-2xl font-semibold">Floffah</p>
                )}
            </div>
        </div>
    );
}

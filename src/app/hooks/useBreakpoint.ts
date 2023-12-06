import baseTailwindConfig from "../../../tailwind.config.js";
import { useEffect, useState } from "react";
import resolveConfig from "tailwindcss/resolveConfig";

const tailwindConfig = resolveConfig(baseTailwindConfig);
const breakpoints = tailwindConfig.theme.screens;

type Breakpoints = Uppercase<keyof typeof breakpoints>;

export enum Breakpoint {
    XS,
    SM,
    MD,
    LG,
    XL,
    "2XL",
}

export function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState<Breakpoint>(Breakpoint.MD);

    useEffect(() => {
        const getBreakpoint = () => {
            const breakpoint = Object.entries(breakpoints)
                .reverse()
                .find(
                    ([_, value]) =>
                        window.matchMedia(`(min-width: ${value})`).matches,
                );

            return breakpoint
                ? Breakpoint[breakpoint[0].toUpperCase()]
                : Breakpoint["2XL"];
        };

        setBreakpoint(getBreakpoint());

        const onResize = () => {
            const bp = getBreakpoint();

            if (bp !== breakpoint) {
                setBreakpoint(bp);
            }
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        };
    }, [breakpoint]);

    return breakpoint;
}

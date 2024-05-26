"use client";

import useFadeInBottom from "@/hooks/useFadeInBottom";
import React, { Children, cloneElement, isValidElement } from "react";

export default function FadeInBottom({ children, triggerPoint = "-20%", extraClassName = "" }: { children?: React.ReactNode, triggerPoint?: string, extraClassName?: string }) {
    const { ref, isIntersecting } = useFadeInBottom(triggerPoint);

    return (
        <>
            {Children.map(children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child as React.ReactElement<any>, {
                        ref,
                        className: [`${isIntersecting ? "fadeInBottom" : "opacity-0"}`, extraClassName, `${child.props.className || ""}`].filter(e => e != "").join(" "),
                    });
                }
                return child;
            })}
        </>
    );
}


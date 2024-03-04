import React, { ReactNode } from "react";

export interface MainHeadProps  {
    children: ReactNode;
}

export function MainHead({ children } : MainHeadProps)  {
    return (
        <h1 className="mt-10 text-6xl font-semibold font-['Roboto_Slab'] text-center">
            { children }
        </h1>
    )
}
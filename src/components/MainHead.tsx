import React, { FC, ReactNode } from "react";

export interface MainHeadProps  {
    children: ReactNode;
}

export const MainHead: FC<MainHeadProps> = ({ children }) => {
    return (
        <h1 className="mt-5 md:mt-10 text-4xl md:text-6xl font-semibold font-['Roboto_Slab'] text-center">
            { children }
        </h1>
    )
};
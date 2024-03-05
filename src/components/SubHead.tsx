import React, { FC, ReactNode } from "react";

export interface SubHeadProps  {
    children: ReactNode;
}

export const SubHead: FC<SubHeadProps> = ({ children }) => {
    return (
        <h1 className="my-5 text-3xl md:text-4xl font-semibold font-['Roboto_Slab'] text-center">
            { children }
        </h1>
    )
};
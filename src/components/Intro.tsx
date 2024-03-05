import React, { FC, ReactNode } from "react";

export interface IntroProps  {
    children: ReactNode;
}

export const Intro: FC<IntroProps> = ({ children }) => {
    return (
        <div className="px-5 md:px-20 font-light mt-5 md:mt-10 text-center w-full md:w-3/4">
            { children }
        </div>
    )
}
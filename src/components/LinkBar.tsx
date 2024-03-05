import React, { FC, ReactNode } from "react";

export interface LinkProps  {
    children: ReactNode;
}

export const LinkBar: FC<LinkProps> = ({ children }) => {
    return (
        <div className="w-1/4 h-fit flex flex-row items-center justify-center text-4xl my-5 space-x-7">
            { children }
        </div>
    )
}
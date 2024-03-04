import React, { ReactNode } from "react";

export interface PortfolioProps {
    children: ReactNode
}

export function Portfolio({ children } : PortfolioProps) {
    return (
        <div className="flex flex-col items-center w-screen h-screen p-5 font-['Poppins']">
            { children }
        </div>
    )
}
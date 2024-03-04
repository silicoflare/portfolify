import React, { ReactNode, FC } from "react";

export interface PortfolioProps {
    children: ReactNode;
}

export const Portfolio: FC<PortfolioProps> = ({ children }) => {
    return (
        <div className="flex flex-col items-center w-screen h-screen p-5 font-['Poppins']">
            { children }
        </div>
    )
};

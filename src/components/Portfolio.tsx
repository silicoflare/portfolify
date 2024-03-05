import React, { ReactNode, FC } from "react";

export interface PortfolioProps {
    children: ReactNode;
}

export const Portfolio: FC<PortfolioProps> = ({ children }) => {
    return (
        <div className="flex flex-col align-middle items-center w-screen h-full p-2 md:p-5 font-['Montserrat'] md:text-lg bg-gray-300">
            { children }
            <br/><br/>
            <div className="text-gray-500 font-[Montserrat]">
                Made with <a href="https://github.com/silicoflare/portfolify" className="no-underline font-bold hover:text-blue-500">Portfolify</a>
            </div>
        </div>
    )
};

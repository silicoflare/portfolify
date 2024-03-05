import React, { ReactNode } from 'react';

export type CardProps = {
    heading: string;
    children: ReactNode;
}

export const Card = ({ heading, children } : CardProps) => {
    return (
        <div className="p-3 rounded-md border-2 border-gray-600 flex flex-col items-center justify-start min-h-30 md:min-h-40 hover:scale-105 transition ease-in-out duration-300">
            <span className="font-['Roboto_Slab'] font-semibold text-xl">
                { heading }
            </span>
            <span>
                { children }
            </span>
        </div>
    )
}
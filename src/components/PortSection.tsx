import React, { FC, ReactNode } from "react";

export interface SectionProps   {
    children: ReactNode;
    align?: 'left' | 'center' | 'right' | 'justify';
}

export const PortSection: FC<SectionProps> = ({ children, align }) => {
    return (
        <div className="px-7 md:px-14 my-5 md:my-10 w-full md:w-3/4 leading-relaxed" style={{ textAlign: align || 'center' }}>
            { children }
        </div>
    )
}
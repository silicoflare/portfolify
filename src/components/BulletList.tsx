import React, { ReactNode } from 'react';

export type BulletProps = {
    children: ReactNode;
}


export const BulletList = ({ children } : BulletProps) => {
    return (
        <ul className="gap-y-3 list-disc text-justify">
            { children }
        </ul>
    )
}
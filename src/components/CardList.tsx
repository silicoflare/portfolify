import React, { ReactNode } from 'react';

export type CardListProps = {
    children: ReactNode;
}

export const CardList = ({ children } : CardListProps) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            { children }
        </div>
    )
}
import React, { ReactNode } from "react";

export type ItemProps = {
    children: ReactNode;
}

export const ListItem = ({ children } : ItemProps) => {
    return (
        <li className="list-item align-middle">
            {children}
        </li>
    )
}
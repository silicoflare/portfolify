import React from "react";

export type LabelProps = {
    children: string;
    bg?: string;
    fg?: string;
}

export const Label = ({ children, bg, fg } : LabelProps) => {
    return (
        <span className="text-xs rounded-sm p-1 mx-2" style={{ backgroundColor: bg || 'black', color: fg || 'white' }}>
            { children }
        </span>
    )
}
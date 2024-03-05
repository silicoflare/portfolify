import React, { ReactNode } from "react";
import ReactMarkdown from 'react-markdown';

export type MDProps = {
    children: string
}

export const MD = ({ children } : MDProps) => {
    return (
        <ReactMarkdown>
            { children }
        </ReactMarkdown>
    )
}
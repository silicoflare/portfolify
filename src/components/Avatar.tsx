import React, { FC } from "react";

export interface AvatarProps {
    src: string
}

export const Avatar: FC<AvatarProps> = ({ src }) => {
    return (
        <div className="mt-5 w-40 h-40 md:w-52 md:h-52 overflow-hidden rounded-full flex-shrink-0">
            <img src={src} alt="Avatar" className="w-full h-full object-cover" />
        </div>
    )
};
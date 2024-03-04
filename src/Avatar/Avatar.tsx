import React, { FC } from "react";

export interface AvatarProps {
    src: string
}

export const Avatar: FC<AvatarProps> = ({ src }) => {
    return (
        <div className="mt-10 w-[15rem] h-[15rem] overflow-hidden rounded-full">
            <img src={src} alt="Avatar" className="w-full h-full object-cover" />
        </div>
    )
};
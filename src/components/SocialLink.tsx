import React, { FC } from "react";

export interface SocialProps    {
    href: string;
    logo: string;
}

export const SocialLink: FC<SocialProps> = ({ href, logo }) => {
    return (
        <button className="text-gray-600 hover:text-black hover:scale-110 transition duration-300 ease-in-out">
            <a href={href} className={`nf ${logo}`}></a>
        </button>
    )
}
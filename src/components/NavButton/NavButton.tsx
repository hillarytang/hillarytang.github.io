import React from 'react';
import "./NavButton.scss";

type NavButtonProps ={
    title: string,
    link: string
}

export const NavButton = ({ title, link }: NavButtonProps) => {
    return (
        <a href={link}>
            <button className="navButton">{title}</button>
        </a>
    )
}
import React from 'react';
import './NavButton.scss';

type NavButtonProps ={
    title: string,
    link: string
    tooltip?: string
}

export const NavButton = ({ title, link, tooltip }: NavButtonProps) => {
    return (
        <a href={link} title={tooltip}>
            <button className='NavButton' title={tooltip}>{title}</button>
        </a>
    )
}
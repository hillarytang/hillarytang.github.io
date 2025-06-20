import React from 'react';
import { NavButton } from '../NavButton/NavButton';
import { NavLink, _NavLinks } from '../../data/AppData';
import './NavBar.scss';

export const NavBar = () => {
    return (
        <div className='navBar'>
            {_NavLinks.map((object: NavLink, i: number) => <NavButton title={object.title} link={object.link} tooltip={object.tooltip}/> )}
        </div>
    )
}
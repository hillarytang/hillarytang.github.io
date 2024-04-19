import React from 'react';
import { NavButton } from '../NavButton/NavButton';
import { NavLink, _PortfolioNavLinks } from '../../data/appData';
import "./NavBar.scss";

export const NavBar = () => {
    return (
        <div className="navBar">
            {_PortfolioNavLinks.map((object: NavLink, i: number) => <NavButton title={object.title} link={object.link}/> )}
        </div>
    )
}
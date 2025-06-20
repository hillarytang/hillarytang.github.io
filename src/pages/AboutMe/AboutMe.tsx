import React, { FC } from 'react';
import HeaderSign from '../../components/HeaderSign/HeaderSign';
import { NavBar } from '../../components/NavBar/NavBar';

interface AboutMeProps {}

const AboutMe: FC<AboutMeProps> = () => (
   <div className='App'>
      <header>
        <NavBar />
      </header>
      <div className='App-body'>
        <HeaderSign showBottomRope={false} title='The Lore' subtitle='Who am I really?'/>
      </div>
    </div>
);

export default AboutMe;

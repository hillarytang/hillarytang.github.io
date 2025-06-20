import React, { FC } from 'react';
import { BulletinBoard } from '../../components/BulletinBoard/BulletinBoard';
import HomeIntro from '../../components/HomeIntro/HomeIntro';
import HeaderSign from '../../components/HeaderSign/HeaderSign';
import { NavBar } from '../../components/NavBar/NavBar';

interface HomeProps {}

const Home: FC<HomeProps> = () => (
   <div className='App'>
      <header>
        <NavBar />
      </header>
      <div className='App-body'>
        <HomeIntro />

        <div className="App-body settleDown-animation"> 
          <HeaderSign title={'Hillary\'s Handpicked'} subtitle={'A few pieces I\'ve laid out for wandering eyes'} showBottomRope={true}/>
          <BulletinBoard />
        </div>
      </div>
    </div>
);

export default Home;

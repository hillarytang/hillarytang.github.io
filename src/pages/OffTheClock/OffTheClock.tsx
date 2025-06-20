import React, { FC } from 'react';
import { NavBar } from '../../components/NavBar/NavBar';

interface OffTheClockProps {}

const OffTheClock: FC<OffTheClockProps> = () => (
   <div className='App'>
      <header>
        <NavBar />
      </header>
      <div className='App-body'>
        Quest Log
      </div>
    </div>
);

export default OffTheClock;

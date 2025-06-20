import React, { FC } from 'react';
import HeaderSign from '../../components/HeaderSign/HeaderSign';

interface UnderConstructionProps {}

const UnderConstruction: FC<UnderConstructionProps> = () => (
   <div className='App'>
      <div className='App-body'>
        <HeaderSign showBottomRope={false} title='Under construction'/>
      </div>
    </div>
);

export default UnderConstruction;

import React, { FC } from 'react';
import { _QuestLog } from '../../data/AppData';
import Quest from '../../components/Quest/Quest';
import HeaderSign from '../../components/HeaderSign/HeaderSign';
import { NavBar } from '../../components/NavBar/NavBar';

interface ExperienceProps {}

const Experience: FC<ExperienceProps> = () => (
   <div className='App'>
      <header>
        <NavBar />
      </header>
      <div className='App-body settleIn-animation'>
        <HeaderSign showBottomRope={false} title='Quest LoG' subtitle='Stories of my previous adventures'/>
        <div style={{display: 'flex', margin: '2rem'}}>
        {
          [..._QuestLog].map(quest => 
            
              <Quest questType={quest.questType} questTitle={quest.questTitle} blurb={quest.blurb} />
            
          )
        }
        </div>
      </div>
    </div>
);

export default Experience;

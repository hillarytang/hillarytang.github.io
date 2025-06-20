import React, { FC } from 'react';
import './Quest.scss'

export interface QuestProps {
  questType: string,
  questTitle: string,
  icon?: string,
  iconAltText?: string,
  blurb: string
}

const Quest: FC<QuestProps> = ({questType, questTitle, icon, iconAltText, blurb}) => (
  <div className='Quest__Paper settleIn-animation'>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div className='Quest__Pin'></div>
          <h1 className='Quest__QuestType'>{questType}</h1>
      </div>
      <img src={icon} alt={iconAltText}></img>
      <div>
          <h2 className='Quest__QuestTitle'>{questTitle}</h2>
          <p className='Quest__Blurb'>{blurb}</p>
      </div>
  </div>
);

export default Quest;

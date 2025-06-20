import React from 'react';
import './BulletinBoard.scss';
import { _HillarysHandPicked } from '../../data/Quests';
import Quest from '../Quest/Quest';

/*
    The main bulletin board shown on the front page meant to display:
        Main quest: My current job + position
        Brewing: The current project I'm working on
        Side quest: A random activity/event such as current games, IRL tasks, unrelated to work
*/
export const BulletinBoard = () => {
    // The 3 quests to be displayed on the main page
    const Quests = _HillarysHandPicked;
    return (
        <div className='BulletinBoard__Outer'>
            <Quest questType={Quests[0].questType} questTitle={Quests[0].questTitle} blurb={Quests[0].blurb} icon={Quests[0].icon} iconAltText={Quests[0].iconAltText}/>
            <Quest questType={Quests[1].questType} questTitle={Quests[1].questTitle} blurb={Quests[1].blurb} icon={Quests[1].icon} iconAltText={Quests[1].iconAltText}/>
            <Quest questType={Quests[2].questType} questTitle={Quests[2].questTitle} blurb={Quests[2].blurb} icon={Quests[2].icon} iconAltText={Quests[2].iconAltText}/>
        </div>
    )
}
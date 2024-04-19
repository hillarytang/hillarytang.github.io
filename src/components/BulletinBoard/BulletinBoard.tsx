import React from 'react';
import "./BulletinBoard.scss";
import { BulletinBoardPosting } from '../BulletinBoardPosting/BulletinBoardPosting';

export const BulletinBoard = () => {
    return (
        <div className="bulletinBoardOuter">
            <BulletinBoardPosting />
            <BulletinBoardPosting />
            <BulletinBoardPosting />
        </div>
    )
}
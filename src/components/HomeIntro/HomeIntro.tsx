import React, { FC } from 'react';
import './HomeIntro.scss';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';

interface HomeIntroProps {}

const HomeIntro: FC<HomeIntroProps> = () => (
   <div>
      <div className='HomeIntro__Welcome'>
         <div className='slideInFromLeft-animation' >
            <img src="./assets/layer_1_blu.png" style={{width: "500px"}} className="spin-animation"></img>
         </div>
         <div className='HomeIntro__SpeechBubble slideInFromRight-animation'>
            <p style={{width: '75%'}}>
               Greetings, traveler! <br></br>
               You've found your way to my cozy corner of code, curiosity, and a little bit of magic.
            </p>
            <p style={{width: '75%'}}>
               I'm Hillary, a Software Engineer and UX Designer with a love for crafting digital spaces.
               <br></br>
               Whether I'm wrangling JavaScript spells or sketching out the perfect user journey, 
               I bring both logic and a little enchantment to everything I build.
            </p>
            <ButtonPrimary label='Explore my quest log' link='/experience'/>
         </div>
      </div>
   </div>
);

export default HomeIntro;

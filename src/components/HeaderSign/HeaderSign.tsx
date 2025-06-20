import React, { FC } from 'react';
import './HeaderSign.scss';

interface HeaderSignProps {
  title?: string,
  subtitle?: string,
  showBottomRope?: boolean
}

const HeaderSign: FC<HeaderSignProps> = (props) => {
  if (props.showBottomRope) {
    return (<>
              <div className='HeaderSign HeaderSign__ShowBottomRope'>
                  <h1 className='HeaderSign__Title'>
                  {props.title}
                  </h1>
                  <h2 className='HeaderSign__Subtitle'>
                  {props.subtitle}
                  </h2>
              </div>
              <div className='HeaderSign__BothRopes'>
                <div className='HeaderSign__SingleRope'></div>
                <div className='HeaderSign__SingleRope'></div>
              </div>
            </>
          )
  } else {
    return (
            <>
              <div className='HeaderSign HeaderSign__Default'>
                  <h1 className='HeaderSign__Title'>
                  {props.title}
                  </h1>
                  <h2 className='HeaderSign__Subtitle'>
                  {props.subtitle}
                  </h2>
              </div>
            </>
          )
  }
};

export default HeaderSign;

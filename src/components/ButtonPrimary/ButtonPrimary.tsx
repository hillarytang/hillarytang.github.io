import React, { FC } from 'react';
import './ButtonPrimary.scss';

interface ButtonPrimaryProps {
  label?: string
  link?: string
}

const ButtonPrimary: FC<ButtonPrimaryProps> = (props) => (
  <a href={props.link}>
    <button data-testid='ButtonPrimary' className='ButtonPrimary'>
      {props.label}
    </button>
  </a>
);

export default ButtonPrimary;

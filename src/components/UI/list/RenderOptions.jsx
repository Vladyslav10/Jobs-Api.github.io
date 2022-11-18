import React from 'react';
import './RenderOptions.scss';

const RenderOptions = (props) => {
  const options = props.options;
  const addClass = props.mod;

  return (
    <div className='main-about__options'>
        {options.map(el => <div className={`main-about__option main-about__option-${addClass}`} key={el}>{el}</div>)}
    </div>
  );
};

export default RenderOptions;
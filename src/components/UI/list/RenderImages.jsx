import React from 'react';
import './RenderOptions.scss';

const RenderImages = (props) => {
  const options = props.options;
  const addClass = props.mod;

  return (
    <div className='main-about__options'>
        {options.map((el, i) => (
            <div className={`main-about__option main-about__option-${addClass} ibg`} key={el + i}>
                <img src={el} alt={el} />
            </div>
        ))}
    </div>
  );
};

export default RenderImages;
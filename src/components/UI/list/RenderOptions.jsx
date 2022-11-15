import React from 'react';

const RenderOptions = (props) => {
  const options = props.options;

  return (
    <div className='main-about__options'>
        {options.map(el => <div className='main-about__option' key={el}>{el}</div>)}
    </div>
  );
};

export default RenderOptions;
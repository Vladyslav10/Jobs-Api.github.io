import React from 'react';
import { ReactComponent as Place } from '../../assets/place.svg';
import { ReactComponent as Save } from '../../assets/save.svg';
import './JobsItem.scss';

const JobsItem = (props) => {
  const job = props.jobs;
  const date = new Date(job.updatedAt);
  console.log(date);

  return (
    <article className='article'>
      <div className='article__row'>
        <div className='article__column article__column-img'>
          <div className='article__image ibg'>
            <img
              src={job.pictures[Math.floor(Math.random() * job.pictures.length)]}
              alt='here you can see the place described in title'
            />
          </div>
        </div>
        <div className='article__column article__column-content'>
          <div className='article__row article__row-content'>
            <div className='article__column-description'>
              <h2 className='article__title'>{job.title}</h2>
              <p className='article__text'>
                Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
              </p>
              <div className='article__place'>
                <Place />
                {job.address}
              </div>
            </div>
            <div className='article__column article__column-additional'>
              <div className='article__save'>
                <Save />
              </div>
              <div className='article__date'>posted at: {date.toLocaleDateString()}</div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default JobsItem;

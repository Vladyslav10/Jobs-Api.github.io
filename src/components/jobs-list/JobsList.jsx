import React from 'react';
import JobsItem from '../jobs-item/JobsItem';
import './JobsList.scss';

const JobsList = (props) => {
  const items = props.jobs;
  return (
    <div className='main__jobs'>
        {items.map(item => <JobsItem key={item.id} jobs={item}/>)}
    </div>
  );
};

export default JobsList;

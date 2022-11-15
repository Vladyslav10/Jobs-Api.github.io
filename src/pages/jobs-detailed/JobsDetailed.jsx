import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyButton from '../../components/UI/button/MyButton';
import { useParams } from 'react-router-dom';
import { getCurrentJOb } from '../../actions/jobs';
import './JobsDetailed.scss';
import RenderOptions from '../../components/UI/list/RenderOptions';

const JobsDetailed = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.items);
  const job = useSelector((state) => state.jobsDetail.item);
  const isFetching = useSelector((state) => state.jobsDetail.isJobFetching);

  useEffect(() => {
    dispatch(getCurrentJOb(params.id, jobs));
  }, []);

  console.log(job);
  return (
    <div className='wrapper'>
      <main className='main main-about'>
        <div className='main-about__container container'>
          {isFetching && <div className='fetching'></div>}
          {isFetching === false && (
            <div className='main-about__row'>
              <div className='main-about__column main-about__column-content'>
                <div className='main-about__top'>
                  <h1 className='main-about__title'>Job Detail</h1>
                  <div className='main-about__save'></div>
                  <div className='main-about__share'></div>
                </div>
                <div className='main-about__body'>
                    <MyButton>Apply now</MyButton>
                  <div className='main-about__row'>
                    <h3 className='main-about__job'>{job.title}</h3>
                    <div className='main-about__salary'>
                      <div className='main-about__budget'>€ {job.salary}</div>
                      <div className='main-about__budget-info'>
                        Brutto, per year
                      </div>
                    </div>
                  </div>
                  <div className='main-about__date'>
                    posted at: {new Date(job.updatedAt).toLocaleDateString()}
                  </div>
                  <h3 className='main-about__body-title'>Responsopilities</h3>
                  <p className='main-about__description'>{job.description}</p>
                  <h2 className='main-about__body-title'>
                    Compensation & Benefits:
                  </h2>
                  <p className='main-about__list-description'>
                    Our physicians enjoy a wide range of benefits, including:
                  </p>
                  <ul className='main-about__list'>
                      <li>Very competitive compensation package with bonuse</li>
                      <li>Medical, Dental, and Vision Insurance</li>
                      <li>Occurrence-based Malpractice Coverage</li>
                      <li>Short-term and Long-term Disability Insurance and life insurance</li>
                  </ul>
                  <MyButton>Apply now</MyButton>
                </div>
                <div className="main-about__bottom">
                    <div className='main-about__additional'>
                        <h2 className='main-about__title'>Additional info</h2>
                        <h4 className='main-about__subtitle'>Employment type</h4>
                        <RenderOptions options={job.employment_type}/>
                        <h4 className='main-about__subtitle'>Benefits</h4>
                        <RenderOptions options={job.benefits}/>
                    </div>
                    <div className='main-about__attached'>
                        <h2 className='main-about__title'>Attached images</h2>
                        
                    </div>
                </div>
              </div>
              <div className='main-about__column'></div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default JobsDetailed;
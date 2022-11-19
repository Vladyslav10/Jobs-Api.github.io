import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Left } from '../../assets/arrow-left.svg';
import Map from '../../assets/Map.png';
import { ReactComponent as Place } from '../../assets/place.svg';
import MyButton from '../../components/UI/button/MyButton';
import { ReactComponent as Save } from '../../assets/save.svg';
import { ReactComponent as Share } from '../../assets/share.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { getCurrentJob } from '../../actions/jobs';
import './JobsDetailed.scss';
import RenderOptions from '../../components/UI/list/RenderOptions';
import { getLocalStorageItem } from '../../utils/localStorage';
import RenderImages from '../../components/UI/list/RenderImages';

const JobsDetailed = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.items);
  const job = useSelector((state) => state.jobsDetail.item);
  const isFetching = useSelector((state) => state.jobsDetail.isJobFetching);
  const router = useNavigate();
  const [jobItem, setJobItem] = useState(
    getLocalStorageItem("job")
  );

  useEffect(() => {
    dispatch(getCurrentJob(params.id, jobs));
  }, []);

  console.log(jobItem);
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
                  <div className='main-about__images'>
                    <div className='main-about__save'><Save/> <span>Save to my list</span></div>
                    <div className='main-about__share'><Share/> <span>Share</span></div>
                  </div>
                </div>
                <div className='main-about__body'>
                  <MyButton>Apply now</MyButton>
                  <div className='main-about__row'>
                    <h3 className='main-about__job'>{jobItem.title || job.title}</h3>
                    <div className='main-about__salary'>
                      <div className='main-about__budget'>€ {jobItem.salary || job.salary}</div>
                      <div className='main-about__budget-info'>
                        Brutto, per year
                      </div>
                    </div>
                  </div>
                  <div className='main-about__date'>
                    posted at: {new Date(jobItem.updatedAt).toLocaleDateString() || new Date(job.updatedAt).toLocaleDateString()}
                  </div>
                  <h3 className='main-about__body-title'>Responsopilities</h3>
                  <p className='main-about__description'>{jobItem.description || job.description}</p>
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
                        <RenderOptions options={jobItem.employment_type || job.employment_type} mod='employment'/>
                        <h4 className='main-about__subtitle'>Benefits</h4>
                        <RenderOptions options={jobItem.benefits || job.benefits} mod='benefits'/>
                    </div>
                    <div className='main-about__attached'>
                        <h2 className='main-about__title'>Attached images</h2>
                        <RenderImages options={jobItem.pictures || job.pictures} mod='image'/>
                    </div>
                    <div className='main-about__return' onClick={() => router('/')}>
                      <MyButton><Left/><span>RETURN TO JOB BOARD</span></MyButton>
                    </div>
                </div>
              </div>
              <div className='main-about__column'>
                <article className='main-about__article article-column'>
                  <div className='article-column__circle'>
                    <div className='article-column__top'>
                      <h3 className='article-column__title'>
                        Department name.<br/>{jobItem.name || job.name}
                      </h3>
                      <div className='article-column__address'>
                        <Place/>{jobItem.address || job.address}
                      </div>
                      <div className='article-column__number'>
                        <a href={`tel:${jobItem.phone || job.phone}`}>{jobItem.phone || job.phone}</a>
                      </div>
                      <div className='article-column__email'>
                        <a href={`mailto:${jobItem.phone || job.phone}`}>{jobItem.email || job.email}</a>
                      </div>
                    </div>
                  </div>
                  <div className='article-column__bottom'>
                    <div className='article-column__img'>
                      <img src={Map} alt="map" />
                    </div>
                  </div>
                </article>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default JobsDetailed;
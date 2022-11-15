import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCurrentJOb } from '../../actions/jobs';
import './JobsDetailed.scss';

const JobsDetailed = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const jobs = useSelector((state) => state.jobs.items);
    const job = useSelector((state) => state.jobsDetail.item);
    const isFetching = useSelector((state) => state.jobsDetail.isJobFetching);
    //const date = ;

    useEffect(() => {
        dispatch(getCurrentJOb(params.id, jobs))
    }, [])

    console.log(job);
    return(
        <div className='wrapper'>
            <main className='main main-about'>
                <div className="main-about__container container">
                    {isFetching && <div className='fetching'></div>}
                    {isFetching === false &&
                        <div className="main-about__row">
                            <div className="main-about__column main-about__column-content">
                               <div className="main-about__top">
                                   <h1 className='main-about__title'>Job Detail</h1>
                                   <div className="main-about__save"></div>
                                   <div className="main-about__share"></div>
                               </div>
                                <div className="main-about__body">
                                    <div className="main-about__row">
                                        <div className="main-about__job">{job.title}</div>
                                        <div className="main-about__salary">
                                            <div className='main-about__budget'>€ {job.salary}</div> 
                                            <div className='main-about__budget-info'>Brutto, per year</div>
                                        </div>
                                    </div>
                                    <div className='main-about__date'>posted at: {new Date(job.updatedAt).toLocaleDateString()}</div>
                                </div>
                                
                            </div>
                            <div className="main-about__column"></div>
                        </div>
                    }
                </div>
            </main>
        </div>
    );
};

export default JobsDetailed;
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getJobs } from '../../actions/jobs';
import JobsList from '../../components/jobs-list/JobsList';
import './Jobs.scss';

const Jobs = () => {
    const dispatch = useDispatch()
    const jobs = useSelector(state => state.jobs.items)
    const isFetching = useSelector(state => state.jobs.isFetching)
    const isFetchError = useSelector(state => state.jobs.isFetchError)
    useEffect(() => {
        dispatch(getJobs());
    }, []);

    //console.log(jobs);

    return(
        <div className='wrapper'>
            <main className='main'>
                <div className="main__container container">
                    {isFetchError &&
                        <h2 className="err" role="alert">
                            Сталась помилка! Будь ласка перезавантажте сторінку!
                        </h2>
                    }
                    {isFetching && <div className="fetching"></div>}
                    {isFetchError === false && isFetching === false && <JobsList jobs={jobs}/>}
                </div>
            </main>
        </div>
    );
};

export default Jobs;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as Left } from '../../assets/arrow-left.svg';
import { ReactComponent as Right } from '../../assets/arrow-right.svg';
import { getJobs, getPaginationList } from '../../actions/jobs';
import JobsList from '../../components/jobs-list/JobsList';
import { setCurrentPage } from '../../store/jobsReducer';
import { createPages } from '../../utils/pagesCreator';
import './Jobs.scss';

const Jobs = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs.items);
  const jobsOnPage = useSelector((state) => state.jobs.itemsOnPage);
  const isFetching = useSelector((state) => state.jobs.isFetching);
  const isFetchError = useSelector((state) => state.jobs.isFetchError);
  const totalCount = useSelector((state) => state.jobs.totalCount);
  const currentPage = useSelector((state) => state.jobs.currentPage);
  const perPage = useSelector((state) => state.jobs.perPage);
  const pagesCount = useSelector((state) => state.jobs.pages);
  const pages = [];

  useEffect(() => {
    dispatch(getJobs(perPage));
  }, []);

  useEffect(() => {
    dispatch(getPaginationList(currentPage, perPage, totalCount, jobs));
  }, [currentPage, jobs]);

  function rightStep(e) {
    e.preventDefault();
    if(currentPage === pagesCount) {
        dispatch(setCurrentPage(1))
    } else {
        dispatch(setCurrentPage(currentPage + 1))
    }
  }

  function leftStep(e) {
      e.preventDefault();
    if(currentPage === 1) {
        dispatch(setCurrentPage(pagesCount))
    } else {
        dispatch(setCurrentPage(currentPage - 1))
    }
  }

  createPages(pages, pagesCount, currentPage);

  console.log(jobsOnPage);

  return (
    <div className='wrapper'>
      <main className='main'>
        <div className='main__container container'>
          {isFetchError && (
            <h2 className='err' role='alert'>
              Сталась помилка! Будь ласка перезавантажте сторінку!
            </h2>
          )}
          {isFetching && <div className='fetching'></div>}
          {isFetchError === false && isFetching === false && (
            <JobsList jobs={jobsOnPage} />
          )}
          {jobsOnPage.length > 0 && (
            <div className='main__pages'>
              <ul className='main__list'>
                <li><a href="!#" className='main__arrow main__arrow-left' onClick={(e) => leftStep(e)}><Left/></a></li>
                {pages.map((page, index) => (
                  <li key={index}>
                    <a
                      href='!#'
                      className={currentPage === page ? 'main__page-current main__page' : 'main__page'}
                        onClick={()=> dispatch(setCurrentPage(page))}
                    >
                      {page}
                    </a>
                  </li>
                ))}
                <li><a href="!#" className='main__arrow main__arrow-right' onClick={(e) => rightStep(e)}><Right/></a></li>
              </ul>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Jobs;

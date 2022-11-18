import axios from 'axios';
import {
  setIsFetching,
  setFetchError,
  setJobs,
  setJobsOnPage,
  setPages,
  setTotalCount,
} from '../store/jobsReducer';

import { setJob, setIsJobFetching } from '../store/jobsDetailedReducer';
import { setLocalStorageItem } from '../utils/localStorage';

export const getJobs = (perPage) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(
        'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
      );
      dispatch(setTotalCount(response.data.length));
      dispatch(setPages(Math.ceil(response.data.length / perPage)));
      dispatch(setJobs(response.data));
    } catch (e) {
      dispatch(setFetchError(true));
      dispatch(setIsFetching(false));
    }
  };
};

export const getPaginationList = (currentPage, perPage, totalCount, jobs) => {
  return (dispatch) => {
    if (currentPage * perPage > totalCount) {
      dispatch(setJobsOnPage([...jobs].slice(currentPage * perPage - perPage)));
    } else {
      dispatch(
        setJobsOnPage(
          [...jobs].slice(
            currentPage * perPage - perPage,
            currentPage * perPage
          )
        )
      );
    }
  };
};

export const getCurrentJob = (id, items) => {
  return (dispatch) => {
    dispatch(setIsJobFetching(true));
    dispatch(setJob(items.filter((el) => el.id === id)[0]));
    if (items.length > 0) {
      setLocalStorageItem('job', items.filter((el) => el.id === id)[0]);
    }
    dispatch(setIsJobFetching(false));
  };
};

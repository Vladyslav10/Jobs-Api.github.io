import axios from 'axios';
import {
  setIsFetching,
  setFetchError,
  setJobs,
  setJobsOnPage,
  setPages,
  setTotalCount,
} from '../store/jobsReducer';

export const getJobs = (perPage) => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(
        'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
      );
      dispatch(setJobs(response.data));
      dispatch(setTotalCount(response.data.length));
      dispatch(setPages(Math.ceil(response.data.length / perPage)));
    } catch (e) {
      dispatch(setFetchError(true));
      dispatch(setIsFetching(false));
      setTimeout(() => {
        dispatch(setFetchError(false));
      }, 4000);
    }
  };
};

export const getPaginationList = (currentPage, perPage, totalCount, jobs) => {
  return (dispatch) => {
    dispatch(setIsFetching(true));
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
    dispatch(setIsFetching(false));
  };
};

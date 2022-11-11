import axios from 'axios';
import { setIsFetching, setFetchError, setJobs } from '../store/jobsReducer';

export const getJobs = () => {
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true));
      const response = await axios.get(
        'https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu'
      );
      dispatch(setJobs(response.data));
    } catch (e) {
      dispatch(setFetchError(true));
      dispatch(setIsFetching(false));
      //   setTimeout(() => {
      //     dispatch(setFetchError(false));
      //   }, 2000);
    }
  };
};

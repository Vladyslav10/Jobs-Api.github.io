const SET_JOBS = 'SET_JOBS';
const SET_JOBS_ON_PAGE = 'SET_JOBS_ON_PAGE';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_PAGES = 'SET_PAGES';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_FETCH_ERROR = 'SET_FETCH_ERROR';

const defaultState = {
  items: [],
  itemsOnPage: [],
  isFetching: true,
  currentPage: 1,
  pages: 0,
  perPage: 15,
  totalCount: 0,
  isFetchError: false,
};

export default function jobsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        items: action.payload,
        isFetching: false,
      };
    case SET_JOBS_ON_PAGE:
      return {
        ...state,
        itemsOnPage: action.payload,
      };
    case SET_TOTAL_COUNT:
      return {
        ...state,
        totalCount: action.payload,
      };
    case SET_PAGES:
      return {
        ...state,
        pages: action.payload,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case SET_FETCH_ERROR:
      return {
        ...state,
        isFetchError: action.payload,
      };
    default:
      return state;
  }
}

export const setJobs = (jobs) => ({ type: SET_JOBS, payload: jobs });
export const setPages = (num) => ({ type: SET_PAGES, payload: num });
export const setJobsOnPage = (jobsPerPage) => ({
  type: SET_JOBS_ON_PAGE,
  payload: jobsPerPage,
});
export const setTotalCount = (num) => ({ type: SET_TOTAL_COUNT, payload: num });
export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});
export const setCurrentPage = (page) => ({
  type: SET_CURRENT_PAGE,
  payload: page,
});
export const setFetchError = (bool) => ({
  type: SET_FETCH_ERROR,
  payload: bool,
});

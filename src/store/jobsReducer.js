const SET_JOBS = 'SET_JOBS';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
// const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_FETCH_ERROR = 'SET_FETCH_ERROR';

const defaultState = {
  items: [],
  isFetching: true,
  // currentPage:1,
  // perPage:10,
  totalCount: 0,
  isFetchError: false,
};

export default function jobsReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_JOBS:
      return {
        ...state,
        items: action.payload,
        totalCount: action.payload.length,
        isFetching: false,
      };
    case SET_IS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    // case SET_CURRENT_PAGE:
    //     return {
    //         ...state,
    //         currentPage: action.payload
    //     }
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
export const setIsFetching = (bool) => ({
  type: SET_IS_FETCHING,
  payload: bool,
});
//export const setCurrentPage = (page) => ({type:SET_CURRENT_PAGE, payload:page})
export const setFetchError = (bool) => ({
  type: SET_FETCH_ERROR,
  payload: bool,
});

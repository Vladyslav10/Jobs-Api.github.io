const SET_JOB = 'SET_JOB';
const SET_IS_JOB_FETCHING = 'SET_IS_JOB_FETCHING';

const defaultState = {
  item: {},
  isJobFetching: true,
};

export default function jobsDetailedReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        item: action.payload,
        isJobFetching: false,
      };
    case SET_IS_JOB_FETCHING:
      return {
        ...state,
        isJobFetching: action.payload,
      };
    default:
      return state;
  }
}

export const setJob = (jobs) => ({ type: SET_JOB, payload: jobs });
export const setIsJobFetching = (bool) => ({
  type: SET_IS_JOB_FETCHING,
  payload: bool,
});

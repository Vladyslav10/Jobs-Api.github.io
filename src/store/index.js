import { combineReducers } from 'redux';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import jobs from './jobsReducer';
import JobsDetailed from './jobsDetailedReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  jobs: jobs,
  jobsDetail: JobsDetailed,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

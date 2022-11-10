import Jobs from '../pages/jobs/Jobs';
import JobsDetailed from '../pages/jobs-detailed/JobsDetailed';

import { JOBS_ROUTE, JOBS_DETAILED_ROUTE } from '../utils/consts.js';

export const routes = [
  {
    path: JOBS_ROUTE,
    Component: Jobs,
  },
  {
    path: JOBS_DETAILED_ROUTE + '/:id',
    Component: JobsDetailed,
  },
];

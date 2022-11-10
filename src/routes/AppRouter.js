import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Jobs from '../pages/jobs/Jobs';
import { routes } from './routes';

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((rout) => (
        <Route path={rout.path} element={<rout.Component />} key={rout.path} />
      ))}
      <Route path='*' element={<Jobs />} />
    </Routes>
  );
};

export default AppRouter;

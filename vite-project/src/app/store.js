import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../components/job';
// import jobsFetch from '../features/jobsSlice';
import React, { useState } from 'react';


export default configureStore({
  reducer: {
    jobs: jobsReducer
  },
});

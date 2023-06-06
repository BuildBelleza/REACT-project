import { configureStore } from '@reduxjs/toolkit';
import jobsReducer from '../features/jobSlice';
// import jobsFetch from '../features/jobsSlice';
import React, { useState } from 'react';


export default configureStore({
  reducer: {
    jobs: jobsReducer
  },
});

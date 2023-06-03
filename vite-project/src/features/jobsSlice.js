import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  value: 0,
  status: 'idle',
};

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    posts: (state, action) => {
      state.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(jobsFetch.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(jobsFetch.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});

export const jobsFetch = createAsyncThunk(
  'fetchJobs',
  async (posts) => {
    const response = await fetchJobs(posts);
    return response.data;
  }
);

export const fetchJobs = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/postshttps://job-board-search-fastapply.p.rapidapi.com/us/snagajob/fetchjobs');
  const data = await response.json();
  return data;
};

export const { posts } = jobsSlice.actions;
export const jobs = state => state.jobs;

export default jobsSlice.reducer;
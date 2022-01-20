import { configureStore } from '@reduxjs/toolkit';
import postsReducers from '../redux/reducer';

export const store = configureStore({
  reducer: {
    posts: postsReducers
  },
});

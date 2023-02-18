import { configureStore } from '@reduxjs/toolkit';
import MainSlice from '../reducers/reducer';

export const store = configureStore({
  reducer: {
    main: MainSlice,
  },
});

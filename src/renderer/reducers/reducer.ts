import { createSlice } from '@reduxjs/toolkit';

export const InitialState: Renderer.Reducers.MainSlice = {
  projectName: 'Social App Admin',
  projectVersion: '0.0.1',
  isRendererReady: false,
  showSidebar: true,
  currentContext: 'api_authentication',
};

export const MainSlice = createSlice({
  name: 'main',
  initialState: InitialState,
  reducers: {
    renderer: (state, action) => {
      state.isRendererReady = action.payload;
    },
    showSidebar: (state, action) => {
      state.showSidebar = action.payload;
    },
    setContext: (state, action) => {
      state.currentContext = action.payload;
    },
  },
});

export const { renderer, showSidebar, setContext } = MainSlice.actions;

export default MainSlice.reducer;

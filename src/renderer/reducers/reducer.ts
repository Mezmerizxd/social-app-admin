import { createSlice } from '@reduxjs/toolkit';

export const InitialState: Renderer.Reducers.MainSlice = {
  projectName: 'Social App Admin',
  projectVersion: '0.0.1',
  isRendererReady: false,
  showSidebar: true,
  currentContext: 'api_authentication',
  isApiEditorOpen: false,
  apiEditorData: null,
  isCreatingApi: false,
  apis: [],
};

export const MainSlice = createSlice({
  name: 'main',
  initialState: InitialState,
  reducers: {
    setState: (state, action) => {
      if (action.payload !== null || action.payload !== undefined) {
        return action.payload;
      }
    },
    renderer: (state, action) => {
      state.isRendererReady = action.payload;
    },
    showSidebar: (state, action) => {
      state.showSidebar = action.payload;
    },
    setContext: (state, action) => {
      state.currentContext = action.payload;
    },
    toggleApiEditor: (state, action) => {
      switch (action.payload.type) {
        case 'close':
          state.apiEditorData = null;
          state.isApiEditorOpen = false;
          state.isCreatingApi = false;
          break;
        case 'edit':
          state.apiEditorData = action.payload.data;
          state.isApiEditorOpen = true;
          break;
        case 'create':
          state.apiEditorData = null;
          state.isCreatingApi = true;
          state.isApiEditorOpen = true;
          break;
      }
    },
    addApi: (state, action) => {
      state.apis.length > 0
        ? state.apis.push(action.payload)
        : (state.apis = action.payload);
    },
    editApi: (state, action) => {
      state.apis = action.payload;
    },
  },
});

export const {
  setState,
  renderer,
  showSidebar,
  setContext,
  toggleApiEditor,
  addApi,
  editApi,
} = MainSlice.actions;

export default MainSlice.reducer;

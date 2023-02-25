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
  apis: [
    {
      id: 0,
      method: 'POST',
      name: 'Login',
      url: 'http://mezmerizxd.net/api/v1/authentication/login',
      contentType: 'application/json',
      connection: 'Keep-Alive',
      status: 'Unknown',
    },
  ],
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
    toggleApiEditor: (state, action) => {
      if (action.payload) {
        state.apiEditorData = action.payload;
      } else {
        state.apiEditorData = null;
        state.isCreatingApi = true;
      }
      state.isApiEditorOpen = !state.isApiEditorOpen;
    },
    addApi: (state, action) => {
      state.apis.length > 0
        ? state.apis.push(action.payload)
        : (state.apis = action.payload);
    },
    editApi: (state, action) => {
      console.log(action.payload);

      state.apis = action.payload;
    },
  },
});

export const {
  renderer,
  showSidebar,
  setContext,
  toggleApiEditor,
  addApi,
  editApi,
} = MainSlice.actions;

export default MainSlice.reducer;

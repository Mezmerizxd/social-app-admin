import { createSlice } from '@reduxjs/toolkit';

export const InitialState: Renderer.Reducers.MainSlice = {
  projectName: 'Social App Admin',
  projectVersion: '0.0.1',
  isRendererReady: false,
  showSidebar: true,
  currentContext: 'api_authentication',
  editApi: {
    isEditing: false,
    id: '',
    name: '',
    url: '',
    method: 'GET',
  },
  apis: {
    authentication: [
      {
        id: 'authentication',
        method: 'POST',
        name: 'Login',
        url: 'http://mezmerizxd.net/api/v1/authentication/login',
        status: 'Unknown',
      },
    ],
  },
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
    editApi: (state, action) => {
      state.editApi.isEditing = true;
      state.editApi.id = action.payload.id;
      state.editApi.name = action.payload.name;
      state.editApi.url = action.payload.url;
      state.editApi.method = action.payload.method;
    },
    editApiClose: (state) => {
      state.editApi.isEditing = false;
      state.editApi.id = '';
    },
  },
});

export const { renderer, showSidebar, setContext, editApi, editApiClose } =
  MainSlice.actions;

export default MainSlice.reducer;

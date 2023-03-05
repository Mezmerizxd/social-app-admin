import { createSlice } from "@reduxjs/toolkit";

export const InitialState: Renderer.Reducer.MainState = {
  projectName: "",
  projectVersion: "",
  isRendererReady: false,
  showSidebar: false,
  currentContext: "",
  isApiEditorOpen: false,
  apiEditorData: null,
  isCreatingApi: false,
  apis: [],
};

export const MainSlice = createSlice({
  name: "main",
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
        case "close":
          state.apiEditorData = null;
          state.isApiEditorOpen = false;
          state.isCreatingApi = false;
          break;
        case "edit":
          state.apiEditorData = action.payload.data;
          state.isApiEditorOpen = true;
          break;
        case "create":
          state.apiEditorData = null;
          state.isCreatingApi = true;
          state.isApiEditorOpen = true;
          break;
      }
    },
    setApis: (state, action) => {
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
  setApis,
} = MainSlice.actions;

export default MainSlice.reducer;

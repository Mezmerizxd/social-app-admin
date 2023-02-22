import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../hooks/redux';
import { Container, Waiting, Application } from './styles';
import { renderer } from '../reducers/reducer';
import { Contexts, SidebarActions } from './config';

import Titlebar from '../components/Titlebar';
import Sidebar from './components/Sidebar';
import ApiManager from './components/managers/ApiManager';

export default () => {
  const state: Renderer.Reducers.MainSlice = useAppSelector(
    (state) => state.main
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(async () => {
      dispatch(renderer(true));
    }, 2000);
  }, []);

  return state.isRendererReady ? (
    <Container>
      <Titlebar state={state} dispatch={dispatch} />
      <Application id={state.showSidebar ? 'ShowSidebar' : 'HideSidebar'}>
        <Sidebar state={state} dispatch={dispatch} actions={SidebarActions} />
        {state.currentContext === Contexts.API_AUTHENTICATION && (
          <ApiManager
            state={state}
            dispatch={dispatch}
            title="Authentication"
            actions={[
              {
                name: 'Add',
                func: () => {},
              },
            ]}
            options={state.apis.authentication}
          />
        )}
      </Application>
    </Container>
  ) : (
    <Waiting>Waiting...</Waiting>
  );
};

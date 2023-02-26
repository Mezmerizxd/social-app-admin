declare namespace Renderer {}
declare namespace Renderer.Components {
  interface Props {
    state: Renderer.Reducers.MainSlice;
    dispatch: Renderer.Hooks.ReduxDispatch;
  }
}
declare namespace Renderer.Components.Sidebar {
  interface Props extends Renderer.Components.Props {
    actions: SidebarGroup[];
  }

  interface SidebarGroup {
    groupName: string;
    actions: SidebarAction[];
  }

  interface SidebarAction {
    name: string;
    icon: any;
    context: any;
  }
}
declare namespace Renderer.Components.ApiManager {
  interface Props extends Renderer.Components.Props {
    title: string;
    actions: ApiManagerAction[];
    options: Renderer.Reducers.Api[];
  }

  interface ApiManagerAction {
    name: string;
    icon?: any;
    func: () => void;
  }

  interface ApiManagerOption {
    id: number;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    name: string;
    url: string;
    status: 'Success' | 'Error' | 'Unknown';
  }
}
declare namespace Renderer.Components.Popups {
  interface EditApiProps extends Renderer.Components.Props {}
}
declare namespace Renderer.Hooks {
  type ReduxDispatch = typeof store.dispatch;
  type ReduxSelector = ReturnType<typeof store.getState>;
}
declare namespace Renderer.Reducers {
  interface MainSlice {
    projectName: string;
    projectVersion: string;
    isRendererReady: boolean;
    showSidebar: boolean;
    currentContext: string;
    isApiEditorOpen: boolean;
    apiEditorData: Api | null;
    isCreatingApi: boolean;
    apis: Api[];
  }

  interface Api {
    id: number;
    method: string;
    name: string;
    url: string;
    contentType: string;
    connection: string;
    body: string;
    status: number;
    response?: {
      data: any;
    };
  }
}
declare namespace Renderer.Stores {}

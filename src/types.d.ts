declare namespace Renderer {
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

declare namespace Renderer.Reducer {
  interface MainState {
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
}

declare namespace Renderer.Component {
  interface Props {
    state: Reducers.MainState;
    dispatch: Hooks.ReduxDispatch;
  }
}

declare namespace Renderer.Component.Sidebar {
  interface Props extends Renderer.Component.Props {
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

declare namespace Renderer.Component.Popup {
  interface EditApiProps extends Renderer.Component.Props {}
}

declare namespace Renderer.Component.ApiManager {
  interface Props extends Renderer.Component.Props {
    title: string;
    actions: ApiManagerAction[];
    options: Reducers.Api[];
  }

  interface ApiManagerAction {
    name: string;
    icon?: any;
    func: () => void;
  }

  interface ApiManagerOption {
    id: number;
    method: "GET" | "POST" | "PUT" | "DELETE";
    name: string;
    url: string;
    status: "Success" | "Error" | "Unknown";
  }
}

declare namespace Renderer.Hooks {
  type ReduxDispatch = typeof store.dispatch;
  type ReduxSelector = ReturnType<typeof store.getState>;
}

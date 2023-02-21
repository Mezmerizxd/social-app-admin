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
    options: ApiManagerOption[];
  }

  interface ApiManagerAction {
    name: string;
    icon?: any;
    func: () => void;
  }

  interface ApiManagerOption {
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    name: string;
    url: string;
    status: 'Success' | 'Error' | 'Unknown';
  }
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
  }
}
declare namespace Renderer.Stores {}

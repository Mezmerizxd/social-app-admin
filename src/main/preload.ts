import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  Api: {
    send(channel: any, data: { event: string; data?: any }) {
      ipcRenderer.send(channel, data);
    },
    receive(channel: any, func: (...args: unknown[]) => void) {
      ipcRenderer.on(channel, (_event: any, ...args) => func(...args));
    },
  },
  AppManager: {
    window: {
      close() {
        ipcRenderer.send('app-manager', {
          event: 'window:close',
        });
      },
      minimize() {
        ipcRenderer.send('app-manager', {
          event: 'window:minimize',
        });
      },
      maximize() {
        ipcRenderer.send('app-manager', {
          event: 'window:maximize',
        });
      },
    },
    getState() {
      ipcRenderer.send('app-manager', {
        event: 'get-state',
      });
    },
    saveState(state: any) {
      ipcRenderer.send('app-manager', {
        event: 'save-state',
        data: state,
      });
    },
  },
  ApiManager: {
    testApiRequest(data: Renderer.Reducers.Api) {
      ipcRenderer.send('api-manager', {
        event: 'test-api-request',
        data,
      });
    },
  },
});

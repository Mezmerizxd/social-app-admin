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
  ApiManager: {
    testApiRequest(data: Renderer.Reducers.Api) {
      ipcRenderer.send('api-manager', {
        event: 'test-api-request',
        data,
      });
    },
  },
});

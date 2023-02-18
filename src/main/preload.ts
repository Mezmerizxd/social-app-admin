import { contextBridge, ipcRenderer } from 'electron';

export type Channels = 'api';

contextBridge.exposeInMainWorld('electron', {
  Api: {
    send(channel: Channels, data: { event: string; data?: any }) {
      ipcRenderer.send(channel, data);
    },
    receive(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.on(channel, (_event: any, ...args) => func(...args));
    },
  },
});

import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("api", {
  basic: {
    send(channel: any, data: { event: string; data?: any }) {
      ipcRenderer.send(channel, data);
    },
    receive(channel: any, func: (...args: unknown[]) => void) {
      ipcRenderer.on(channel, (_event: any, ...args) => func(...args));
    },
  },
  windowManager: {
    minimize() {
      ipcRenderer.send("window-manager", { event: "minimize" });
    },
    maximize() {
      ipcRenderer.send("window-manager", { event: "maximize" });
    },
    close() {
      ipcRenderer.send("window-manager", { event: "close" });
    },
  },
  appManager: {
    getState() {
      ipcRenderer.send("app-manager", { event: "get-state" });
    },
    setState(data: any) {
      ipcRenderer.send("app-manager", { event: "set-state", data });
    },
    createApi(data: Renderer.Api) {
      ipcRenderer.send("app-manager", { event: "create-api", data });
    },
    editApi(data: Renderer.Api) {
      ipcRenderer.send("app-manager", { event: "edit-api", data });
    },
    deleteApi(data: Renderer.Api) {
      ipcRenderer.send("app-manager", { event: "delete-api", data });
    },
    testApi(data: Renderer.Api) {
      ipcRenderer.send("app-manager", { event: "test-api", data });
    },
  },
});

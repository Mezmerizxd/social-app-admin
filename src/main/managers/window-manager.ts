import { ipcMain } from "electron";

export default class WindowManager {
  private window: Electron.BrowserWindow;

  constructor(window: Electron.BrowserWindow) {
    this.window = window;

    console.info("[WindowManager] starting");

    if (!this.window) {
      console.error("[WindowManager] Window is not defined");
      throw new Error("[WindowManager] Window is not defined");
    }
    this.start();
  }

  private start() {
    ipcMain.on("window-manager", (_event, arg) => {
      switch (arg.event) {
        case "minimize":
          this.minimize();
          break;
        case "maximize":
          this.maximize();
          break;
        case "close":
          this.close();
          break;
      }
    });

    console.info("[WindowManager] started");
  }

  private minimize() {
    this.window.minimize();
  }

  private maximize() {
    if (this.window.isMaximized()) {
      this.window.unmaximize();
    } else {
      this.window.maximize();
    }
  }

  private close() {
    this.window.close();
  }
}

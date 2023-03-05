import { app, BrowserWindow } from "electron";
import * as path from "path";

// managers
import AppManager from "./managers/app-manager";
import WindowManager from "./managers/window-manager";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

if (require("electron-squirrel-startup")) {
  app.quit();
}

let mainWindow: Electron.BrowserWindow = null;

const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 600,
    minWidth: 900,
    minHeight: 500,
    frame: false,
    icon: path.join(__dirname, "assets/icon.png"),
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();

  new AppManager();
  new WindowManager(mainWindow);
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

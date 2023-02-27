import { ipcMain } from 'electron';
import * as fs from 'fs';
import * as path from 'path';

export default class AppManager {
  isDebug =
    process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

  constructor(app: Electron.App, window: any) {
    ipcMain.on('app-manager', (_event, arg) => {
      console.log('app-manager', arg);

      switch (arg.event) {
        case 'window:close':
          window.close();
          app.quit();
          break;
        case 'window:minimize':
          window.minimize();
          break;
        case 'window:maximize':
          if (window.isMaximized()) {
            window.unmaximize();
          } else {
            window.maximize();
          }
          break;
        case 'get-state':
          this.getState(_event);
          break;
        case 'save-state':
          this.saveState(arg.data);
          break;
        default:
          break;
      }
    });
  }

  getState(event: any) {
    console.log('getState');
    let state = {};

    if (this.isDebug) {
      state = {
        projectName: 'Social App Admin',
        projectVersion: '0.0.1',
        isRendererReady: false,
        showSidebar: true,
        currentContext: 'api_authentication',
        isApiEditorOpen: false,
        apiEditorData: null,
        isCreatingApi: false,
        apis: [
          {
            id: 0,
            method: 'POST',
            name: 'Login',
            url: 'http://mezmerizxd.net/api/v1/account/login',
            contentType: 'application/json',
            connection: 'Keep-Alive',
            body: JSON.stringify({
              email: 'test@test.com',
              password: 'testtest',
            }),
            status: 0,
          },
        ],
      };
    } else {
      const appDataPath = path.join(
        process.env.APPDATA || '',
        'social-app-admin'
      );
      try {
        state = JSON.parse(
          fs.readFileSync(path.join(appDataPath, 'data.json'), 'utf8')
        );
      } catch {
        console.log("Couldn't read data.json file");
      }
    }

    event.reply(
      'app-manager-state-response',
      JSON.stringify({
        data: state,
      })
    );
  }

  saveState(state: Renderer.Reducers.MainSlice) {
    console.log('saveState');
    const data = JSON.stringify(state);
    if (!this.isDebug) {
      // find data.json file in &appdata&/Social App Admin
      const appDataPath = path.join(
        process.env.APPDATA || '',
        'social-app-admin'
      );
      // create data.json file inside appDataPath
      fs.writeFileSync(path.join(appDataPath, 'data.json'), data);
    }
  }
}

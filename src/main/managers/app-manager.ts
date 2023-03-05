import { ipcMain } from "electron";
import * as path from "path";
import * as fs from "fs";
import axios from "axios";

export default class AppManager {
  private APP_NAME: string = "social-app-admin";
  private DATA_NAME: string = "data.json";
  private DEFAULT_DATA: any = {
    projectName: "Social App Admin",
    projectVersion: "0.0.1",
    isRendererReady: true,
    showSidebar: true,
    currentContext: "api_authentication",
    isApiEditorOpen: false,
    apiEditorData: null,
    isCreatingApi: false,
    apis: [],
  };

  constructor() {
    console.info("[AppManager] starting");

    this.verifyAppData();
    this.start();
  }

  private start() {
    ipcMain.on("app-manager", (_event, arg) => {
      switch (arg.event) {
        case "get-state":
          _event.reply("app-mgr-receive-state", this.state);
          break;
        case "set-state":
          this.state = arg.data;
          break;
        case "create-api":
          this.createApi(_event, arg.data);
          break;
        case "edit-api":
          this.editApi(_event, arg.data);
          break;
        case "delete-api":
          this.deleteApi(_event, arg.data);
          break;
        case "test-api":
          this.testApi(_event, arg.data);
          break;
        default:
          break;
      }
    });

    console.info("[AppManager] started");
  }

  private get state() {
    const data = JSON.parse(
      fs.readFileSync(
        path.join(process.env.APPDATA, this.APP_NAME, this.DATA_NAME),
        "utf8"
      )
    );
    console.info("[AppManager] got state");
    return data;
  }
  private set state(data: any) {
    console.info("[AppManager] set state");
    fs.writeFileSync(
      path.join(process.env.APPDATA, this.APP_NAME, this.DATA_NAME),
      JSON.stringify(data)
    );
    return;
  }

  private createApi(_event: any, data: Renderer.Api) {
    console.log("[AppManager] creating api");
    this.state = {
      ...this.state,
      apis: [...this.state.apis, data],
    };
    _event.reply("app-mgr-receive-api", this.state.apis);
    return;
  }

  private editApi(_event: any, data: Renderer.Api) {
    console.log("[AppManager] editing api");
    this.state = {
      ...this.state,
      apis: this.state.apis.map((api: Renderer.Api) => {
        if (api.id === data.id) {
          return data;
        }
        return api;
      }),
    };
    _event.reply("app-mgr-receive-api", this.state.apis);
    return;
  }

  private deleteApi(_event: any, data: Renderer.Api) {
    console.log("[AppManager] deleting api");
    this.state = {
      ...this.state,
      apis: this.state.apis.filter((api: Renderer.Api) => api.id !== data.id),
    };
    _event.reply("app-mgr-receive-api", this.state.apis);
    return;
  }

  private async testApi(_event: any, data: Renderer.Api) {
    console.log("[AppManager] testing api");
    try {
      const r: any = await axios({
        method: data.method,
        url: data.url,
        headers: {
          "Content-Type": data.contentType,
          connection: data.connection,
        },
        data: data.body,
      })
        .then((response) => {
          console.info("[AppManager] api test response", response.data);
          return {
            status: response.status,
            data: response.data,
          };
        })
        .catch((error) => {
          console.error("[AppManager] api test error", error.response.status);
          return {
            status: error.response.status,
          };
        });

      this.state = {
        ...this.state,
        apis: this.state.apis.map((api: Renderer.Api) => {
          if (api.id === data.id) {
            return {
              ...api,
              status: r.status,
              response: {
                data: r.data ? r.data : null,
              },
            };
          }
          return api;
        }),
      };
    } catch (error) {
      this.state = {
        ...this.state,
        apis: this.state.apis.map((api: Renderer.Api) => {
          if (api.id === data.id) {
            return {
              ...api,
              status: -1,
            };
          }
          return api;
        }),
      };
    }
    _event.reply("app-mgr-receive-api", this.state.apis);
    return;
  }

  private verifyAppData() {
    // Check the appdata folder for the app
    if (!fs.existsSync(path.join(process.env.APPDATA, this.APP_NAME))) {
      // If it doesn't exist, create it
      fs.mkdirSync(path.join(process.env.APPDATA, this.APP_NAME));
      console.info("[AppManager] created folder in appdata");
    }
    // Check data exists in app data
    if (
      !fs.existsSync(
        path.join(process.env.APPDATA, this.APP_NAME, this.DATA_NAME)
      )
    ) {
      this.state = this.DEFAULT_DATA;
      console.info("[AppManager] created data file in appdata");
    }
    console.log("[AppManager] verified app data");
    return;
  }
}

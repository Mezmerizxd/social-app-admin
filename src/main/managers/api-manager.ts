import { ipcMain } from 'electron';
import axios from 'axios';

export default new (class ApiManager {
  constructor() {
    ipcMain.on('api-manager', (_event, arg) => {
      switch (arg.event) {
        case 'test-api-request':
          this.testApiRequest(_event, arg.data);
          break;
        default:
          break;
      }
    });
  }

  async testApiRequest(event: any, api: Renderer.Reducers.Api) {
    const r = await axios({
      method: api.method,
      url: api.url,
      headers: {
        'Content-Type': api.contentType,
        connection: api.connection,
      },
      data: api.body,
    }).catch(() => {
      event.reply(
        'api-manager-response',
        JSON.stringify({
          status: 404,
          api: api,
        })
      );
    });

    if (!r) {
      event.reply(
        'api-manager-response',
        JSON.stringify({
          status: 404,
          api: api,
        })
      );
      return;
    }

    event.reply(
      'api-manager-response',
      JSON.stringify({
        data: r.data,
        status: r.status,
        statusText: r.statusText,
        api: api,
      })
    );
  }
})();

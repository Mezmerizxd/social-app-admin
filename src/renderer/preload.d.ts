declare global {
  interface Window {
    electron: {
      Api: {
        send(channel: any, data: { event: string; data?: any }): void;
        receive(channel: any, func: (...args: unknown[]) => void): void;
      };
      ApiManager: {
        testApiRequest(data: Renderer.Reducers.Api): void;
      };
    };
  }
}

export {};

declare global {
  interface Window {
    api: {
      basic: {
        send(channel: any, data: { event: string; data?: any }): void;
        receive(channel: any, func: (...args: unknown[]) => void): void;
      };
      windowManager: {
        minimize(): void;
        maximize(): void;
        close(): void;
      };
      appManager: {
        getState(): void;
        setState(data: any): void;
        createApi(data: Renderer.Api): void;
        editApi(data: Renderer.Api): void;
        deleteApi(data: Renderer.Api): void;
        testApi(data: Renderer.Api): void;
      };
    };
  }
}

export {};

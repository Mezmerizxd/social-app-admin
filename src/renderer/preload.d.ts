import { Channels } from 'main/preload';

declare global {
  interface Window {
    electron: {
      Api: {
        send(channel: Channels, data: { event: string; data?: any }): void;
        receive(channel: Channels, func: (...args: unknown[]) => void): void;
      };
    };
  }
}

export {};

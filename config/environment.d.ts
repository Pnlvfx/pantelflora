declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_HOST?: string;
      NEXT_PUBLIC_CLIENT_URL?: string;
    }
  }
}

// eslint-disable-next-line unicorn/require-module-specifiers
export {};

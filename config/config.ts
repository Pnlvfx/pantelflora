/* eslint-disable no-restricted-properties */
type ENV = Partial<Config>;

interface Config {
  NODE_ENV: 'production' | 'development' | 'test';
  HOST: string;
  CLIENT_URL: string;
}

const getConfig = () => {
  return {
    NODE_ENV: process.env.NODE_ENV,
    HOST: process.env.NEXT_PUBLIC_HOST,
    CLIENT_URL: process.env.NEXT_PUBLIC_CLIENT_URL,
  };
};

const getSanitzedConfig = (config: ENV) => {
  for (const [key, value] of Object.entries(config)) {
    if (!value) throw new Error(`Missing key ${key}`);
  }
  return config as Config;
};

export const config = getSanitzedConfig(getConfig());

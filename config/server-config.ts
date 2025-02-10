import { headers } from 'next/headers';
import { userAgentFromString } from 'next/server';

export const deviceIsMobile = async () => {
  const h = await headers();
  const userAgent = h.get('user-agent');
  return userAgent ? userAgentFromString(userAgent).device.type === 'mobile' : false;
};

'use client';

import { useEffect } from 'react';

const Error = ({ error }: { error: Error }) => {
  useEffect(() => {
    console.log(error.message);
  }, [error]);

  return <div className="flex h-screen w-full items-center justify-center">{error.message}</div>;
};

export default Error;

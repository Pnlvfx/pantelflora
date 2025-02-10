'use client';

const ErrorPage = ({ error }: { readonly error: Error }) => {
  return <div className="flex h-screen w-full items-center justify-center">{error.message}</div>;
};

export default ErrorPage;

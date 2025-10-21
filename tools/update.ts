import { updateUnversionedDeps } from '@goatjs/dbz/update';

const run = async () => {
  await updateUnversionedDeps({
    'babel-plugin-react-compiler': 'experimental',
    next: 'canary',
    react: 'canary',
    'react-dom': 'canary',
  });
};

void run();

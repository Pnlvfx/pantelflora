import { rimraf } from '@goatjs/rimraf';
import { spawnWithLog } from '@goatjs/dbz/spawn';
import { createGitClient } from '@goatjs/node/git';
import { execAsync } from '@goatjs/node/exec';
import { checkGitStatus } from '@goatjs/dbz/git';

await checkGitStatus();

try {
  await rimraf('.next');
  await spawnWithLog('yarn', ['vercel', 'pull', '--yes']);
  await spawnWithLog('yarn', ['vercel', 'build', '--prod']);
  await spawnWithLog('yarn', ['vercel', 'deploy', '--prebuilt', '--prod']);
  await execAsync('git checkout -- .yarnrc.yml');
  await execAsync('yarn version minor');
  const git = createGitClient();
  await git.add();
  await git.commit('RELEASE');
  await git.push();
} catch (err) {
  await execAsync('git checkout -- .');
  throw err;
}

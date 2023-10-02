process.env.NODE_OPTIONS = '--openssl-legacy-provider';
const child_process = require('child_process');
child_process.execSync('npm run start', { stdio: 'inherit' });
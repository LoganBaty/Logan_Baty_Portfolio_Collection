const { spawn } = require('child_process');
const path = require('path');

// Path to the Angular app and local database
const appPath = path.join(__dirname, 'first-app-lesson-00');

// Start the local database
const dbProcess = spawn('npm', ['run', 'start'], {
  cwd: appPath,
  shell: true
});
dbProcess.stdout.on('data', data => console.log(`[DB] ${data}`));
dbProcess.stderr.on('data', data => console.error(`[DB ERROR] ${data}`));

// Start the Angular app
const ngProcess = spawn('ng', ['serve'], {
  cwd: appPath,
  shell: true
});
ngProcess.stdout.on('data', data => console.log(`[NG] ${data}`));
ngProcess.stderr.on('data', data => console.error(`[NG ERROR] ${data}`));

// Optional: handle process exit
process.on('SIGINT', () => {
  dbProcess.kill('SIGINT');
  ngProcess.kill('SIGINT');
  process.exit();
});

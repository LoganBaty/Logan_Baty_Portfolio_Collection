// startServices.ts
import { spawn } from 'child_process';
import path from 'path';

let dbProcess: ReturnType<typeof spawn>;
let ngProcess: ReturnType<typeof spawn>;

export function startServices(): Promise<void> {
  return new Promise((resolve) => {
    const appPath = path.join(__dirname, 'first-app-lesson-00');

    dbProcess = spawn('npm', ['run', 'start'], {
      cwd: appPath,
      shell: true
    });
    dbProcess.stdout.on('data', data => console.log(`[DB] ${data}`));
    dbProcess.stderr.on('data', data => console.error(`[DB ERROR] ${data}`));

    ngProcess = spawn('ng', ['serve'], {
      cwd: appPath,
      shell: true
    });
    ngProcess.stdout.on('data', data => console.log(`[NG] ${data}`));
    ngProcess.stderr.on('data', data => console.error(`[NG ERROR] ${data}`));

    // Wait for services to be ready (adjust delay as needed)
    setTimeout(resolve, 10000);
  });
}

export function stopServices(): void {
  dbProcess?.kill('SIGINT');
  ngProcess?.kill('SIGINT');
}

const { execSync } = require('child_process');

try {
  console.log('Building Next.js static export...');
  execSync('npx next build', { stdio: 'inherit' });
  console.log('Build completed successfully');
} catch (error) {
  console.error('Build failed:', error.message);
  process.exit(1);
}
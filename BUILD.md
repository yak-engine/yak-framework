# Build process
- Open two CMD prompts
- cd 'engine' in one prompt
- cd 'editor' in one prompt
- In the engine directory run 'npm run build'
- In the engine directory cd into 'dist' and run 'npm link'
- Go to the editor prompt and run 'npm link ../engine/dist'
- In the editor prompt run 'npm run start'


- TODO: Automate this process.
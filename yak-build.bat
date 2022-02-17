cd engine
call npm run build
cd dist
call npm link
cd ../editor
call npm link ../dist
cd ..
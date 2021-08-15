# yak-framework

A prototype 2D javascript game engine, editor, and demo game application.

## Editor

Provided within the `/editor` directory is an editor to allow for yak projects to be built using a GUI interface. The editor
is currently built using electron and VueJS.

## Engine

The source code for the engine utilized by the editor is under the `/engine` directory.

## Demo

Provided in the repository is a basic demo application. The application builds a basic game utilizing many of the available features within
the engine.

## Running the Application

- Run the editor and watch for engine changes `npm run dev:editor`
- Run the demo and watch for engine changes `npm run dev:demo`

## Features
- [ ] GUI editor
- [ ] Scriptable entities
- [ ] Collision detection
- [ ] Input
- [ ] WebGL rendering
- [x] Canvas rendering
- [x] Custom entity component system
- [ ] Sprites
- [ ] Tilemap
- [ ] UI integration
- [x] Logging

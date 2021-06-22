# Yak Engine

In order to create a new application create a class that inherits from the abstract Application.ts class

```typescript
export default class Game extends Application {
    // Executed once the application has finished initializing.
    onStart(): void {

    }
}
```

When the page finished loading create a new instance of your game class and call the init() method to 
initialize the game.

```typescript
window.addEventListener((event) => {
    let game = new Game();
    game.start();
});
```

Once the init() method has finished bootstraping the application the onStart() method within the your game
class will be executed.
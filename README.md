# is-tmux
Detect if your code is running inside a tmux session, and if so, which pane


## Installation
``` shell
$ npm install --save is-tmux
```

## Usage
```javascript
const isTmux = require('is-tmux');
console.log(isTmux.default); // Prints true in tmux, false otherwise

console.log(isTmux.pane()); // Prints pane number in tmux (e.g. "%138"), undefined otherwise
```

## About
### License
Copyright © 2018, [nukeop](https://github.com/nukeop).
Released under the [MIT License](LICENSE).

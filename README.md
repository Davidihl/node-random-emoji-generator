# Node.js Random Emoji Generator

Generate random emojis on the command line

## Features

### Random Emoji

Without any user input: print random emoji

```bash
$ node index.js
🫶
$ node index.js
😀
```

### Specific Emoji

With user input of a correct emoji name: print emoji

```bash
$ node index.js pizza
🍕

```

With user input of an incorrect emoji name: print error message that emoji doesn't exist

```bash
$ node index.js pizzza
Invalid emoji name

```

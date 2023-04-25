// Import emoji library with emoji methods
import emoji from 'node-emoji';

// Save user input in command line as a variable to make code more readable
const emojiName = process.argv[2];

// Check if emojiName is not empty
if (emojiName) {
  // If emojiName is not empty, validate the input using a method from the library and save it as a variable
  const foundEmoji = emoji.hasEmoji(emojiName);

  // Conditional operator (Tenary) basically just a fancy way of writing an if statement
  foundEmoji
    ? // If the input is valid, return emoji
      console.log(emoji.find(emojiName).emoji)
    : // If the input is invalid, return error message
      console.log('Invalid emoji name');

  // If there is no user input, return a random emoji
} else {
  console.log(emoji.random().emoji);
}

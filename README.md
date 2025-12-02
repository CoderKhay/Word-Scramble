# Word Scramble

This is a browser game that shuffles words and challenges the player to guess the original word. Each word includes a short tip. Built with plain HTML, CSS and JavaScript for use as a portfolio project.

## How to play

- The page loads a shuffled word automatically.
- Click the input field and type your guess, then press `Check` or hit Enter.
- You have up to 5 tries per word. Click `Random` to get a new word if you don't know the current one and are uninterested in trying

## Features

- Random word selection and Fisher–Yates shuffle for fair scrambling.
- Simple UI with tries counter and tips for each word.
- Confetti effect on correct answer (uses `canvas-confetti`).

## Tech

- HTML5
- tailwindcss
- typescript
- vite

## Notes about the confetti import

The project currently imports `canvas-confetti` using an ESM CDN inside `scramble.ts` (for example via Skypack). That approach works in modern browsers but requires network access at runtime. If the page is opened offline, the browser cannot fetch the module and the confetti import will fail.

## Fisher–Yates shuffle (what I learned)

The project uses the Fisher–Yates algorithm to shuffle characters in a word uniformly in O(n) time. Example (simplified):

```ts
function fisherYatesShuffle(array:Array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
```

## Contribution

Feel free to open issues or make PRs. Small improvements that help the UI, accessibility, and bundling setup are welcome.

## License

This project is provided under the ISC License (see `package.json`).

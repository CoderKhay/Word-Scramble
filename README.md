# Word-Scramble

This is a game which involves the scattering of meaningful words and giving of tips to help players reach the original word.

## WHAT I LEARNT

-It was definitely fun building this project,and i learnt an algorithm known as Fisher yates or Knull shuffle
The algorithm ensures a uniformly random shuffle in O(n) time.
Here is the syntax below

````function fisherYatesShuffle(array){
for(let i = array.length - 1,i<0,i--){
const j = Math.floor(Math.random()\*(i+1))

    [array[i],array[j]] = [array[j],array[i]]
    }
    # Word Scramble

    A small browser game that shuffles words and challenges the player to guess the original word. Each word includes a short tip. Built with plain HTML, CSS and JavaScript for use as a portfolio project.

    Live demo: https://words-scramble-game.netlify.app/ (if available)

    ## How to play
    - The page loads a shuffled word automatically.
    - Click the input field and type your guess, then press `Check` or hit Enter.
    - You have up to 5 tries per word. Click `Random` to get a new word (limited per round) or `Reset` to restart.

    ## Features
    - Random word selection and Fisher–Yates shuffle for fair scrambling.
    - Simple UI with tries counter and tips for each word.
    - Confetti effect on correct answer (uses `canvas-confetti`).

    ## Tech
    - HTML5
    - CSS3
    - Vanilla JavaScript

    ## Run locally (quick)
    Open a terminal in the project folder and serve the files over a local static server. Example commands (PowerShell):

    ```pwsh
    # Option A: Python 3 built-in server
    python -m http.server 8000

    # Option B: Node http-server (requires Node)
    npx http-server . -p 8000
    ```

    Then open http://localhost:8000 in your browser.

    ## Notes about the confetti import
    The project currently imports `canvas-confetti` using an ESM CDN inside `scramble.js` (for example via Skypack). That approach works in modern browsers but requires network access at runtime. If the page is opened offline, the browser cannot fetch the module and the confetti import will fail.

    If you want the confetti to work offline, choose one of these options:

    - Vendor the UMD browser bundle (quick, no build step):
        1. Download the browser file `confetti.browser.min.js` into a `vendor/` folder (or `lib/`).
        2. Add a script tag in `index.html` before your app script:

    ```html
    <script src="vendor/confetti.browser.min.js"></script>
    <script type="module" src="scramble.js"></script>
    ```

        3. Remove the CDN `import` from `scramble.js` and use the global `confetti()` function.

    - Use a bundler/build tool (recommended for many npm packages):
        Set up Vite, Webpack or Parcel, install `canvas-confetti` with npm, and import it normally (`import confetti from 'canvas-confetti'`). The bundler will include the library in your build so the app works offline after the build.

    ## Fisher–Yates shuffle (what I learned)
    The project uses the Fisher–Yates algorithm to shuffle characters in a word uniformly in O(n) time. Example (simplified):

    ```js
    function fisherYatesShuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    ```

    ## Screenshots
    See the `screenshot/` folder for images of the game UI.

    ## Contribution
    Feel free to open issues or make PRs. Small improvements that help the UI, accessibility, and bundling setup are welcome.

    ## License
    This project is provided under the ISC License (see `package.json`).

````

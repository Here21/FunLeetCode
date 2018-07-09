function wordsearch(words, width, height, backwards = 0.5, dir = 4, lower = false) {
  const CHARACTER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const letters = lower ? CHARACTER.toLowerCase() : CHARACTER;
  const wordre = /^[A-Z]+$/i;                    // what a valid word looks like
  const MAXATTEMPTS = 20;                       // maximum amount of times to place a word
  const invaid = [];                            // store invalid word
  const unplaced = [];                          // put word into puzzle more than the limit of MAXATTEMPTS

  if (!Array.isArray(words) && words.length < 1) {
    return false;
  }

  width = +width || 20;
  height = +height || 20;
  backwards = +backwards || 0.5;

  // filter out any non-words and word length over than size
  words = words.map(word =>
    lower ? word.toLowerCase() : word.toUpperCase()
  ).filter((word) => {
    if (wordre.test(word) && word.length < Math.min(width, height)) {
      return true;
    }
    invaid.push(word);
  });

  // sort the words by length (biggest first)
  words.sort(function (a, b) {
    return a.length < b.length ? -1 : 1;
  });

  // populate the grid with empty arrays
  const grid = new Array(height);
  for (let i = 0; i < grid.length; i++) {
    grid[i] = new Array(width);
  }

  // loop the words
  for (let i = 0; i < words.length; i++) {
    let originalword = words[i];
    let word = originalword;

    // reverse the word if needed
    if (Math.random() < backwards) {
      word = word.split('').reverse().join('');
    }

    // pick a random spot
    // try to place the word in the grid
    let attempts = 0;
    while (attempts < MAXATTEMPTS) {
      // determine the direction (up-right, right, down-right, down)
      const direction = Math.floor(Math.random() * dir);
      const info = directioninfo(word, direction, width, height);

      // random starting point
      let ox = Math.round(Math.random() * (info.maxx - info.minx) + info.minx);
      let x = ox;
      let oy = Math.round(Math.random() * (info.maxy - info.miny) + info.miny);
      let y = oy;

      // check to make sure there are no collisions
      let placeable = true;
      let count = 0;
      for (let l = 0; l < word.length; l++) {
        let charingrid = grid[y][x];

        if (charingrid) { // check if there is a character in the grid
          if (charingrid !== word.charAt(l)) {
            // not the same latter, try again
            placeable = false; // :(
            break;
          } else {
            // same letter! count it
            count++;
          }
        }
        // keep trying!
        y += info.dy;
        x += info.dx;
      }
      if (!placeable || count >= word.length) {
        attempts++;
        continue;
      }

      // the word was placeable if we make it here!
      // reset x and y and place it
      x = ox;
      y = oy;
      for (let l = 0; l < word.length; l++) {
        grid[y][x] = word.charAt(l);
        y += info.dy;
        x += info.dx;
      }
      break;
    } // end placement while loop

    if (attempts >= 20) unplaced.push(originalword);
  } // end word loop

  // the solved grid... XXX I hate this
  const solved = JSON.parse(JSON.stringify(grid));

  // put in filler characters
  for (let i = 0; i < grid.length; i++)
    for (let j = 0; j < grid[i].length; j++)
      if (!grid[i][j]) {
        solved[i][j] = ' ';
        grid[i][j] = letters.charAt(
          Math.floor(Math.random() * letters.length)
        );
      }

  // give the user some stuff
  return {
    grid: grid,
    solved: solved,
    unplaced: unplaced,
    invaid: invaid
  };
}

/**
 * given an integer that represents a direction,
 * return an object with boundary information
 * and velocity
 */
function directioninfo(word, direction, width, height) {
  // determine the bounds
  let minx = 0, miny = 0;
  let maxx = width - 1;
  let maxy = height - 1;
  let dx = 0, dy = 0;
  switch (direction) {
    case 0: // down
      miny = 0;
      maxy = height - word.length;
      dy = 1;
      break;
    case 1: // right
      maxx = width - word.length;
      minx = 0;
      dx = 1;
      break;
    case 2: // up-right
      maxy = height - 1;
      miny = word.length - 1;
      dy = -1;
      maxx = width - word.length;
      minx = 0;
      dx = 1;
      break;
    case 3: // down-right
      miny = 0;
      maxy = height - word.length;
      dy = 1;
      maxx = width - word.length;
      minx = 0;
      dx = 1;
      break;
    default: /* NOTREACHED */
      break;
  }
  return {
    maxx: maxx,
    maxy: maxy,
    minx: minx,
    miny: miny,
    dx: dx,
    dy: dy
  }
}

const res = wordsearch(['dog', 'cat', 'Tes', 'book', 'catepaer', 'book', 'book'], 6, 6, 1, 2, true);

console.log(res);

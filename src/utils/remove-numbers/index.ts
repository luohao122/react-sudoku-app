import global from "global";
import { Grid } from "typings";
import { copyGrid, getRandomIndex, solveGrid } from "utils";

/**
 * Removes numbers from a full grid to create a Sudoku puzzle
 * @param grid 9x9 Sudoku Grid
 * @param attempts number of attempts to solve (higher means more difficult) - default 5
 * @returns
 */
function removeNumbers(grid: Grid, attempts = 5): Grid {
  while (attempts > 0) {
    let row = getRandomIndex();
    let col = getRandomIndex();

    while (grid[row][col] === 0) {
      row = getRandomIndex();
      col = getRandomIndex();
    }

    const backup = grid[row][col];
    grid[row][col] = 0;

    const gridCopy = copyGrid(grid);

    global.counter = 0;
    solveGrid(gridCopy);

    if (global.counter !== 1) {
      grid[row][col] = backup;
      attempts--;
    }
  }
  return grid;
}

export default removeNumbers;

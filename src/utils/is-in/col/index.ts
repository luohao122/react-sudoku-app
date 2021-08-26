import { Grid, Numbers } from "typings";

interface IInput {
  grid: Grid;
  col: number;
  value: Numbers;
}

/**
 * A function that returns true/false if the value is already being used in the current grid column
 * @param input object with 9x9 Sudoku grid, column index and value
 * @returns boolean
 */

function isInCol({ grid, col, value }: IInput): boolean {
  for (let i = 0; i < 9; i++) {
    if (value === grid[i][col]) return true;
  }
  return false;
}

export default isInCol;

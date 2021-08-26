import { Grid, Numbers } from "typings";

interface IInput {
  grid: Grid;
  row: number;
  value: Numbers;
}

/**
 * A function that returns true/false if the value is already being used in the current grid row
 * @param input object with 9x9 Sudoku grid, row index and value
 * @returns boolean
 */

function isInRow({ grid, row, value }: IInput): boolean {
  return grid[row].includes(value);
}

export default isInRow;

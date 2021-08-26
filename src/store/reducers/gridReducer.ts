import { BlockCoords, Grid } from "typings";
import { Action } from "../actions";
import { ActionType } from "../action-types";
import { compareArrays, copyGrid, createFullGrid, removeNumbers } from "utils";

interface GridState {
  challengeGrid?: Grid;
  selectedBlock?: BlockCoords;
  solvedGrid?: Grid;
  workingGrid?: Grid;
}

const initialState: GridState = {};

function reducer(state: GridState = initialState, action: Action) {
  switch (action.type) {
    case ActionType.CREATE_GRID:
      const solvedGrid = createFullGrid();
      const gridCopy = copyGrid(solvedGrid);
      const challengeGrid = removeNumbers(gridCopy);
      const workingGrid = copyGrid(challengeGrid);
      return {
        ...state,
        challengeGrid,
        solvedGrid,
        workingGrid,
      };
    case ActionType.SELECT_BLOCK:
      return {
        ...state,
        selectedBlock: action.payload,
      };
    case ActionType.FILL_BLOCK:
      if (state.workingGrid && state.solvedGrid) {
        if (
          state.solvedGrid[action.payload.coords[0]][
            action.payload.coords[1]
          ] !== action.payload.value
        ) {
          alert("Incorrect Option!");
          return state;
        }
        state.workingGrid[action.payload.coords[0]][action.payload.coords[1]] =
          action.payload.value;
        if (compareArrays(state.workingGrid, state.solvedGrid)) {
          alert("Completed!");
        }
        return { ...state, workingGrid: [...state.workingGrid] as Grid };
      }
      return state;
    default:
      return state;
  }
}

export default reducer;

import { BlockCoords, Numbers } from "typings";
import { ActionType } from "../action-types";
import {
  CreateGridAction,
  FillBlockAction,
  SelectBlockAction,
} from "../actions";

export const createGrid = (): CreateGridAction => {
  return {
    type: ActionType.CREATE_GRID,
  };
};

export const selectBlock = (coords: BlockCoords): SelectBlockAction => {
  return {
    type: ActionType.SELECT_BLOCK,
    payload: coords,
  };
};

export const fillBlock = (value: Numbers, coords: BlockCoords): FillBlockAction => {
  return {
    type: ActionType.FILL_BLOCK,
    payload: {
      value,
      coords
    },
  };
};

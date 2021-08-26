import { BlockCoords, Numbers } from "typings";
import { ActionType } from "../action-types";

export interface CreateGridAction {
  type: ActionType.CREATE_GRID;
}

export interface SelectBlockAction {
  type: ActionType.SELECT_BLOCK;
  payload: BlockCoords;
}

export interface FillBlockAction {
  type: ActionType.FILL_BLOCK;
  payload: {
    value: Numbers;
    coords: BlockCoords;
  };
}

export type Action = CreateGridAction | SelectBlockAction | FillBlockAction;

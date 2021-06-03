import { Dispatch } from "redux";
import { Action } from "../actions";
import { ActionType } from '../action-types';
import { saveCells } from '../action-creators';
import { RootState } from "../reducers";

export const persistMiddleware = ({
  dispatch, 
  getState
}: {
  dispatch: Dispatch<Action>; 
  getState: () => RootState 
}) => {
  let timer: any;
  return (next: (action: Action) => void) => {
    return (action: Action) => {
      next(action);

      if ([
        ActionType.MOVE_CELL, 
        ActionType.UPDATE_CELL, 
        ActionType.INSERT_CELL_AFTER, 
        ActionType.DELETE_CELL
      ].includes(action.type)
      ) {
        /* 
        we wired up saveCells as if it was an action creater with redux thunk. We are immediate invodking that fuction with dispatch and getState
        we also need to add some debouncing logic so that every key press does not save cell
        */
       if (timer) {
         clearTimeout(timer);
       } 
       timer = setTimeout(() => {
          saveCells()(dispatch, getState )
       }, 250);
        
      }
    };
  };
};
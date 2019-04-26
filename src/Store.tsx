import React from "react";

import {IState, IAction} from './interfaces'

const initialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favourites: [...state.favourites, action.payload] };
    default:
      return state;
  }
}

interface Props {
  children: React.ReactNode;
}

export function StoreProvider({ children }: Props): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  console.log(state)

  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}

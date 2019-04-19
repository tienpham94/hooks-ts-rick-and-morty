import React from "react";

interface IState {
  episodes: [];
  favourites: [];
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = React.createContext<IState>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATE":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

interface Props {
  children: React.ReactNode;
}

export function StoreProvider({ children }: Props): JSX.Element {
  return <Store.Provider value={initialState}>{children}</Store.Provider>;
}

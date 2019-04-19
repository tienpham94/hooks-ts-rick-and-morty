import React from "react";

interface IState {
  episodes: [];
  favourites: [];
}

const initialState: IState = {
  episodes: [],
  favourites: []
};

export const Store = React.createContext<IState>(initialState);

function reducer(state, action) {}

interface Props {
  children: React.ReactNode;
}

export function StoreProvider({ children }: Props): JSX.Element {
  return <Store.Provider value={initialState}>{children}</Store.Provider>;
}

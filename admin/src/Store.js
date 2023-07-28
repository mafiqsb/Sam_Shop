import { createContext, useReducer } from 'react';

const Store = createContext();

const initialState = {};

const reducer = (state, action) => {};

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

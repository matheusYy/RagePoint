import { createContext, useReducer } from "react";
import { reducer } from "./actions";
import { dataCalender } from './data'
import { useFactory } from "./useFactory";


type CalenderProviderTypes = {
  children: React.ReactNode;
}

export const CalenderContex = createContext<Array<any>>([]);

export const CalenderProvider = ({ children }: CalenderProviderTypes) => {
  const [state, dispatch] = useReducer(reducer, dataCalender);
  const action = useFactory(dispatch)
 return (
  <CalenderContex.Provider value={[state, action]}>
    {children}
  </CalenderContex.Provider>
 )
}

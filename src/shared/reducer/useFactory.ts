import { useContext, useReducer } from 'react'
import { CalenderContex } from './reducer'
import { dataCalender } from './data'
import { reducer } from './actions'
import * as ActionTypes from './types'
import { FactoryTypes } from '../types/reducerData'
export const useFactory = (dispatch: any): FactoryTypes => {
 return {
  IncrementState: () => dispatch({ type: ActionTypes.CALENDER_INCREMENT }),
  DecrementState: () => dispatch({ type: ActionTypes.CALENDER_DECREMENT })
 }
}
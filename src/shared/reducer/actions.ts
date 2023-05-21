import * as types from './types'
import { dataCalender } from './data'
import { ActionAsyncStorage } from 'next/dist/client/components/action-async-storage'
import { Reducer, ReducerAction } from 'react'
import { reducerState } from '../types/reducerData'

type stateTypes = {
  data: number
}
export const reducer = (state: stateTypes, actions: any) => {
 const { type, payload } = actions;
 switch(type) {
  case types.CHANGE_CALENDER:  
   return {
    ...state,
   }
   case types.CALENDER_INCREMENT: {
    return {
     ...state,
     data: state.data++
    }
   }
   case types.CALENDER_DECREMENT: {
     return {
      ...state,
      data: state.data--
     }
   }
   default: {
    return state;
   }
 }
}
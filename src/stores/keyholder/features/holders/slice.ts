import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit'

import type { IHolderState, TKeyHolderValue } from './types'

const initialState: IHolderState = {
  value: 0
}

export const holdersSlice = createSlice({
  name: 'holders',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<TKeyHolderValue>) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = holdersSlice.actions

export default holdersSlice.reducer
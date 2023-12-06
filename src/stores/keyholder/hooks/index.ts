import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { KeyholderAppDispatch, KeyholderRootState } from '../types'

export const useKeyHolderDispatch: () => KeyholderAppDispatch = useDispatch;
export const useKeyHolderSelector: TypedUseSelectorHook<KeyholderRootState> = useSelector;

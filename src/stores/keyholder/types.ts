import keyHolderStore from "."

export type KeyholderRootState = ReturnType<typeof keyHolderStore.getState>
export type KeyholderAppDispatch = typeof keyHolderStore.dispatch
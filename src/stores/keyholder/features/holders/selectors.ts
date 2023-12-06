import { KeyholderRootState } from "../../types";

export const selectKeyHolderValue = (state: KeyholderRootState) => state.holders.value;

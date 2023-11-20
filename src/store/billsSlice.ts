import { createSlice } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';

type BillItem = {
  id: string;
  dueDate: string;
  councilName: string;
  description: string;
  amount: number;
};
type BillState = {
  bills: BillItem[];
  loading: boolean;
  hasErrors: boolean;
};
const initialState: BillState = {
  loading: false,
  hasErrors: false,
  bills: [],
};
export const billsSlice = createSlice({
  name: 'bills',
  initialState: initialState,
  reducers: {
    getBills: (state) => {
      state.loading = true;
    },
    getBillsSuccess: (state, action) => {
      state.bills = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getBillsFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { getBills, getBillsSuccess, getBillsFailure } =
  billsSlice.actions;
export const billsSelector = (state: { bills: BillState }) => state.bills;
export default billsSlice.reducer;

export function fetchBills() {
  return async (dispatch: Dispatch) => {
    dispatch(getBills());
    try {
      const response = await fetch('http://localhost:3000/Bills');
      const data = await response.json();
      dispatch(getBillsSuccess(data));
    } catch (error) {
      dispatch(getBillsFailure());
    }
  };
}

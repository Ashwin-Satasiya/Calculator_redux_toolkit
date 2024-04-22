import { configureStore, createSlice } from "@reduxjs/toolkit";

const calcSlice = createSlice({
  name: "calculator",
  initialState: "",
  reducers: {
    clear: (state, action) => {
      return (state = "");
    },
    backspace: (state, action) => {
      const stringState = String(state);
      return stringState.slice(0, -1);
    },
    devide: (state, action) => {
      return (state += "/");
    },
    seven: (state, action) => {
      return (state += "7");
    },
    eight: (state) => {
      return (state += "8");
    },
    multiplication: (state) => {
      return (state += "*");
    },
    nine: (state) => {
      return (state += "9");
    },
    four: (state) => {
      return (state += "4");
    },
    five: (state) => {
      return (state += "5");
    },
    six: (state) => {
      return (state += "6");
    },
    minus: (state) => {
      return (state += "-");
    },
    one: (state) => {
      return (state += "1");
    },
    two: (state) => {
      return (state += "2");
    },
    three: (state) => {
      return (state += "3");
    },
    plus: (state) => {
      return (state += "+");
    },
    square: (state) => {
      return Math.pow(state, 2);
    },
    zero: (state) => {
      return (state += "0");
    },
    point: (state) => {
      return (state += ".");
    },
    evaluate: (state) => {
      return eval(state);
    },
  },
});

const calcStore = configureStore({
  reducer: {
    calcValue: calcSlice.reducer,
  },
});

export default calcStore;

export const calcActions = calcSlice.actions;

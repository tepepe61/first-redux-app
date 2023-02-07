import { createStore } from "redux";

const reduxTest = () => {
  // reduxで必要なもの
  // actions;
  const increment = () => {
    return {
      type: "INCREMENT",
    };
  };

  const decrement = () => {
    return {
      type: "DECREMENT",
    };
  };

  // reducer;
  const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
      case "DECREMENT":
        return state - 1;
    }
  };

  // store;
  let store = createStore(counterReducer);

  // consoleに出力
  store.subscribe(() => console.log(store.getState()));

  // dispatch
  store.dispatch(increment());
  store.dispatch(increment());
  store.dispatch(decrement());
};

export default reduxTest;

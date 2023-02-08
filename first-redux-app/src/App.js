import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, login } from "./actions";

function App() {
  // 1. stateって引数に書けばproviderでstoreを提供してるからどこからでも参照できるのか?
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>hello redux</h1>
      <h3>カウント:{counter}</h3>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      {isLogin ? <h3>ログインなう!</h3> : <h3>ログインしてね</h3>}
      <button onClick={() => dispatch(login())}>ログインorログアウト</button>
    </div>
  );
}

export default App;

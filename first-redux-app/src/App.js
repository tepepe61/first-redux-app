import logo from "./logo.svg";
import "./App.css";
import { useSelector } from "react-redux";

function App() {
  // 1. stateって引数に書けばproviderでstoreを提供してるからどこからでも参照できるのか?
  const counter = useSelector((state) => state.counter);
  const isLogin = useSelector((state) => state.isLogin);

  return (
    <div className="App">
      <h1>hello redux</h1>
      <h3>カウント:{counter}</h3>
      {isLogin ? <h3>ログインなう!</h3> : <h3>ログインしてね</h3>}
    </div>
  );
}

export default App;

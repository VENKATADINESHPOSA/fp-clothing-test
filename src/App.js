import HomePage from "./pages/homepage/homepage.component";
import { Route, Link, Switch } from "react-router-dom";
import "./App.css";

const HatsPage = (props) => {
  console.log(props);
  return (
    <>
      <Link to="/">HomePage</Link>
      <h1>HATS PAGE</h1>
      <button onClick={() => props.history.push("/")}>HomePage</button>
    </>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

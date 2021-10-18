import { Route, Switch } from "react-router-dom";
import Recipe from "./components/Recipe";
import "./App.css";
import HomePage from "./components/HomePage";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />

        <Route path="/recipe/:id" component={Recipe} />

        <Route>
          <div>Not found !!</div>
        </Route>
      </Switch>
    </>
  );
}

export default App;

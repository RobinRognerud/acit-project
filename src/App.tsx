import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import Music from "./components/Music/Music";
import Bar from "./components/Bar/Bar";
import Quote from "./components/Quote/Quote";
import Chart from "./components/Chart/Chart";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Bar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/music" component={Music} />
        <Route exact path="/quote" component={Quote} />
        <Route exact path="/chart" component={Chart} />
      </Switch>
    </div>
  );
}

export default App;

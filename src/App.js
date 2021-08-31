import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


import { Provider } from "react-redux";
import modals from "./components/Modals.js";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Switch>
      <Route exact path="/" component={modals} />
     
     
    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;

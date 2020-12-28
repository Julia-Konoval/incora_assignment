import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/UserList";
import User from "./components/User";
//style
import "./App.css"

function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/user/:id" component={User} />
      </Switch>
    </Router>
    </div>
  );
}
export default App;

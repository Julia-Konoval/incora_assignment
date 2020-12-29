import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/UserList";
import PostList from "./components/PostList";
import UserPosts from "./components/UserPosts";
//style
import "./App.css";



function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={UserList}/>
        <Route exact path="/posts/:user_id" component={UserPosts}/>
      </Switch>
    </Router>
    </div>
  );
}
export default App;

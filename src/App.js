import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/UserList";
import PostList from "./components/PostList";
import UserPosts from "./components/UserPosts";
import Post from "./components/Post";
//style
import "./App.css";



function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={UserList}/>
        <Route exact path="/posts/:user_id" component={UserPosts}/>
        <Route exact path="/info/:post_id" component={Post}/>
      </Switch>
    </Router>
    </div>
  );
}
export default App;

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./components/UserList";
import Post from "./components/Post";
import UserPosts from "./components/UserPosts";
import Form from "./components/Form";
//style
import "./App.css";



function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={UserList}/>
        <Route exact path="/posts/:user_id" component={UserPosts}/>
        <Route exact path="/comments/:post_id" component={Post}/>
        <Route exact path="/newpost" component={Form}/>
      </Switch>
    </Router>
    </div>
  );
}
export default App;

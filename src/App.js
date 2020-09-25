// Modules: 
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

//Views
import Login__View from './views/login/Login__View';


function App() {
  return (
    <Router>
      <section className="App">
        <Switch>
          <Route path="/" exact component={Login__View} />
          <Route path="/posts"  component={Component2} />
        </Switch>
      </section>
    </Router>
  );
}

function Component1(){
  return(
    <p>Hi</p>
  )
}

function Component2(){
  return(
    <p>Hi2</p>
  )
}
export default App;

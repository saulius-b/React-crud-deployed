import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Todo from '../src/Components/Todo'
import SignIn from '../src/Components/SignIn'

function App() {
  return (
    <Router>
      <div className='mainDiv'>
        <h3>Todo app</h3>
        <Switch>
          <Route path='/todo'>
            <Todo />
          </Route>
          <Route path='/'>
            <SignIn />
          </Route>
        </Switch>
      </div>
      <div className='footer'>
        Created by Saulius Balčiūnas
      </div>
    </Router>
  );
}

export default App

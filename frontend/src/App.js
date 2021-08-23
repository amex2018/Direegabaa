import './App.css';
import HomePage from './Page/HomePage';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signin from './Page/Signin';
function App() {
  return (
 <>
 <Router>
 <Switch>
 <Route path="/" exact component={HomePage} />
 <Route path="/login" component={Signin} />
 </Switch>
 </Router>
 
 </>
  );
}

export default App;

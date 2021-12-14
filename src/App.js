
import './App.css';
import Store from './Store';

import Login from "./components/login/Login";
import Input from "./components/inputProps/input";
import Home from "./components/homePage/home"
import HomeSecritery from './components/Secritery/homeSecritery';
import Signup from './components/signUp/signup';
import CalendarApp from './components/calendar/calendar'


import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App">
         <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
          מינהל קהילתי אשכולות
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link home" aria-current="page" href="/home">דף הבית</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href='/Login'>התחברות</a>
              </li>
              <li class="nav-item">
                <a class="nav-link add" href='/HomeSecritery' >דף בית למזכירה</a>
              </li>
              <li class="nav-item">
                <a class="nav-link add" href='/Input' >הוספת פעילות</a>
              </li>
              <li class="nav-item">
                <a class="nav-link add" href='/CalendarApp' > לוח שנה</a>
              </li> 
            </ul>
          </div>

        </div>
      </nav>  

      <Provider store={Store}>
        <Router>
          <Switch>
            <Route path="/Login">
              <Login />
            </Route>
            <Route path='/HomeSecritery'>
              <HomeSecritery />
            </Route>
              <Route path='/Input'>
              <Input />
            </Route>  
             <Route path='/home'>
              <Home />
            </Route> 
             <Route path='/signup'>
              <Signup />
            </Route> 
            <Route path="/" >
              <Home />
            </Route>
          </Switch>
        </Router>
      </Provider>

    </div>
  );
}
export default App;

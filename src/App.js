import './App.css'
import {Home} from './Home';
import {Employee} from './Employee';
import {BrowserRouter,Route,Switch} from 'react-router-dom'; 
import React from "react";

function App() {
  return (
    <BrowserRouter>
    <div className="App container">
      <h3 className="d-flex justify-content-center m-3  text-primary">
        PENTRON TECHNOLOGY PVT LTD
      </h3>
      {
      <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light navbarbg">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item active">
        <a className="nav-link" href="/home">Home <i class="fas fa-home"></i> <span className="sr-only">(current)</span></a></li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/home" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Menu <i class="fas fa-list"></i></a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item dropdown-outline-primary" href="/employee">Employee<i class="fas fa-user"></i></a>
          <a className="dropdown-item" href="/department">Department<i class="fas fa-university"></i></a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/home">Home<i class="fas fa-home"></i></a>
        </div>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2 text-black" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0 text-white" type="submit">Sign-In</button>
    </form>
  </div>
</nav>
    </React.Fragment>
}
      <Switch>
        <Route path='/home' component={Home}/>
        <Route path='/employee' component={Employee}/>
        </Switch>
        

        <ul class="pagination justify-content-end of page">
  <li class="page-item"><a class="page-link" href="*">Previous</a></li>
  <li class="page-item"><a class="page-link" href="/home">1</a></li>
  <li class="page-item"><a class="page-link" href="*">Next</a></li>
</ul> 
</div>
 </BrowserRouter>

          );
};

export default App;



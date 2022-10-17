import React,{Component} from 'react';
import logo from './logo.gif';

export class Home extends Component{
    
   render(){
        return(

 <div class="container"> 
  <h1>Real Time Data Monitoring System <i class="fas fa-database" ></i></h1>
  <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <p>PENTRON&nbsp; TECHNOLOGY&nbsp; PVT &nbsp;LTD </p>
          <a
            className="App-link"
            href="https://pentron.in"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Click to Know About Us
          </a> 
        </header>
</div>
             
              
       
    )}
}
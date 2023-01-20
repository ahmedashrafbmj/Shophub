import React from 'react'
import Footer from './Components/Main/Footer'
import { Provider } from 'react-redux';
import Welcome from './Components/Welcome/Welcome';
import Add from './Components/Add'
import Login from './Components/Login/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './Components/Main/Main.css'
import './Components/Welcome/Welcome.css'

import './Components/Login/Login.css'
import Router from './Components/Router';
import Register from './Components/Register/Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import store from './store/store';
import "./index.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import AppBlockingIcon from '@mui/icons-material/AppBlocking';







function App(){

return(

<>


<br />
<Provider store={store}>
<BrowserRouter>


<Router />

    
    </BrowserRouter>
    <div class="row" style={{ background: "black", color: "white", height: "50vh", fontWeight: "bold", textAlign: "center" }}>
                <br />
                <div class="col-lg-6 col-md-6 mt-5">
                    <h4>Shop Hub</h4>
                    <h6>We brought new and easy concept for SELLERS & BUYERS  <br />
                        Now you  can Purchase From your own nearest and self <br />thought willingly market just with  a click  you can <br /> visit the any shop of any market at 13karachi  </h6>
                </div>
                <div class="col-lg-6 col-md-6 mt-5">
                    <h1>Contact Us</h1>
                    <a className='anchor' style={{ cursor: "pointer", color: "white" }} href='#'><FacebookIcon /></a>
                    <a className='anchor' style={{ cursor: "pointer", color: "white" }} href='#'><InstagramIcon /></a>
                    <a className='anchor' style={{ cursor: "pointer", color: "white" }} href='#'><AppBlockingIcon /></a>
                </div>


            </div>

    </Provider>
    
</>


)

}

export default App;
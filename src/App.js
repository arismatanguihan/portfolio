import React from 'react';
import { BrowserRouter, Link, Route, Redirect } from 'react-router-dom'
import './App.css';
import './animate.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Skill from './components/Skill';

function App() {


  function display() {
      return (
        <React.Fragment>
     
              <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-secondary sticky-top m-0">
                <Link className="navbar-brand" to="/home">
                <h3 id="headerLogo">Aris Matanguihan</h3>
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div id="navbar-nav" className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item" id="navBar">
                        <Redirect exact from="/" className="nav-link" to="/home">
                        Home
                        </Redirect>
                      </li>
                        <li className="nav-item" id="navBar">
                        <Link from="/" className="nav-link" to="/home">
                        Home
                        </Link>
                      </li>
                      <li className="nav-item" id="navBar">
                        <Link  className="nav-link" to="/portfolio">
                        Projects
                        </Link>
                      </li>
                      <li className="nav-item" id="navBar">
                        <Link  className="nav-link" to="/about">
                        About
                        </Link>
                      </li>
                      <li className="nav-item" id="navBar">
                        <Link className="nav-link" to="/skill">
                        Skills
                        </Link>
                      </li>
                      <li className="nav-item" id="navBar">
                        <Link className="nav-link" to="/contact">
                        Contact
                        </Link>
                      </li>
                    </ul>
                </div>
               </nav>

               <div>
                    <Route path="/home" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/portfolio" exact component={Portfolio}/>
                    <Route path="/skill" exact component={Skill}/>
               </div>
               <footer className="footer footer-page bg-secondary text-white">
                <div className="col-12 row mr-0 mx-auto text-center p-3">
                  <div className="col-md-4 col-lg-4 mt-5">
                    <p><i className="fas fa-map-marker-alt"></i> Las Piñas City, Philippines</p>
                    <p><i className="fas fa-phone"></i> +639281061397</p>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-5">
                    <p className="text-center">
                      Aris Matanguihan | Zuitt Coding Bootcamp
                    </p>
                    <div className="text-center">
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="btn btn-secondary fab fa-facebook-f" id="socialIcon"></i></a>
                      <a href="https://github.com/arismatanguihan" target="_blank" rel="noopener noreferrer"><i className="btn btn-secondary fab fa-github" id="socialIcon"></i></a>
                      <a href="https://www.linkedin.com/in/aris-kristian-matanguihan-978a0862" target="_blank" rel="noopener noreferrer"><i className="btn btn-secondary fab fa-linkedin-in" id="socialIcon"></i></a>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4 mt-5">
                    <p><i className="fas fa-envelope"></i> Email: aris.matanguihan@gmail.com</p>
                  </div>
                </div>

                <div className="row mr-0 mx-auto">
                  <div className="col-12 col-md-12 col-lg-12 mt-4">
                    <hr className="mx-auto line6"/>
                    <p className="text-center">
                      © 2019. All Rights Reserved. Designed by Aris Matanguihan.
                    </p>
                  </div>
                </div>
               </footer> 
         
        </React.Fragment>
      );
  }

  return (
    <BrowserRouter>
          <div className="App container-fluid">
            <div className="row">
              <div className="col-12 col-md-12 offset-md-0 p-0">
                { display() }
              </div>
             </div>
           </div>
    </BrowserRouter>
  );

}

export default App;

import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';


class Projects extends Component {
	constructor(props){
		super(props)
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		if(this.state.activeTab === 0) {
			return(
				<div className="container mx-auto text-center col-10 col-md-10 col-lg-10">
				<div className="row mx-0 pb-5 mt-5 mx-auto text-center justify-content-center">

					{/*<div className="card-group col-10 col-md-10 col-lg-10 mt-3 my-5 mx-auto text-center p-0">*/}
					
					<div className="card card-custom d-inline-block mx-auto col-sm-4 col-md-4 col-lg-4 p-3 border-0" id="parent_div2">
						  <img src={require("../image/cap1_1.png")} className="card-img-top" alt="..."/>
						  <div className="card-body text-center text-dark">
						    <h5 className="card-title">The World of Final Fantasy</h5>
						    <p className="card-text">Developed a responsive gaming website about the Final Fantasy series using HTML, CSS3, Bootstrap and Javascript.</p>
						    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">More Info</button>
						    	<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									  <div className="modal-dialog modal-dialog-centered" role="document">
									    <div className="modal-content">
									      <div className="modal-header">
									        <h4 className="modal-title" id="exampleModalLabel">The World of Final Fantasy</h4>
									        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
									      </div>
									      <div className="modal-body">
									      		<div id="carousel1" className="carousel slide" data-ride="carousel">
													  <ol className="carousel-indicators">
													    <li data-target="#carousel1" data-slide-to="0" className="active"></li>
													    <li data-target="#carousel1" data-slide-to="1"></li>
													    <li data-target="#carousel1" data-slide-to="2"></li>
													  </ol>
													  <div className="carousel-inner">
														    <div className="carousel-item active">
														      <img className="d-block w-100" src={require("../image/cap1_1.png")} alt="First slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap1_2.png")} alt="Second slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap1_3.png")} alt="Third slide"/>
														    </div>
													  </div>
													  <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
													    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
													    <span className="sr-only">Previous</span>
													  </a>
													  <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
													    <span className="carousel-control-next-icon" aria-hidden="true"></span>
													    <span className="sr-only">Next</span>
													  </a>
												</div>
									         <p className="mt-3">Created a responsive static website about the Final Fantasy video game series.</p>
									         <p>Environment: HTML, CSS, Javascript</p>
									         <p>Tools: Sublime Text, Git</p>
									      </div>
									      <div className="modal-footer text-center mx-auto">
									        <a href="https://arismatanguihan.github.io/capstone1" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-success text-center">Go to Website</button></a>
									        <button type="button" className="btn btn-secondary text-center" data-dismiss="modal">Close</button>
									      </div>
									    </div>
									  </div>
								</div>
						  </div>
					</div>


					<div className="card card-custom d-inline-block mx-auto col-sm-4 col-md-4 col-lg-4 p-3 border-0" id="parent_div2">
						  <img src={require("../image/cap2_1.png")} className="card-img-top" alt="..."/>
						  <div className="card-body text-center text-dark">
						    <h5 className="card-title">Booking Request System</h5>
						    <p className="card-text">Developed a responsive asset management system about Books using MySQL, Java, Javascript and ReactJS.</p>
						    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal2">More Info</button>
						    	<div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									  <div className="modal-dialog modal-dialog-centered" role="document">
									    <div className="modal-content">
									      <div className="modal-header">
									        <h4 className="modal-title" id="exampleModalLabel">Booking Request System</h4>
									        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
									      </div>
									      <div className="modal-body">
									      		<div id="carousel2" className="carousel slide" data-ride="carousel">
													  <ol className="carousel-indicators">
													    <li data-target="#carousel2" data-slide-to="0" className="active"></li>
													    <li data-target="#carousel2" data-slide-to="1"></li>
													    <li data-target="#carousel2" data-slide-to="2"></li>
													  </ol>
													  <div className="carousel-inner">
														    <div className="carousel-item active">
														      <img className="d-block w-100" src={require("../image/cap2_1.png")} alt="First slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap2_2.png")} alt="Second slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap2_3.png")} alt="Third slide"/>
														    </div>
													  </div>
													  <a className="carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
													    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
													    <span className="sr-only">Previous</span>
													  </a>
													  <a className="carousel-control-next" href="#carousel2" role="button" data-slide="next">
													    <span className="carousel-control-next-icon" aria-hidden="true"></span>
													    <span className="sr-only">Next</span>
													  </a>
												</div>
									         <p className="mt-3">Created a responsive request system website for books using CRUD repository, RESTful APIs and Spring framework. User can send a request and admin can accept or decline the request.</p>
									         <p>Environment: HTML, CSS, Javascript, Java, ReactJS</p>
									         <p>Tools: Sublime Text, Node.js, Spring, IntelliJ, XAMPP, Heroku</p>
									         <p>Database: MariaDB, MySQL</p>
									      </div>
									      <div className="modal-footer text-center mx-auto">
									        <a href="https://bookrequestsystem.herokuapp.com" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-success text-center">Go to Website</button></a>
									        <button type="button" className="btn btn-secondary text-center" data-dismiss="modal">Close</button>
									      </div>
									    </div>
									  </div>
								</div>
						  </div>
					</div>

					<div className="card card-custom d-inline-block mx-auto col-sm-4 col-md-4 col-lg-4 p-3 border-0" id="parent_div3">
						  <img src={require("../image/cap3_1.png")} className="card-img-top" alt="..."/>
						  <div className="card-body text-center text-dark">
						    <h5 className="card-title">Online Hotel Booking System</h5>
						    <p className="card-text">Developed a responsive online hotel booking system using MongoDB, Java, Javascript and ReactJS.</p>
						    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal3">More Info</button>
						    	<div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									  <div className="modal-dialog modal-dialog-centered" role="document">
									    <div className="modal-content">
									      <div className="modal-header">
									        <h4 className="modal-title" id="exampleModalLabel">Online Hotel Booking System</h4>
									        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
									      </div>
									      <div className="modal-body">
									      		<div id="carousel3" className="carousel slide" data-ride="carousel">
													  <ol className="carousel-indicators">
													    <li data-target="#carousel3" data-slide-to="0" className="active"></li>
													    <li data-target="#carousel3" data-slide-to="1"></li>
													    <li data-target="#carousel3" data-slide-to="2"></li>
													  </ol>
													  <div className="carousel-inner">
														    <div className="carousel-item active">
														      <img className="d-block w-100" src={require("../image/cap3_1.png")} alt="First slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap3_2.png")} alt="Second slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap3_3.png")} alt="Third slide"/>
														    </div>
													  </div>
													  <a className="carousel-control-prev" href="#carousel3" role="button" data-slide="prev">
													    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
													    <span className="sr-only">Previous</span>
													  </a>
													  <a className="carousel-control-next" href="#carousel3" role="button" data-slide="next">
													    <span className="carousel-control-next-icon" aria-hidden="true"></span>
													    <span className="sr-only">Next</span>
													  </a>
												</div>
									         <p className="mt-3">Created a responsive online hotel booking system using RESTful APIs and Spring framework. User can send a booking request and admin can approve the request.</p>
									         <p>Environment: HTML, CSS, Javascript, Java, ReactJS</p>
									         <p>Tools: Sublime Text, Node.js, Spring, IntelliJ, Robo3T, Heroku</p>
									         <p>Database: MongoDB, MongoDB Atlas</p>
									      </div>
									      <div className="modal-footer text-center mx-auto">
									        <a href="https://onlinehotelbooking.herokuapp.com" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-success text-center">Go to Website</button></a>
									        <button type="button" className="btn btn-secondary text-center" data-dismiss="modal">Close</button>
									      </div>
									    </div>
									  </div>
								</div>
						  </div>
					</div>


					<div className="card card-custom d-inline-block mx-auto col-sm-4 col-md-4 col-lg-4 p-3 border-0" id="parent_div2">
						  <img src={require("../image/cap4_1.png")} className="card-img-top" alt="..."/>
						  <div className="card-body text-center text-dark">
						    <h5 className="card-title">Javascript Bird Game</h5>
						    <p className="card-text">Developed a simple bird game using plain Javascript.</p>
						    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal4">More Info</button>
						    	<div className="modal fade" id="exampleModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									  <div className="modal-dialog modal-dialog-centered" role="document">
									    <div className="modal-content">
									      <div className="modal-header">
									        <h4 className="modal-title" id="exampleModalLabel">Javascript Bird Game</h4>
									        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
									      </div>
									      <div className="modal-body">
									      		<div id="carousel4" className="carousel slide" data-ride="carousel">
													  <ol className="carousel-indicators">
													    <li data-target="#carousel4" data-slide-to="0" className="active"></li>
													    <li data-target="#carousel4" data-slide-to="1"></li>
													  </ol>
													  <div className="carousel-inner">
														    <div className="carousel-item active">
														      <img className="d-block w-100" src={require("../image/cap4_1.png")} alt="First slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap4_2.png")} alt="Second slide"/>
														    </div>
													  </div>
													  <a className="carousel-control-prev" href="#carousel4" role="button" data-slide="prev">
													    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
													    <span className="sr-only">Previous</span>
													  </a>
													  <a className="carousel-control-next" href="#carousel4" role="button" data-slide="next">
													    <span className="carousel-control-next-icon" aria-hidden="true"></span>
													    <span className="sr-only">Next</span>
													  </a>
												</div>
									         <p className="mt-3">Created a simple Bird Game where the player controls the bird while avoiding obstacles as much as possible.</p>
									         <p>Environment: HTML, CSS, Javascript</p>
									         <p>Tools: Sublime Text, Git</p>
									      </div>
									      <div className="modal-footer text-center mx-auto">
									        <a href="https://arismatanguihan.github.io/jsgame/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-success text-center">Go to Website</button></a>
									        <button type="button" className="btn btn-secondary text-center" data-dismiss="modal">Close</button>
									      </div>
									    </div>
									  </div>
								</div>
						  </div>
					</div>
				</div>
			</div>
			)


		} else if (this.state.activeTab === 1) {
			return (
				<div className="container mx-auto text-center col-10 col-md-10 col-lg-10">
					<div className="row mx-0 pb-5 mt-5 mx-auto text-center justify-content-center">
					
					<div className="card card-custom d-inline-block mx-1 col-sm-4 col-md-4 col-lg-4 p-0 border-0" id="parent_div2">
						  <img src={require("../image/cap2_1.png")} className="card-img-top" alt="..."/>
						  <div className="card-body text-center text-dark">
						    <h5 className="card-title">Booking Request System</h5>
						    <p className="card-text">Developed a responsive asset management system about Books using MySQL, Java, Javascript and ReactJS.</p>
						    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal2">More Info</button>
						    	<div className="modal fade" id="exampleModal2" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									  <div className="modal-dialog modal-dialog-centered" role="document">
									    <div className="modal-content">
									      <div className="modal-header">
									        <h4 className="modal-title" id="exampleModalLabel">Booking Request System</h4>
									        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
									      </div>
									      <div className="modal-body">
									      		<div id="carousel2" className="carousel slide" data-ride="carousel">
													  <ol className="carousel-indicators">
													    <li data-target="#carousel2" data-slide-to="0" className="active"></li>
													    <li data-target="#carousel2" data-slide-to="1"></li>
													    <li data-target="#carousel2" data-slide-to="2"></li>
													  </ol>
													  <div className="carousel-inner">
														    <div className="carousel-item active">
														      <img className="d-block w-100" src={require("../image/cap2_1.png")} alt="First slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap2_2.png")} alt="Second slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap2_3.png")} alt="Third slide"/>
														    </div>
													  </div>
													  <a className="carousel-control-prev" href="#carousel2" role="button" data-slide="prev">
													    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
													    <span className="sr-only">Previous</span>
													  </a>
													  <a className="carousel-control-next" href="#carousel2" role="button" data-slide="next">
													    <span className="carousel-control-next-icon" aria-hidden="true"></span>
													    <span className="sr-only">Next</span>
													  </a>
												</div>
									         <p className="mt-3">Created a responsive request system website for books using CRUD repository, RESTful APIs and Spring framework. User can send a request and admin can accept or decline the request.</p>
									         <p>Environment: HTML, CSS, Javascript, Java, ReactJS</p>
									         <p>Tools: Sublime Text, Node.js, Spring, IntelliJ, XAMPP, Heroku</p>
									         <p>Database: MariaDB, MySQL</p>
									      </div>
									      <div className="modal-footer text-center mx-auto">
									        <a href="https://bookrequestsystem.herokuapp.com" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-success text-center">Go to Website</button></a>
									        <button type="button" className="btn btn-secondary text-center" data-dismiss="modal">Close</button>
									      </div>
									    </div>
									  </div>
								</div>
						  </div>
					</div>

					<div className="card card-custom d-inline-block mx-1 col-sm-4 col-md-4 col-lg-4 p-0 border-0" id="parent_div3">
						  <img src={require("../image/cap3_1.png")} className="card-img-top" alt="..."/>
						  <div className="card-body text-center text-dark">
						    <h5 className="card-title">Online Hotel Booking System</h5>
						    <p className="card-text">Developed a responsive online hotel booking system using MongoDB, Java, Javascript and ReactJS.</p>
						    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal3">More Info</button>
						    	<div className="modal fade" id="exampleModal3" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									  <div className="modal-dialog modal-dialog-centered" role="document">
									    <div className="modal-content">
									      <div className="modal-header">
									        <h4 className="modal-title" id="exampleModalLabel">Online Hotel Booking System</h4>
									        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
									      </div>
									      <div className="modal-body">
									      		<div id="carousel3" className="carousel slide" data-ride="carousel">
													  <ol className="carousel-indicators">
													    <li data-target="#carousel3" data-slide-to="0" className="active"></li>
													    <li data-target="#carousel3" data-slide-to="1"></li>
													    <li data-target="#carousel3" data-slide-to="2"></li>
													  </ol>
													  <div className="carousel-inner">
														    <div className="carousel-item active">
														      <img className="d-block w-100" src={require("../image/cap3_1.png")} alt="First slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap3_2.png")} alt="Second slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap3_3.png")} alt="Third slide"/>
														    </div>
													  </div>
													  <a className="carousel-control-prev" href="#carousel3" role="button" data-slide="prev">
													    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
													    <span className="sr-only">Previous</span>
													  </a>
													  <a className="carousel-control-next" href="#carousel3" role="button" data-slide="next">
													    <span className="carousel-control-next-icon" aria-hidden="true"></span>
													    <span className="sr-only">Next</span>
													  </a>
												</div>
									         <p className="mt-3">Created a responsive online hotel booking system using RESTful APIs and Spring framework. User can send a booking request and admin can approve the request.</p>
									         <p>Environment: HTML, CSS, Javascript, Java, ReactJS</p>
									         <p>Tools: Sublime Text, Node.js, Spring, IntelliJ, Robo3T, Heroku</p>
									         <p>Database: MongoDB, MongoDB Atlas</p>
									      </div>
									      <div className="modal-footer text-center mx-auto">
									        <a href="https://onlinehotelbooking.herokuapp.com" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-success text-center">Go to Website</button></a>
									        <button type="button" className="btn btn-secondary text-center" data-dismiss="modal">Close</button>
									      </div>
									    </div>
									  </div>
								</div>
						  </div>
					</div>
					</div>
				</div>
				)
		} else if (this.state.activeTab === 2) {
			return (
				<div className="container mx-auto text-center col-10 col-md-10 col-lg-10">
					<div className="row mx-0 pb-5 mt-5 mx-auto text-center justify-content-center">
					
					<div className="card card-custom d-inline-block mx-1 col-sm-4 col-md-4 col-lg-4 p-0 border-0" id="parent_div2">
						  <img src={require("../image/cap1_1.png")} className="card-img-top" alt="..."/>
						  <div className="card-body text-center text-dark">
						    <h5 className="card-title">The World of Final Fantasy</h5>
						    <p className="card-text">Developed a responsive gaming website about the Final Fantasy series using HTML, CSS3, Bootstrap and Javascript.</p>
						    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal">More Info</button>
						    	<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									  <div className="modal-dialog modal-dialog-centered" role="document">
									    <div className="modal-content">
									      <div className="modal-header">
									        <h4 className="modal-title" id="exampleModalLabel">The World of Final Fantasy</h4>
									        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
									      </div>
									      <div className="modal-body">
									      		<div id="carousel1" className="carousel slide" data-ride="carousel">
													  <ol className="carousel-indicators">
													    <li data-target="#carousel1" data-slide-to="0" className="active"></li>
													    <li data-target="#carousel1" data-slide-to="1"></li>
													    <li data-target="#carousel1" data-slide-to="2"></li>
													  </ol>
													  <div className="carousel-inner">
														    <div className="carousel-item active">
														      <img className="d-block w-100" src={require("../image/cap1_1.png")} alt="First slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap1_2.png")} alt="Second slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap1_3.png")} alt="Third slide"/>
														    </div>
													  </div>
													  <a className="carousel-control-prev" href="#carousel1" role="button" data-slide="prev">
													    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
													    <span className="sr-only">Previous</span>
													  </a>
													  <a className="carousel-control-next" href="#carousel1" role="button" data-slide="next">
													    <span className="carousel-control-next-icon" aria-hidden="true"></span>
													    <span className="sr-only">Next</span>
													  </a>
												</div>
									         <p className="mt-3">Created a responsive static website about the Final Fantasy video game series.</p>
									         <p>Environment: HTML, CSS, Javascript</p>
									         <p>Tools: Sublime Text, Git</p>
									      </div>
									      <div className="modal-footer text-center mx-auto">
									        <a href="https://arismatanguihan.github.io/capstone1" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-success text-center">Go to Website</button></a>
									        <button type="button" className="btn btn-secondary text-center" data-dismiss="modal">Close</button>
									      </div>
									    </div>
									  </div>
								</div>
						  </div>
					</div>


					</div>
				</div>
				)
		} else if (this.state.activeTab === 3) {
			return (
				<div className="container mx-auto text-center col-10 col-md-10 col-lg-10">
					<div className="row mx-0 pb-5 mt-5 mx-auto text-center justify-content-center">
					
					<div className="card card-custom d-inline-block mx-1 col-sm-4 col-md-4 col-lg-4 p-0 border-0" id="parent_div2">
						  <img src={require("../image/cap4_1.png")} className="card-img-top" alt="..."/>
						  <div className="card-body text-center text-dark">
						    <h5 className="card-title">Javascript Bird Game</h5>
						    <p className="card-text">Developed a simple bird game using plain Javascript.</p>
						    <button type="button" className="btn btn-info" data-toggle="modal" data-target="#exampleModal4">More Info</button>
						    	<div className="modal fade" id="exampleModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
									  <div className="modal-dialog modal-dialog-centered" role="document">
									    <div className="modal-content">
									      <div className="modal-header">
									        <h4 className="modal-title" id="exampleModalLabel">Javascript Bird Game</h4>
									        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
									          <span aria-hidden="true">&times;</span>
									        </button>
									      </div>
									      <div className="modal-body">
									      		<div id="carousel4" className="carousel slide" data-ride="carousel">
													  <ol className="carousel-indicators">
													    <li data-target="#carousel4" data-slide-to="0" className="active"></li>
													    <li data-target="#carousel4" data-slide-to="1"></li>
													  </ol>
													  <div className="carousel-inner">
														    <div className="carousel-item active">
														      <img className="d-block w-100" src={require("../image/cap4_1.png")} alt="First slide"/>
														    </div>
														    <div className="carousel-item">
														      <img className="d-block w-100" src={require("../image/cap4_2.png")} alt="Second slide"/>
														    </div>
													  </div>
													  <a className="carousel-control-prev" href="#carousel4" role="button" data-slide="prev">
													    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
													    <span className="sr-only">Previous</span>
													  </a>
													  <a className="carousel-control-next" href="#carousel4" role="button" data-slide="next">
													    <span className="carousel-control-next-icon" aria-hidden="true"></span>
													    <span className="sr-only">Next</span>
													  </a>
												</div>
									         <p className="mt-3">Created a simple Bird Game where the player controls the bird while avoiding obstacles as much as possible.</p>
									         <p>Environment: HTML, CSS, Javascript</p>
									         <p>Tools: Sublime Text, Git</p>
									      </div>
									      <div className="modal-footer text-center mx-auto">
									        <a href="https://arismatanguihan.github.io/jsgame/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-success text-center">Go to Website</button></a>
									        <button type="button" className="btn btn-secondary text-center" data-dismiss="modal">Close</button>
									      </div>
									    </div>
									  </div>
								</div>
						  </div>
					</div>


					</div>
				</div>
				)
		}
	}


render() {
	return(
		<div className="category-tabs">
					<div className="col-12 col-md-12 col-lg-12 mt-3 mx-auto animated fadeInDown">
						<h1 className="text-center mt-3" id="text2">PROJECTS</h1>	
						<hr width="25%" className="mx-auto line2"/>
					</div>
			<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
				<Tab>All</Tab>
				<Tab>Java</Tab>
				<Tab>HTML/CSS</Tab>
				<Tab>Javascript</Tab>
			</Tabs>
			<section className="projects-grid">
				{this.toggleCategories()}
			</section>
		</div>

	);

}

}

export default Projects;
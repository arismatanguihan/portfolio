import React from 'react';

let About = () => {

	return (
				<div className="row mx-0">
					<div className="col-12 col-md-12 col-lg-12 mt-3 mb-3 mx-auto animated fadeInDown">
						<h1 className="text-center mt-3" id="text3">ABOUT</h1>	
						<hr  width="15%" className="mx-auto line3"/>
					</div>
						<div className="col-md-8 col-lg-8 mx-auto mb-5 animated zoomIn">
							<div id="divPic" className="col-12 col-md-3 col-lg-3 text-center mx-auto mt-1">
							<img id="homePic" alt="pic" src={require("../image/pic2.png")}/>							
							</div>
							<h2 className="text-center mt-5 animated fadeInLeft">ARIS KRISTIAN MATANGUIHAN</h2>
							<hr width="50%" className="mx-auto line1"/>
							<h4 className="text-center animated fadeInLeft">Web Developer</h4>
						</div>
						<div className="col-md-8 col-lg-8 mx-auto mb-5 animated zoomIn">	
							<p className="text-center mx-auto">
								I have 3 years experience working as a Software Q.A. Tester that specializes on different platforms and applications which includes Mobile and Web. Recently, I took a 3-month Coding Bootcamp course that specializes on Web Development and since then, I am honing to improve my knowledge and skills on Web Development.
							</p>
						</div>
						<div className="col-md-8 col-lg-8 mx-auto mb-5 animated zoomIn">
							<p className="text-center mx-auto">
								 I would like to contribute my newly learned knowledge in Web Development and would like to expand my horizons even further by joining an organization where I can make an impact and be a valuable asset to the team. During my free time, I play a lot of video games and watch TV shows, and movies. I also enjoy surfing the internet, drawing, biking and travelling to different places.
							</p>
						</div>
						<div className="col-12 mx-auto text-center mb-5 pb-5 animated zoomIn">
						<a href={require("../image/updated_cv.docx")} download><button type="button" className="btn btn-outline-info p-2"><i className="fas fa-download"></i> Download My CV</button></a>
						</div>			
				</div>
				);


}

export default About;
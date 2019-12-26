import React from 'react';

let Contact = () => {
	return(

		<div className="row mx-0 mb-5">
					<div className="col-12 col-md-12 col-lg-12 mt-3 mb-3 mx-auto animated fadeInLeft">
						<h1 className="text-center mt-3" id="text5">CONTACT ME</h1>
						<hr width="25%" className="mx-auto line5 animated fadeInLeft"/>	
						<p className="text-center mx-auto animated zoomIn">
							You can contact me using the form below.
						</p>	
					</div>
					<div className="col-md-6 col-lg-6 mx-auto mb-3 animated zoomIn">
						<form className="text-center" action="https://formspree.io/aris.matanguihan@gmail.com" method="POST">
							<div className="form-group">
								<label htmlFor="username">Name:</label>
								<input type="text" id="username" className="form-control text-center" name="name" placeholder="Enter your name"/>
							</div>

							<div className="form-group">
								<label htmlFor="email">Email Address:</label>
								<input type="email" id="email" className="form-control text-center" name="name" placeholder="Enter your e-mail"/>
							</div>

							<div className="form-group">
								<label htmlFor="contact">Contact No.:</label>
								<input type="number" min ="0" id="contact" className="form-control text-center" name="name" placeholder="Enter your contact number"/>
							</div>

							<div className="form-group">
								<label htmlFor="message">Message:</label>
								<textarea id="message" className="form-control text-center" name="name" placeholder="Enter your message here..."></textarea> 
							</div>
							<button type="submit" className="btn btn-info text-center mx-auto">Submit</button>
						</form>	
					</div>					
				</div>



	);



}

export default Contact;
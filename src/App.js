import logo from './logo.svg';
// import './App.css';

function App() {
	return (
		<div className="wrapper">
			<div className="top-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-12">
							<div className="logo">
								<a href="index.html">
									<h1>Builderz</h1>
								</a>
							</div>
						</div>
						<div className="col-lg-8 col-md-7 d-none d-lg-block">
							<div className="row">
								<div className="col-4">
									<div className="top-bar-item">
										<div className="top-bar-icon">
											<i className="flaticon-calendar" />
										</div>
										<div className="top-bar-text">
											<h3>Opening Hour</h3>
											<p>Mon - Fri, 8:00 - 9:00</p>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="top-bar-item">
										<div className="top-bar-icon">
											<i className="flaticon-call" />
										</div>
										<div className="top-bar-text">
											<h3>Call Us</h3>
											<p>+012 345 6789</p>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="top-bar-item">
										<div className="top-bar-icon">
											<i className="flaticon-send-mail" />
										</div>
										<div className="top-bar-text">
											<h3>Email Us</h3>
											<p>info@example.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* Navbar  */}
			<div className="nav-bar">
				<div className="container-fluid">
					<nav className="navbar navbar-expand-lg bg-dark navbar-dark">
						<a href="#" className="navbar-brand">
							MENU
						</a>
						<button
							type="button"
							className="navbar-toggler"
							data-toggle="collapse"
							data-target="#navbarCollapse"
						>
							<span className="navbar-toggler-icon" />
						</button>

						<div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
							<div className="navbar-nav mr-auto">
								<a href="index.html" className="nav-item nav-link active">
									Home
								</a>
								<a href="about.html" className="nav-item nav-link">
									About
								</a>
								<a href="service.html" className="nav-item nav-link">
									Service
								</a>
								<a href="team.html" className="nav-item nav-link">
									Team
								</a>
								<a href="portfolio.html" className="nav-item nav-link">
									Project
								</a>
								<div className="nav-item dropdown">
									<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
										Pages
									</a>
									<div className="dropdown-menu">
										<a href="blog.html" className="dropdown-item">
											Blog Page
										</a>
										<a href="single.html" className="dropdown-item">
											Single Page
										</a>
									</div>
								</div>
								<a href="contact.html" className="nav-item nav-link">
									Contact
								</a>
							</div>
							<div className="ml-auto">
								<a className="btn" href="https://htmlcodex.com/construction-company-html-template">
									Download Pro Version
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>

			{/* ini karousel */}
			<div id="carousel" class="carousel slide" data-ride="carousel">
				<ol class="carousel-indicators">
					<li data-target="#carousel" data-slide-to="0" class="active" />
					<li data-target="#carousel" data-slide-to="1" />
					<li data-target="#carousel" data-slide-to="2" />
				</ol>
				<div class="carousel-inner">
					<div class="carousel-item active">
						<img src="img/carousel-1.jpg" alt="Carousel Image" />
						<div class="carousel-caption">
							<p class="animated fadeInRight">We Are Professional</p>
							<h1 class="animated fadeInLeft">For Your Dream Project</h1>
							<a
								class="btn animated fadeInUp"
								href="https://htmlcodex.com/construction-company-website-template"
							>
								Get A Quote
							</a>
						</div>
					</div>

					<div class="carousel-item">
						<img src="img/carousel-2.jpg" alt="Carousel Image" />
						<div class="carousel-caption">
							<p class="animated fadeInRight">Professional Builder</p>
							<h1 className="animated fadeInLeft">We Build Your Home</h1>
							<a
								className="btn animated fadeInUp"
								href="https://htmlcodex.com/construction-company-website-template"
							>
								Get A Quote
							</a>
						</div>
					</div>

					<div className="carousel-item">
						<img src="img/carousel-3.jpg" alt="Carousel Image" />
						<div className="carousel-caption">
							<p className="animated fadeInRight">We Are Trusted</p>
							<h1 className="animated fadeInLeft">For Your Dream Home</h1>
							<a
								className="btn animated fadeInUp"
								href="https://htmlcodex.com/construction-company-website-template"
							>
								Get A Quote
							</a>
						</div>
					</div>
				</div>

				<a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="sr-only">Previous</span>
				</a>
				<a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="sr-only">Next</span>
				</a>
			</div>

			{/* start menu */}
			<div className="feature wow fadeInUp" data-wow-delay="0.1s">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-12">
							<div className="feature-item">
								<div className="feature-icon">
									<i className="flaticon-worker" />
								</div>
								<div className="feature-text">
									<h3>Expert Worker</h3>
									<p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12">
							<div className="feature-item">
								<div className="feature-icon">
									<i className="flaticon-building" />
								</div>
								<div className="feature-text">
									<h3>Quality Work</h3>
									<p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12">
							<div className="feature-item">
								<div className="feature-icon">
									<i className="flaticon-call" />
								</div>
								<div className="feature-text">
									<h3>24/7 Support</h3>
									<p>Lorem ipsum dolor sit amet elit. Phasus nec pretim ornare velit non</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="about wow fadeInUp" data-wow-delay="0.1s">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-lg-5 col-md-6">
							<div className="about-img">
								<img src="img/about.jpg" alt="Image" />
							</div>
						</div>
						<div className="col-lg-7 col-md-6">
							<div className="section-header text-left">
								<p>Welcome to Builderz</p>
								<h2>25 Years Experience</h2>
							</div>
							<div className="about-text">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
									Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id
									gravida condimentum, viverra quis sem.
								</p>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi.
									Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id
									gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque
									maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non
									blandit.
								</p>
								<a className="btn" href="">
									Learn More
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

      {/* video */}
      <div className="video wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-target="#videoModal">
                        <span></span>
                    </button>
                </div>
            </div>
            
            <div className="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>        
                            {/* <!-- 16:9 aspect ratio --> */}
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
{/* team */}
            <div className="team">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Our Team</p>
                        <h2>Meet Our Engineer</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-1.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Adam Phillips</h2>
                                    <p>CEO & Founder</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-2.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Dylan Adams</h2>
                                    <p>Civil Engineer</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-3.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Jhon Doe</h2>
                                    <p>Interior Designer</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/team-4.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Josh Dunn</h2>
                                    <p>Painter</p>
                                </div>
                                <div className="team-social">
                                    <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
                                    <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
                                    <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
                                    <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer wow fadeIn" data-wow-delay="0.3s">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-contact">
                                <h2>Office Contact</h2>
                                <p><i className="fa fa-map-marker-alt"></i>123 Street, New York, USA</p>
                                <p><i className="fa fa-phone-alt"></i>+012 345 67890</p>
                                <p><i className="fa fa-envelope"></i>info@example.com</p>
                                <div className="footer-social">
                                    <a href=""><i className="fab fa-twitter"></i></a>
                                    <a href=""><i className="fab fa-facebook-f"></i></a>
                                    <a href=""><i className="fab fa-youtube"></i></a>
                                    <a href=""><i className="fab fa-instagram"></i></a>
                                    <a href=""><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-link">
                                <h2>Services Areas</h2>
                                <a href="">Building Construction</a>
                                <a href="">House Renovation</a>
                                <a href="">Architecture Design</a>
                                <a href="">Interior Design</a>
                                <a href="">Painting</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-link">
                                <h2>Useful Pages</h2>
                                <a href="">About Us</a>
                                <a href="">Contact Us</a>
                                <a href="">Our Team</a>
                                <a href="">Projects</a>
                                <a href="">Testimonial</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-3">
                            <div className="newsletter">
                                <h2>Newsletter</h2>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulpu
                                </p>
                                <div className="form">
                                    <input className="form-control" placeholder="Email here" />
                                    <button className="btn">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container footer-menu">
                    <div className="f-menu">
                        <a href="">Terms of use</a>
                        <a href="">Privacy policy</a>
                        <a href="">Cookies</a>
                        <a href="">Help</a>
                        <a href="">FQAs</a>
                    </div>
                </div>
                <div className="container copyright">
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; <a href="#">Your Site Name</a>, All Right Reserved.</p>
                        </div>
                        <div className="col-md-6">
                            <p>Designed By <a href="https://htmlcodex.com">HTML Codex</a></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>
		</div>
	);
}

export default App;

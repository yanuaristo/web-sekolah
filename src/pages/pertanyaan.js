export default function Pertanyaan() {
	return (
		<div className="about wow fadeInUp" data-wow-delay="0.1s">
			<div className="container">
				<div className="section-header text-center">
					<h2>Kotak Pertanyaan</h2>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="contact-form">
							<div id="success" />
							<form name="sentMessage" id="contactForm" novalidate="novalidate">
								<div className="control-group">
									<input
										type="text"
										className="form-control"
										id="name"
										placeholder="Nama Lengkap"
										required="required"
										data-validation-required-message="Please enter your name"
									/>
									<p className="help-block text-danger" />
								</div>
								<div className="control-group">
									<input
										type="email"
										className="form-control"
										id="email"
										placeholder="Alamat Email"
										required="required"
										data-validation-required-message="Please enter your email"
									/>
									<p className="help-block text-danger" />
								</div>
								<div className="control-group">
									<input
										type="text"
										className="form-control"
										id="subject"
										placeholder="Subyek"
										required="required"
										data-validation-required-message="Please enter a subject"
									/>
									<p className="help-block text-danger" />
								</div>
								<div className="control-group">
									<textarea
										className="form-control"
										id="message"
										placeholder="Pertanyaan"
										required="required"
										data-validation-required-message="Please enter your message"
									/>
									<p className="help-block text-danger" />
								</div>
								<div>
									<button className="btn btn-success" type="submit" id="sendMessageButton">
										Kirim
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default function SaranOrtu() {
	return (
		<div className="about wow fadeInUp" data-wow-delay="0.1s">
			<div className="container">
				<div className="section-header text-center">
					<h2>Saran Orang Tua</h2>
				</div>
				<div className="row">
					
					<div className="col-md-12">
					<div class="alert alert-success">
						<ol>
							<li>Silahkan isi form ini untuk memberikan saran dan masukan.</li>
							<li>
								Mohon untuk menyertakan solusi untuk setiap saran yang disampaikan sebagai bahan
								pertimbangan untuk manajemen.
							</li>
							<li>Mohon menggunakan bahasa yang baik dan sopan dalam menyampaikan saran.</li>
						</ol>
					</div>
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
									<button className="btn btn-success btn-block" type="submit" id="sendMessageButton">
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

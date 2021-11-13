export default function Footer() {
	return (
		<div className="footer wow fadeIn" data-wow-delay="0.3s">
			<div className="container">
				<div className="row">
					<div className="col-md-6 col-lg-3">
						<div className="footer-contact">
							<h2>Alamat Sekolah</h2>
							<p>
								<i className="fa fa-map-marker-alt" />Jln. Raden Patah No. 78 Sidoarjo
							</p>
							<p>
								<i className="fa fa-phone-alt" />031 89 470 40
							</p>
							<p>
								<i className="fa fa-envelope" />smk.diponegoro.sda@gmail.com
							</p>
							<div className="footer-social">
								<a href="#sosmed">
									<i className="fab fa-twitter" />
								</a>
								<a href="#sosmed">
									<i className="fab fa-facebook-f" />
								</a>
								<a href="#sosmed">
									<i className="fab fa-youtube" />
								</a>
								<a href="#sosmed">
									<i className="fab fa-instagram" />
								</a>
								<a href="#sosmed">
									<i className="fab fa-linkedin-in" />
								</a>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg-3">
						<div className="footer-link">
							<h2>Kegiatan Menarik</h2>
							<a href="#ekskul">Ekskul PMR</a>
							<a href="#ekskul">Ekskul Paskibraka</a>
							<a href="#ekskul">Ekskul Pramuka</a>
							<a href="#ekskul">Ekskul Drum Band</a>
							<a href="#ekskul">Ekskul Musik & Band</a>
						</div>
					</div>
				</div>
			</div>
			<div className="container footer-menu">
				<div className="f-menu">
					<a href="/">Beranda</a>
					<a href="/bantuan">Hubungi Kami</a>
					<a href="#belajar">E-Learning</a>
					<a href="https://bit.ly/ppdbsmedia" target="_blank" rel="noopener noreferrer">PPDB</a>
				</div>
			</div>
			<div className="container copyright">
				<div className="col-md-6">
					<p>
						&copy; <a href="/">smkdiponegorosda.sch.id</a>
					</p>
				</div>
			</div>
		</div>
	);
}

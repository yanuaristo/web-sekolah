export default function TopBar() {
	return (
		<div>
			<div className="top-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-12">
							<div className="logo">
								<a href="index.html">
									<img src="img/headlogo.png" alt="Logo" />
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
											<h3>Jam Kerja Sekolah</h3>
											<p>Senin - Sabtu, 8:00 - 13:00</p>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="top-bar-item">
										<div className="top-bar-icon">
											<i className="flaticon-call" />
										</div>
										<div className="top-bar-text">
											<h3>Telepon</h3>
											<p>031 89 470 40</p>
										</div>
									</div>
								</div>
								<div className="col-4">
									<div className="top-bar-item">
										<div className="top-bar-icon">
											<i className="flaticon-send-mail" />
										</div>
										<div className="top-bar-text">
											<h3>Email</h3>
											<p>smeadipo@gmail.com</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* <!-- Top Bar End --> */}

			{/* <!-- Nav Bar Start --> */}
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
									Beranda
								</a>
								<div className="nav-item dropdown">
									<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
										Tentang Sekolah
									</a>
									<div className="dropdown-menu">
										<a href="single.html" className="dropdown-item">
											Profil Sekolah
										</a>
										<a href="blog.html" className="dropdown-item">
											Visi & Misi
										</a>
										<a href="single.html" className="dropdown-item">
											Struktur Organisasi
										</a>
										<a href="single.html" className="dropdown-item">
											Akreditasi
										</a>
										<a href="single.html" className="dropdown-item">
											Hubungan Industri
										</a>
										<a href="single.html" className="dropdown-item">
											Prestasi Siswa
										</a>
										<a href="single.html" className="dropdown-item">
											Fasilitas
										</a>
									</div>
								</div>
								<div className="nav-item dropdown">
									<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
										Program
									</a>
									<div className="dropdown-menu">
										<a href="blog.html" className="dropdown-item">
											Profil Jurusan
										</a>
										<a href="single.html" className="dropdown-item">
											Ekstra Kurikuler
										</a>
									</div>
								</div>
								<div className="nav-item dropdown">
									<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">
										Hubungi Kami
									</a>
									<div className="dropdown-menu">
										<a href="blog.html" className="dropdown-item">
											FAQs
										</a>
										<a href="single.html" className="dropdown-item">
											Kotak Pertanyaan
										</a>
										<a href="blog.html" className="dropdown-item">
											Pusat Bantuan
										</a>
										<a href="blog.html" className="dropdown-item">
											Saran Orang Tua / Wali Siswa
										</a>
									</div>
								</div>
								<a href="contact.html" className="nav-item nav-link">
									E-Learning
								</a>
								<a href="contact.html" className="nav-item nav-link">
									PPDB
								</a>
							</div>
							<div className="ml-auto">
								<a className="btn" href="#">
									DAFTAR SEKARANG
								</a>
							</div>
						</div>
					</nav>
				</div>
			</div>
			{/* <!-- Nav Bar End --> */}
		</div>
	);
}

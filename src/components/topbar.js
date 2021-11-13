import { Route } from 'react-router-dom';

export default function TopBar() {
	return (
		<div>
			<div className="top-bar">
				<div className="container-fluid">
					<div className="row align-items-center">
						<div className="col-lg-4 col-md-12">
							<div className="logo">
								<a href="/">
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
											<p>Senin - Sabtu, 07:00 - 13:00</p>
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
											<p>smk.diponegoro.sda@gmail.com</p>
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
						<a href="#child" className="navbar-brand">
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
								<Route
									path="/"
									exact
									children={({ match, history }) => {
										return (
											<a
												href="/"
												className="nav-item nav-link active"
												selected={match ? true : false}
												onClick={() => {
													history.push('/');
												}}
											>
												Beranda
											</a>
										);
									}}
								/>
								<div className="nav-item dropdown">
									<a href="#child" className="nav-link dropdown-toggle" data-toggle="dropdown">
										Tentang Sekolah
									</a>
									<div className="dropdown-menu">
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/profil-sekolah"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/profil-sekolah');
														}}
													>
														Profil Sekolah
													</a>
												);
											}}
										/>
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/visi-misi"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/visi-misi');
														}}
													>
														Visi & Misi
													</a>
												);
											}}
										/>
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/struktur-organisasi"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/struktur-organisasi');
														}}
													>
														Struktur Organisasi
													</a>
												);
											}}
										/>
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/akreditasi"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/akreditasi');
														}}
													>
														Akreditasi
													</a>
												);
											}}
										/>
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/hubungan-industri"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/hubungan-industri');
														}}
													>
														Hubungan Industri
													</a>
												);
											}}
										/>
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/prestasi-siswa"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/prestasi-siswa');
														}}
													>
														Prestasi Siswa
													</a>
												);
											}}
										/>
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/fasilitas"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/fasilitas');
														}}
													>
														Fasilitas
													</a>
												);
											}}
										/>
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/artikel"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/artikel');
														}}
													>
														Berita
													</a>
												);
											}}
										/>
									</div>
								</div>
								<div className="nav-item dropdown">
									<a href="#child" className="nav-link dropdown-toggle" data-toggle="dropdown">
										Program
									</a>
									<div className="dropdown-menu">
									<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/profil-jurusan"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/profil-jurusan');
														}}
													>
														Profil Jurusan
													</a>
												);
											}}
										/>
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/ekstrakurikuler"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/ekstrakurikuler');
														}}
													>
														Ekstra Kurikuler
													</a>
												);
											}}
										/>
									</div>
								</div>
								<div className="nav-item dropdown">
									<a href="#child" className="nav-link dropdown-toggle" data-toggle="dropdown">
										Hubungi Kami
									</a>
									<div className="dropdown-menu">
									<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/faqs"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/faqs');
														}}
													>
														FAQs
													</a>
												);
											}}
										/>
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/pertanyaan"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/pertanyaan');
														}}
													>
														Kotak Pertanyaan
													</a>
												);
											}}
										/>
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/bantuan"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/bantuan');
														}}
													>
														Pusat Bantuan
													</a>
												);
											}}
										/>
										<Route
											path="/"
											exact
											children={({ match, history }) => {
												return (
													<a
														href="/saran-orang-tua"
														className="dropdown-item"
														selected={match ? true : false}
														onClick={() => {
															history.push('/saran-orang-tua');
														}}
													>
														Saran Orang Tua / Wali Siswa
													</a>
												);
											}}
										/>
									</div>
								</div>
								<a href="#/" className="nav-item nav-link">
									E-Learning
								</a>
								<a href="#/" className="nav-item nav-link">
									PPDB
								</a>
							</div>
							<div className="ml-auto">
								<a className="btn" href="https://bit.ly/ppdbsmedia" target="_blank" rel="noopener noreferrer">
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

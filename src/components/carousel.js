export default function Carousel() {
	return (
		<div id="carousel" className="carousel slide" data-ride="carousel">
			<ol className="carousel-indicators">
				<li data-target="#carousel" data-slide-to="0" className="active" />
				<li data-target="#carousel" data-slide-to="1" />
				<li data-target="#carousel" data-slide-to="2" />
				<li data-target="#carousel" data-slide-to="3" />
				<li data-target="#carousel" data-slide-to="4" />
			</ol>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="img/carousel-1.jpg" alt="Carousel Image" />
					<div className="carousel-caption">
						<p className="animated fadeInRight">Berprestasi dalam</p>
						<h1 className="animated fadeInLeft">Membentuk Karakter Siswa</h1>
						<a
							className="btn animated fadeInUp"
							href="https://htmlcodex.com/construction-company-website-template"
						>
							Daftar Sekarang
						</a>
					</div>
				</div>

				<div className="carousel-item">
					<img src="img/carousel-2.jpg" alt="Carousel Image" />
					<div className="carousel-caption">
						<p className="animated fadeInRight">Gedung Sekolah</p>
						<h1 className="animated fadeInLeft">Berfasilitas Lengkap</h1>
						<a
							className="btn animated fadeInUp"
							href="https://htmlcodex.com/construction-company-website-template"
						>
							Daftar Sekarang
						</a>
					</div>
				</div>

				<div className="carousel-item">
					<img src="img/carousel-3.jpg" alt="Carousel Image" />
					<div className="carousel-caption">
						<p className="animated fadeInRight">Dukungan Penuh Pada</p>
						<h1 className="animated fadeInLeft">Bakat Putra-Putri Anda</h1>
						<a
							className="btn animated fadeInUp"
							href="https://htmlcodex.com/construction-company-website-template"
						>
							Daftar Sekarang
						</a>
					</div>
				</div>

				<div className="carousel-item">
					<img src="img/carousel-4.jpg" alt="Carousel Image" />
					<div className="carousel-caption">
						<p className="animated fadeInRight">Membimbing Siswa</p>
						<h1 className="animated fadeInLeft">Unggul dalam DU/DI</h1>
						<a
							className="btn animated fadeInUp"
							href="https://htmlcodex.com/construction-company-website-template"
						>
							Daftar Sekarang
						</a>
					</div>
				</div>
				<div className="carousel-item">
					<img src="img/carousel-5.jpg" alt="Carousel Image" />
					<div className="carousel-caption">
						<p className="animated fadeInRight">Membentuk Pribadi Siswa</p>
						<h1 className="animated fadeInLeft">berkarakter dan Bertaqwa</h1>
						<a
							className="btn animated fadeInUp"
							href="https://htmlcodex.com/construction-company-website-template"
						>
							Daftar Sekarang
						</a>
					</div>
				</div>
			</div>

			<a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Sebelumnya</span>
			</a>
			<a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Selanjutnya</span>
			</a>
		</div>
	);
}

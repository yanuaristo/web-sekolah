export default function ProfilJurusan() {
	return (
		<div className="about wow fadeInUp" data-wow-delay="0.1s">
			<div className="container">
				<div className="section-header text-center">
					<h2>Profil Jurusan</h2>
				</div>
				<div className="row">
					<div className="col-md-12">
                        <div id="accordion-1">                                
                                <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed text-center" data-toggle="collapse" href="#collapseOne">
                                            <h3>Teknik Komputer Jaringan</h3>
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                                Teknik Komputer dan Jaringan merupakan ilmu berbasis Teknologi Informasi dan Komunikasi terkait kemampuan algoritma, dan pemrograman komputer, perakitan komputer, perakitan jaringan komputer, dan pengoperasian perangkat lunak, dan internet.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed text-center" data-toggle="collapse" href="#collapseTwo">
                                                <h3>Otomasi & Tata Kelola Perkantoran </h3>
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                                Otomatisasi & Tata Kelola Perkantoran atau biasa disingkat OTKP, dulu bernama Administrasi Perkantoran atau AP merupakan salah satu cabang bidang keahlian Bisnis dan Manajemen mempelajari tentang Pengetikan naskah atau dokumen, Penanganan telepon, Penataan dan pengelolaan surat atau dokumen, Penataan dan pengelolaan arsip, Penanganan perjalanan bisnis, Penanganan dana kas kecil, Penyiapan pertemuan atau rapat, Penanganan aplikasi, dan Penanganan informasi melalui internet.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed text-center" data-toggle="collapse" href="#collapseThree">
                                            <h3>Akuntansi dan Keuangan Lembaga</h3>
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                                Program studi Akuntansi dan Keuangan Lembaga atau disebut juga Kesekretariatan adalah program studi yang berfokus pada perencanaan anggaran keuangan, pembayaran dan pendataan suatu oranisasi atau perkantoran atau perusahaan.
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
            
					</div>
				</div>
			</div>
            <div className="col-md-9 text-center">
                        
            </div>
		</div>
	);
}

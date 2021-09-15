import logo from './logo.svg';
// import './App.css';

function App() {
	return (
		<div className="wrapper">
			            {/* <!-- Top Bar Start --> */}
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
                                            <i className="flaticon-calendar"></i>
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
                                            <i className="flaticon-call"></i>
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
                                            <i className="flaticon-send-mail"></i>
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
                        <a href="#" className="navbar-brand">MENU</a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div className="navbar-nav mr-auto">
                                <a href="index.html" className="nav-item nav-link active">Beranda</a>
                                <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Tentang Sekolah</a>
                                        <div className="dropdown-menu">
                                            <a href="single.html" className="dropdown-item">Profil Sekolah</a>
                                            <a href="blog.html" className="dropdown-item">Visi & Misi</a>
                                            <a href="single.html" className="dropdown-item">Struktur Organisasi</a>
                                            <a href="single.html" className="dropdown-item">Akreditasi</a>
                                            <a href="single.html" className="dropdown-item">Hubungan Industri</a>
                                            <a href="single.html" className="dropdown-item">Prestasi Siswa</a>
                                            <a href="single.html" className="dropdown-item">Fasilitas</a>
                                        </div>
                                </div>
                                <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Program</a>
                                        <div className="dropdown-menu">
                                                <a href="blog.html" className="dropdown-item">Profil Jurusan</a>
                                                <a href="single.html" className="dropdown-item">Ekstra Kurikuler</a>
                                        </div>
                                </div>
                                <div className="nav-item dropdown">
                                        <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Hubungi Kami</a>
                                        <div className="dropdown-menu">
                                                <a href="blog.html" className="dropdown-item">FAQs</a>
                                                <a href="single.html" className="dropdown-item">Kotak Pertanyaan</a>
                                                <a href="blog.html" className="dropdown-item">Pusat Bantuan</a>
                                                <a href="blog.html" className="dropdown-item">Saran Orang Tua / Wali Siswa</a>
                                        </div>
                                </div>
                                <a href="contact.html" className="nav-item nav-link">E-Learning</a>
                                <a href="contact.html" className="nav-item nav-link">PPDB</a>
                            </div>
                            <div className="ml-auto">
                                <a className="btn" href="#">DAFTAR SEKARANG</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <!-- Nav Bar End --> */}


            {/* <!-- Carousel Start --> */}
            <div id="carousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel" data-slide-to="1"></li>
                    <li data-target="#carousel" data-slide-to="2"></li>
                    <li data-target="#carousel" data-slide-to="3"></li>
                    <li data-target="#carousel" data-slide-to="4"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/carousel-1.jpg" alt="Carousel Image" />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Berprestasi dalam</p>
                            <h1 className="animated fadeInLeft">Membentuk Karakter Siswa</h1>
                            <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Daftar Sekarang</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/carousel-2.jpg" alt="Carousel Image" />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Gedung Sekolah</p>
                            <h1 className="animated fadeInLeft">Berfasilitas Lengkap</h1>
                            <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Daftar Sekarang</a>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <img src="img/carousel-3.jpg" alt="Carousel Image" />
                        <div className="carousel-caption">
                            <p className="animated fadeInRight">Dukungan Penuh Pada</p>
                            <h1 className="animated fadeInLeft">Bakat Putra-Putri Anda</h1>
                            <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Daftar Sekarang</a>
                        </div>
                    </div>
                    
                    <div className="carousel-item">
                            <img src="img/carousel-4.jpg" alt="Carousel Image" />
                            <div className="carousel-caption">
                                <p className="animated fadeInRight">Membimbing Siswa</p>
                                <h1 className="animated fadeInLeft">Unggul dalam DU/DI</h1>
                                <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Daftar Sekarang</a>
                            </div>
                    </div>
                    <div className="carousel-item">
                            <img src="img/carousel-5.jpg" alt="Carousel Image" />
                            <div className="carousel-caption">
                                <p className="animated fadeInRight">Membentuk Pribadi Siswa</p>
                                <h1 className="animated fadeInLeft">berkarakter dan Bertaqwa</h1>
                                <a className="btn animated fadeInUp" href="https://htmlcodex.com/construction-company-website-template">Daftar Sekarang</a>
                            </div>
                    </div>
                </div>

                <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Sebelumnya</span>
                </a>
                <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Selanjutnya</span>
                </a>
            </div>
            {/* <!-- Carousel End --> */}


            {/* <!-- Feature Start--> */}
            <div className="feature wow fadeInUp" data-wow-delay="0.1s">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-worker"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>Teknisi Komputer & Jaringan</h3>
                                    <p>Program studi yang berfokus pada mempelajari tentang cara-cara merakit komputer dan menginstalasi program & jaringan komputer.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-building"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>Otomatisasi & Tata Kelola Perkantoran</h3>
                                    <p>Program studi yang berfokus pada keterampilan dalam bidang administrasi baik secara pengetahuan, keterampilan, dan sikap.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <div className="feature-item">
                                <div className="feature-icon">
                                    <i className="flaticon-building"></i>
                                </div>
                                <div className="feature-text">
                                    <h3>Administrasi</h3>
                                    <p>Program studi yang berfokus pada perencanaan anggaran keuangan, pembayaran dan pendataan suatu oranisasi atau perkantoran atau perusahaan.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Feature End--> */}


            {/* <!-- About Start --> */}
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
                                <p>Sambutan Kepala Sekolah</p>
                                <h3>SMK Diponegoro Sidoarjo adalah sekolah yang tanggap dengan perkembangan teknologi</h3>
                            </div>
                            <div className="about-text">
                                <p>
                                        Dengan dukungan SDM yang di miliki sekolah ini siap untuk berkompetisi dengan sekolah lain dalam pelayanan informasi publik. 
                                </p>
                                <p>
                                        Teknologi Informasi Web khususnya, menjadi sarana bagi SMK Diponegoro Sidoarjo untuk memberi pelayanan informasi secara cepat, jelas, dan akuntable. Dari layanan ini pula, sekolah siap menerima saran dari semua pihak yang akhirnya dapat menjawab Kebutuhan masyarakat. <br /><i>- Drs. Edi, Mpd</i>
                                </p>
                                <a className="btn" href="">Selengkapnya</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}


            {/* <!-- Fact Start --> */}
            <div className="fact">
                <div className="container-fluid">
                    <div className="row counters">
                        <div className="col-md-6 fact-left wow slideInLeft">
                            <div className="row">
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-worker"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">109</h2>Siswa
                                        <p>Alumnus</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-building"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">485</h2>Alumnus
                                        <p>Bekerja di BUMN</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 fact-right wow slideInRight">
                            <div className="row">
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-address"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">789</h2>Alumnus
                                        <p>Melanjutkan Kuliah</p>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="fact-icon">
                                        <i className="flaticon-crane"></i>
                                    </div>
                                    <div className="fact-text">
                                        <h2 data-toggle="counter-up">890</h2>Siswa
                                        <p>Siswa Saat Ini</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Fact End --> */}


            {/* <!-- Service Start --> */}
            <div className="service">
                <div className="container">
                    <div className="section-header text-center">
                        <p>GALERI</p>
                        <h2>Kegiatan Siswa</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-1.jpg" alt="Image" />
                                    <div className="service-overlay">
                                        <p>
                                            Kejuaraan Pramuka Tingkat Provinsi Jawa Timur 2019
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Pramuka</h3>
                                    <a className="btn" href="img/service-1.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-2.jpg" alt="Image" />
                                    <div className="service-overlay">
                                        <p>
                                                Juara 3 Karate Tingkat Jawa Timur
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Bela Diri Karate</h3>
                                    <a className="btn" href="img/service-2.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-3.jpg" alt="Image" />
                                    <div className="service-overlay">
                                        <p>
                                            Aksi Pasukan Pengibar Bendera Pusaka dalam Kompetisi Paskibraka Provinsi 2019
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Paskibraka</h3>
                                    <a className="btn" href="img/service-3.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-4.jpg" alt="Image" />
                                    <div className="service-overlay">
                                        <p>
                                            Grup Drum Band Gema Gita Smedia dengan berbagai piala yang pernah diraih
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>GEMA GITA SMEDIA</h3>
                                    <a className="btn" href="img/service-4.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-5.jpg" alt="Image" />
                                    <div className="service-overlay">
                                        <p>
                                            Gerakan Peduli Lingkungan Menyambut Hari Santri 2019
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Kegiatan Sosial</h3>
                                    <a className="btn" href="img/service-5.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                            <div className="service-item">
                                <div className="service-img">
                                    <img src="img/service-6.jpg" alt="Image" />
                                    <div className="service-overlay">
                                        <p>
                                            Studi Perusahaan di The Bernardi Factory
                                        </p>
                                    </div>
                                </div>
                                <div className="service-text">
                                    <h3>Study Tour</h3>
                                    <a className="btn" href="img/service-6.jpg" data-lightbox="service">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Service End --> */}


            {/* <!-- Video Start --> */}
            <div className="video wow fadeIn" data-wow-delay="0.1s">
                <div className="container">
                    <button type="button" className="btn-play" data-toggle="modal" data-src="https://www.youtube.com/embed/L1iAJhZqbzs" data-target="#videoModal">
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
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe className="embed-responsive-item" src="" id="video"  allowscriptaccess="always" allow="autoplay"></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Video End --> */}


            {/* <!-- Team Start --> */}
            <div className="team">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Perkenalkan</p>
                        <h2>Staff Pengajar</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item">
                                <div className="team-img">
                                    <img src="img/about.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Achmad Mursyidi, S. Pd.</h2>
                                    <p>Kesiswaan</p>
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
                                    <img src="img/about.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Marinanti Budiarti, S. Pd.</h2>
                                    <p>Guru OTKP</p>
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
                                    <img src="img/about.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Syamsul Ma'arif, S. Kom.</h2>
                                    <p>Guru TKJ</p>
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
                                    <img src="img/about.jpg" alt="Team Image" />
                                </div>
                                <div className="team-text">
                                    <h2>Minhajul Abidin, S. Kom.</h2>
                                    <p>Guru APK</p>
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
            {/* <!-- Team End --> */}
            

            {/* <!-- FAQs Start --> */}
            <div className="faqs">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Pertanyaan yang Mungkin dalam Benak Anda</p>
                        <h2>Mungkin Anda Bertanya Tentang ... </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div id="accordion-1">
                                <div className="card wow fadeInLeft" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseOne">
                                            Apakah Sekolah SMK itu?
                                        </a>
                                    </div>
                                    <div id="collapseOne" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                                Sekolah Menengah Kejuruan (SMK) adalah salah satu bentuk satuan pendidikan formal yang menyelenggarakan pendidikan kejuruan pada jenjang pendidikan menengah sebagai lanjutan dari SMP/MTs atau bentuk lain yang sederajat atau lanjutan dari hasil belajar yang diakui sama/setara SMP/MTs. ( UU Nomor 20 Tahun 2013, Pasal 18 ayat [3]). Pendidikan kejuruan merupakan pendidikan menengah yang mempersiapkan peserta didik terutama untuk bekerja dalam bidang tertentu. (UU Nomor 20 Tahun 2013, Penjelasan Pasal 15).
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseTwo">
                                            Apakah jurusan TKJ itu?
                                        </a>
                                    </div>
                                    <div id="collapseTwo" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                                Teknik Komputer dan Jaringan merupakan ilmu berbasis Teknologi Informasi dan Komunikasi terkait kemampuan algoritma, dan pemrograman komputer, perakitan komputer, perakitan jaringan komputer, dan pengoperasian perangkat lunak, dan internet.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInLeft" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseThree">
                                                Apakah jurusan OTKP itu?
                                        </a>
                                    </div>
                                    <div id="collapseThree" className="collapse" data-parent="#accordion-1">
                                        <div className="card-body">
                                                Otomatisasi & Tata Kelola Perkantoran atau biasa disingkat OTKP, dulu bernama Administrasi Perkantoran atau AP merupakan salah satu cabang bidang keahlian Bisnis dan Manajemen mempelajari tentang Pengetikan naskah atau dokumen, Penanganan telepon, Penataan dan pengelolaan surat atau dokumen, Penataan dan pengelolaan arsip, Penanganan perjalanan bisnis, Penanganan dana kas kecil, Penyiapan pertemuan atau rapat, Penanganan aplikasi, dan Penanganan informasi melalui internet.
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div id="accordion-2">
                                <div className="card wow fadeInRight" data-wow-delay="0.1s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSix">
                                            Apakah jurusan APK itu?
                                        </a>
                                    </div>
                                    <div id="collapseSix" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                                Program studi Administrasi Perkantoran atau disebut juga Kesekretariatan adalah program studi yang berfokus pada perencanaan anggaran keuangan, pembayaran dan pendataan suatu oranisasi atau perkantoran atau perusahaan.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.2s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseSeven">
                                            Apakah lulusan SMK bisa langsung diterima dalam dunia kerja?
                                        </a>
                                    </div>
                                    <div id="collapseSeven" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Tentu saja. Lulusan SMK bahkan dapat bekerja secara wirausaha dengan keterampilan yang telah dikuasainya selama bersekolah di SMK.
                                        </div>
                                    </div>
                                </div>
                                <div className="card wow fadeInRight" data-wow-delay="0.3s">
                                    <div className="card-header">
                                        <a className="card-link collapsed" data-toggle="collapse" href="#collapseEight">
                                            Apakah lulusan SMK dapat melanjutkan kuliah?
                                        </a>
                                    </div>
                                    <div id="collapseEight" className="collapse" data-parent="#accordion-2">
                                        <div className="card-body">
                                            Lulusan SMK dapat melanjutkan ke jenjang perkuliahan seperti siswa sekolah menengah pada umumnya. Bahkan banyak juga lulusan SMK yang memilih melanjutkan menuntut ilmu ke jenjang yang lebih tinggi.
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- FAQs End --> */}



            {/* <!-- Blog Start --> */}
            <div className="blog">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Berita Terkini</p>
                        <h2>Artikel Terkini Kegiatan Siswa</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="img/blog-1.jpg" alt="Image" />
                                </div>
                                <div className="blog-title">
                                    <h3>Kunjungan ke Bernardi Factory</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>Oleh<a href="">Admin</a></p>
                                    <p>dalam<a href="">Kesiswaan</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Hari ini, 25 Juni 2019 para siswa berangkat ke Bernardi Factory ... 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="img/blog-2.jpg" alt="Image" />
                                </div>
                                <div className="blog-title">
                                    <h3>Semangat Belajar UN</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Kesiswaan</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Para murid kelas tiga yang tiga bulan lagi menghadapi UN, hari ini mulai melaksanakan program ...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src="img/blog-3.jpg" alt="Image" />
                                </div>
                                <div className="blog-title">
                                    <h3>Perakitan PC Gaming ?</h3>
                                    <a className="btn" href="">+</a>
                                </div>
                                <div className="blog-meta">
                                    <p>By<a href="">Admin</a></p>
                                    <p>In<a href="">Ekstra Kurikuler</a></p>
                                </div>
                                <div className="blog-text">
                                    <p>
                                        Di laboratorium, para siswa kelas 2 dan tiga sedang merakit PC Gaming, untuk kegiatan percobaan overclocking ... 
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Blog End --> */}


            {/* <!-- Footer Start --> */}
            <div className="footer wow fadeIn" data-wow-delay="0.3s">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-3">
                            <div className="footer-contact">
                                <h2>Alamat Sekolah</h2>
                                <p><i className="fa fa-map-marker-alt"></i>Jln. Raden Patah No. 78 Sidoarjo</p>
                                <p><i className="fa fa-phone-alt"></i>031 89 470 40</p>
                                <p><i className="fa fa-envelope"></i>smkdiposda@gmail.com</p>
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
                                <h2>Kegiatan Menarik</h2>
                                <a href="">Ekskul PMR</a>
                                <a href="">Ekskul Paskibraka</a>
                                <a href="">Ekskul Pramuka</a>
                                <a href="">Ekskul Drum Band</a>
                                <a href="">Ekskul Musik & Band</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div className="container footer-menu">
                    <div className="f-menu">
                        <a href="">Beranda</a>
                        <a href="">Hubungi Kami</a>
                        <a href="">E-Learning</a>
                        <a href="">PPDB</a>
                    </div>
                </div>
                <div className="container copyright">
                    <div className="col-md-6">
                            <p>&copy; <a href="#">smkdiponegorosda.sch.id</a></p>
                        </div>
                </div>
            </div>
            {/* <!-- Footer End --> */}

            <a href="#" className="back-to-top"><i className="fa fa-chevron-up"></i></a>

		</div>
	);
}

export default App;

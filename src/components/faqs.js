export default function Faqs() {
    return (
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
                                            Apakah jurusan AKL itu?
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
            
    )
}

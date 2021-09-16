import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer';
import Akreditasi from './pages/akreditasi';
import Fasilitas from './pages/fasilitas';
import TopBar from './components/topbar';
import Home from './pages/Home';
import HubunganIndustri from './pages/hubungan-industri';
import PrestasiSiswa from './pages/prestasi';
import ProfilSekolah from './pages/profil-sekolah';
import SOTK from './pages/sotk';
import VisiMisi from './pages/visi-misi';
import ProfilJurusan from './pages/profil-jurusan';
import Ekstrakurikuler from './pages/ekskul';
import FaqsPage from './pages/faqs-page';
import Pertanyaan from './pages/pertanyaan';
import Bantuan from './pages/bantuan';
import SaranOrtu from './pages/saran-ortu';
import Artikel from './pages/artikel';
// import './App.css';

function App() {
	return (
		<Router>
			<TopBar />
			<Switch>
				<Route path="/profil-sekolah" component={ProfilSekolah} />
				<Route path="/visi-misi" component={VisiMisi} />
				<Route path="/struktur-organisasi" component={SOTK} />
				<Route path="/akreditasi" component={Akreditasi} />
				<Route path="/hubungan-industri" component={HubunganIndustri} />
				<Route path="/prestasi-siswa" component={PrestasiSiswa} />
				<Route path="/fasilitas" component={Fasilitas} />	
				<Route path="/artikel" component={Artikel} />

				<Route path="/profil-jurusan" component={ProfilJurusan} />	
				<Route path="/ekstrakurikuler" component={Ekstrakurikuler} />

				<Route path="/faqs" component={FaqsPage} />
				<Route path="/pertanyaan" component={Pertanyaan} />
				<Route path="/bantuan" component={Bantuan} />
				<Route path="/saran-orang-tua" component={SaranOrtu} />						
				<Route component={Home} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;

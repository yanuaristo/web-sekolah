import React from 'react';
import Artikel from '../components/artikel';
import Carousel from '../components/carousel';
import Faqs from '../components/faqs';
import Footer from '../components/footer';
import Galeri from '../components/galeri';
import Jurusan from '../components/jurusan';
import OutputSiswa from '../components/outputsiswa';
import Sambutan from '../components/sambutan';
import StafPengajar from '../components/stafpengajar';
import TopBar from '../components/topbar';
import Video from '../components/video';

function Home() {
	return (
		<div className="wrapper">
			{/* <!-- Carousel Start --> */}
			<Carousel />
			{/* <!-- Carousel End --> */}

			{/* <!-- Feature Start--> */}
			<Jurusan />
			{/* <!-- Feature End--> */}

			{/* <!-- About Start --> */}
			<Sambutan />
			{/* <!-- About End --> */}

			{/* <!-- Fact Start --> */}
			<OutputSiswa />
			{/* <!-- Fact End --> */}

			{/* <!-- Service Start --> */}
			<Galeri />
			{/* <!-- Service End --> */}

			{/* <!-- Video Start --> */}
			<Video />
			{/* <!-- Video End --> */}

			{/* <!-- Team Start --> */}
			<StafPengajar />
			{/* <!-- Team End --> */}

			{/* <!-- FAQs Start --> */}
			<Faqs />
			{/* <!-- FAQs End --> */}

			{/* <!-- Blog Start --> */}
			<Artikel />
			{/* <!-- Blog End --> */}

			<a href="#" className="back-to-top">
				<i className="fa fa-chevron-up" />
			</a>
		</div>
	);
}

export default Home;

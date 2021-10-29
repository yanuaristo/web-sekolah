import React from 'react';
import Artikel from './artikel';
import Carousel from './carousel';
import Galeri from './galeri';
import Jurusan from './jurusan';
import OutputSiswa from './outputsiswa';
import Sambutan from './sambutan';
import StafPengajar from './stafpengajar';
import Video from './video';
import Faqs from '../../components/faqs';

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

		</div>
	);
}

export default Home;

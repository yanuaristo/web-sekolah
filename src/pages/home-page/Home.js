import React from 'react';
import Artikel from './artikel';
import Banner from './carousel';
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
			<div className="portfolio-modal modal fade" id="myModal" tabindex="-1" role="dialog" aria-hidden="true">
				<div className="modal-dialog" role="document" style={{maxWidth: '80%'}}>
					<div className="modal-content">
						<div className="modal-body">
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
										
										<a href="https://bit.ly/ppdbsmedia" target="_blank" rel="noopener noreferrer">
											<img
												className="img-fluid d-block mx-auto"
												src="img/banner.jpg"
												alt=""
											/>
										</a>
							</div>
					</div>
				</div>
			</div>

			{/* <!-- Carousel Start --> */}
			<Banner />
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

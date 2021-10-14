import React, { useState, useEffect } from 'react';
import axios from 'axios';

import parse from 'html-react-parser';

import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';

import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import AppPageLoading from '../../components/AppPageLoading';

export default function ArtikelDetail({ match }) {
	const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(
		() => {
			const getData = async () => {
				try {
					setLoading(true);
					await axios
						.get(`https://smkdiponegorosda.sch.id/api_smk/artikel/detail/${match.params.id}`)
						.then((response) => {
							// console.log('data', response.data.data);
							setData(response.data.data);
							setLoading(false);
						});
				} catch (e) {
					if (e) {
						setError('Data Tidak ada');
					}
				}
			};
			getData();
		},
		[ match.params.id ]
	);

	if (error !== '') {
		return <p>ERROR: {error}</p>;
	}

	if (loading) {
		return <AppPageLoading />;
	}

	return (
		<div className="single">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="single-content wow fadeInUp">
							<div style={{ fontSize: '0.9em', display: 'flex', justifyContent: 'space-between' }}>
								<span>
									<i className="fa fa-user" style={{ margin: '5px' }} />
									Oleh {data.user_pembuat}
									<i className="fa fa-tag" style={{ margin: '5px' }} />
									{data.kategori}
								</span>
								<span>
									<i className="fa fa-calendar text-right" style={{ margin: '5px' }} />
									{data.tgl}
								</span>
							</div>
							<img src={data.image} alt="Gambar" />
							<h2>{data.judul}</h2>
							{parse(`${data.isi_artikel}`)}
						</div>
						<div>
							<p>Bagikan</p>
						</div>
						<div class="single-tags wow fadeInUp">
							<FacebookShareButton
								url={`https://smkdiponegorosda.sch.id/artikel/detail/${match.params.id}`}
								quote={data.judul}
								hashtag={'#smkdiponegorosidoarjo'}
								description={'aiueoffff'}
							>
								<FacebookIcon size={32} round />
							</FacebookShareButton>
							<TwitterShareButton
								title={data.judul}
								url={`https://smkdiponegorosda.sch.id/artikel/detail/${match.params.id}`}
								hashtags={[ 'smkdiponegorosda', 'smkbisa', 'sekolahsidoarjo' ]}
							>
								<TwitterIcon size={32} round />
							</TwitterShareButton>
							<WhatsappShareButton
								title={data.judul}
								url={`https://smkdiponegorosda.sch.id/artikel/detail/${match.params.id}`}
								separator={'	'}
							>
								<WhatsappIcon size={32} round />
							</WhatsappShareButton>
						</div>
					</div>
					{/* <div className="col-lg-4">
						<div className="sidebar">
							<div className="sidebar-widget wow fadeInUp">
								<h2 className="widget-title">Informasi Terbaru</h2>
								<div className="recent-post">
									<div className="post-item">
										<div className="post-img">
											<img src="img/post-1.jpg" />
										</div>
										<div class="post-text">
											<a href="">Loremeee ipsum dolor sit amet consec adipis elit</a>
											<div class="post-meta">
												<p>
													By<a href="">Admin</a>
												</p>
												<p>
													In<a href="">Design</a>
												</p>
											</div>
										</div>
									</div>
									<div className="post-item">
										<div className="post-img">
											<img src="img/post-2.jpg" />
										</div>
										<div className="post-text">
											<a href="">Loremd ipsum dolor sit amet consec adipis elit</a>
											<div className="post-meta">
												<p>
													By<a href="">Admin</a>
												</p>
												<p>
													In<a href="">Design</a>
												</p>
											</div>
										</div>
									</div>
									<div className="post-item">
										<div className="post-img">
											<img src="img/post-3.jpg" />
										</div>
										<div className="post-text">
											<a href="">Lorema ipsum dolor sit amet consec adipis elit</a>
											<div className="post-meta">
												<p>
													By<a href="">Admin</a>
												</p>
												<p>
													In<a href="">Design</a>
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="sidebar-widget wow fadeInUp">
								<div className="tab-post">
									<ul className="nav nav-pills nav-justified">
										<li className="nav-item">
											<a className="nav-link active" data-toggle="pill" href="#featured">
												Kategori Sama
											</a>
										</li>
										<li className="nav-item">
											<a className="nav-link" data-toggle="pill" href="#latest">
												Terbaru
											</a>
										</li>
									</ul>

									<div className="tab-content">
										<div id="featured" className="container tab-pane active">
											<div className="post-item">
												<div className="post-img">
													<img src="img/post-1.jpg" />
												</div>
												<div className="post-text">
													<a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
													<div className="post-meta">
														<p>
															By<a href="">Admin</a>
														</p>
														<p>
															In<a href="">Design</a>
														</p>
													</div>
												</div>
											</div>
											<div className="post-item">
												<div className="post-img">
													<img src="img/post-2.jpg" />
												</div>
												<div className="post-text">
													<a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
													<div className="post-meta">
														<p>
															By<a href="">Admin</a>
														</p>
														<p>
															In<a href="">Design</a>
														</p>
													</div>
												</div>
											</div>
											<div className="post-item">
												<div className="post-img">
													<img src="img/post-3.jpg" />
												</div>
												<div className="post-text">
													<a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
													<div className="post-meta">
														<p>
															By<a href="">Admin</a>
														</p>
														<p>
															In<a href="">Design</a>
														</p>
													</div>
												</div>
											</div>
										</div>

										<div id="latest" className="container tab-pane fade">
											<div className="post-item">
												<div className="post-img">
													<img src="img/post-1.jpg" />
												</div>
												<div className="post-text">
													<a href="">Loremddd ipsum dolor sit amet consec adipis elit</a>
													<div className="post-meta">
														<p>
															By<a href="">Admin</a>
														</p>
														<p>
															In<a href="">Design</a>
														</p>
													</div>
												</div>
											</div>
											<div className="post-item">
												<div className="post-img">
													<img src="img/post-2.jpg" />
												</div>
												<div className="post-text">
													<a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
													<div className="post-meta">
														<p>
															By<a href="">Admin</a>
														</p>
														<p>
															In<a href="">Design</a>
														</p>
													</div>
												</div>
											</div>
											<div className="post-item">
												<div className="post-img">
													<img src="img/post-3.jpg" />
												</div>
												<div className="post-text">
													<a href="">Lorem ipsum dolor sit amet consec adipis elit</a>
													<div className="post-meta">
														<p>
															By<a href="">Admin</a>
														</p>
														<p>
															In<a href="">Design</a>
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div> */}
				</div>
			</div>
		</div>
	);
}

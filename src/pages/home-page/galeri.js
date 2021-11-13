import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';

import CardGaleri from '../../components/card-galeri';
import AppLoading from '../../components/AppLoading';

export default function Galeri() {
	const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true);
			await axios.get('https://smkdiponegorosda.sch.id/api_smk/galeri').then((response) => {
				if (response.data.status === 200) {
					setData(response.data.data);
					setLoading(false);
				} else {
					setError('Data Tidak ada');
				}
			});
		} catch (e) {
			if (e) {
				setError('Gagal Ambil Data');
			}
		}
	};

	if (error !== '') {
		return <p>ERROR: {error}</p>;
	}

	if (loading) {
		return <AppLoading />;
	}

	return (
		<div className="service">
			<div className="container">
				<div className="section-header text-center">
					<p>GALERI</p>
					<h2>Kegiatan Siswa</h2>
				</div>
				<div className="row">
					{data
						.slice(0, 6)
						.map((element) => (
							<CardGaleri
								key={element.id}
								judul={element.judul}
								foto={element.image}
								keterangan={element.isi}
							/>
						))}
					{/* <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
						<div className="service-item">
							<div className="service-img">
								<img src="img/service-1.jpg" alt="Galeri" />
								<div className="service-overlay">
									<p>Kejuaraan Pramuka Tingkat Provinsi Jawa Timur 2019</p>
								</div>
							</div>
							<div className="service-text">
								<h3>Pramuka</h3>
								<a className="btn" href="img/service-1.jpg" data-lightbox="service">
									+
								</a>
							</div>
						</div>
					</div> */}
					
				</div>
				<Route
						path="/"
						exact
						children={({ match, history }) => {
							return (
								<a
									href="/galeri"
									className="btn btn-warning col text-center"
									selected={match ? true : false}
									onClick={() => {
										history.push('/galeri');
									}}
								>
									Selengkapnya
								</a>
							);
						}}
					/>
			</div>
		</div>
	);
}

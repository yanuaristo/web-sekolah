import { Carousel } from 'react-bootstrap';

import React, { useState, useEffect } from 'react';
// import { Route } from 'react-router-dom';
import axios from 'axios';

import AppLoading from '../../components/AppLoading';

export default function Banner() {
	const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true)
			await axios.get('https://smkdiponegorosda.sch.id/api_smk/carousel').then((response) => {
				if(response.data.status === 200){
					setData(response.data.data);
					setLoading(false)
				} else {
					setError("Data Tidak ada")
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
		return <AppLoading />
	}

	return (
		<div id="carousel" className="carousel slide" data-ride="carousel">
		<div className="carousel-inner">
			
				<Carousel nextLabel="Selanjutnya" prevLabel="Sebelumnya">
				{data.map((element) => (
						<Carousel.Item>
							<img src={element.image} alt="Carousel"/>
							<div className="carousel-caption">
							<p className="animated fadeInRight">{element.judul}</p>
							<h1 className="animated fadeInLeft">{element.subjudul}</h1>
							<a rel="noopener noreferrer"
								className="btn animated fadeInUp"
								href="https://bit.ly/ppdbsmedia" target="_blank"
							>
								Daftar Sekarang
							</a>
						</div>
						</Carousel.Item>
					))}
				</Carousel>	
				</div>	

			{/* <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true" />
				<span className="sr-only">Sebelumnya</span>
			</a>
			<a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true" />
				<span className="sr-only">Selanjutnya</span>
			</a> */}
		</div>
	);
}

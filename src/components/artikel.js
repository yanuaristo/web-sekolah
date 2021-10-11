import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, useHistory } from 'react-router-dom';
import CardArtikel from './card-artikel';
import AppLoading from './AppLoading';

export default function Artikel() {
	const history = useHistory();
	const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true);
			await axios.get('https://smkdiponegorosda.sch.id/api_smk/artikel').then((response) => {
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

	const handleClick = (id) => {
		return (event) => {
			history.push(`/artikel/detail/${id}`);
		};
	};

	if (error !== '') {
		return <p>ERROR: {error}</p>;
	}

	if (loading) {
		return <AppLoading />
	}

	return (
		<div className="blog">
			<div className="container">
				<div className="section-header text-center">
					<p>Berita Terkini</p>
					<h2>Artikel Terkini Kegiatan Siswa</h2>
				</div>
				<div className="row">
					{data.slice(0,3).map((element) => (
						<div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
							<span onClick={handleClick(element.id)}>
								<CardArtikel
									key={element.id}
									judul={element.judul}
									isi={element.isi_artikel}
									gambar={element.image}
									kategori={element.kategori}
									tgl={element.tgl}
									pembuat={element.user_pembuat}
								/>
							</span>
						</div>
					))}
				</div>
					<Route
						path="/"
						exact
						children={({ match, history }) => {
							return (
								<a
									href="/artikel"
									className="btn btn-warning col text-center"
									selected={match ? true : false}
									onClick={() => {
										history.push('/artikel');
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

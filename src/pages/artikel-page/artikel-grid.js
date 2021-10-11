import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CardArtikel from '../../components/card-artikel';
import AppPageLoading from '../../components/AppPageLoading';

export default function ArtikelGrid() {
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

	console.log('data',data)

	const handleClick = (id) => {
		return (event) => {
			history.push(`/artikel/detail/${id}`);
		};
	};

	if (error !== '') {
		return <p>ERROR: {error}</p>;
	}

	if (loading) {
		return <AppPageLoading />
	}

	return (
		<div className="about wow fadeInUp blog">
			<div className="container">
				<div className="section-header text-center">
					<h2>Berita Artikel</h2>
				</div>
				<div className="row">
					{data.map((element) => (
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
			</div>
		</div>
	);
}

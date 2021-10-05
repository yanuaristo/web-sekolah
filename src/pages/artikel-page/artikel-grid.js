import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CardArtikel from '../../components/card-artikel';

export default function ArtikelGrid() {
	const history = useHistory();
	const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			await axios.get('https://smkdiponegorosda.sch.id/api_smk/artikel').then((response) => {
				if (response.data.status === 200) {
					setData(response.data.data);
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

	console.log('datanya', data);
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

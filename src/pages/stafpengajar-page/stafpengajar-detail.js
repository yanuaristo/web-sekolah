import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function StafPengajarDetail({ match }) {
	const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);

	useEffect(() => {
		getData();
	});

	const getData = async () => {
		try {
			//   setLoading(true);
			await axios.get(`https://jsonplaceholder.typicode.com/users/${match.params.id}`).then((response) => {
				console.log('data', response);
				setData(response.data);
				// setLoading(false);
			});
		} catch (e) {
			if (e) {
				setError('Data Tidak ada');
			}
		}
	};

	if (error !== '') {
		return <p>ERROR: {error}</p>;
	}
	return (
		<div className="about wow fadeInUp" data-wow-delay="0.1s">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-5 col-md-6">
						<div className="about-img">
							<img src={`https://robohash.org/${match.params.id}`} alt="Gambar" />
						</div>
					</div>
					<div className="col-lg-7 col-md-6">
						<div className="section-header text-left">
							{/* <p>Welcome to Builderz</p> */}
							<h2>nama: {data.name}</h2>
						</div>
						<div className="about-text">
							<p>email : {data.email}</p>
							<p>Alamat : {data.website}</p>
						</div>
					</div>
				</div>
			</div>
			Detail Staf Pengajar {data.title}
		</div>
	);
}

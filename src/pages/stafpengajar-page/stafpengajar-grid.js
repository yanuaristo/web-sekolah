import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import CardStafPengajar from '../../components/card-stafpengajar';

export default function StafPengajarGrid() {
	const history = useHistory();
	const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			await axios.get('https://jsonplaceholder.typicode.com/users?_start=0&_limit=10').then((response) => {
				console.log('data',response.data);
				setData(response.data);
			});
		} catch (e) {
			if (e) {
				setError('Gagal Ambil Data');
			}
		}
	};

	const handleClick = (id) => {
		return (event) => {
			history.push(`/staf-pengajar/detail/${id}`);
		};
	};

	if (error !== '') {
		return <p>ERROR: {error}</p>;
	}

	// console.log('datanya',data)
	return (
		<div className="about wow fadeInUp team">
			<div className="container">
				<div className="section-header text-center">
					<h2>Staff Pengajar</h2>
				</div>
				<div className="row">
					{data.map((element) => (
						<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
							<span onClick={handleClick(element.id)}>
								<CardStafPengajar key={element.id} nama={element.name} nip={element.email} />
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

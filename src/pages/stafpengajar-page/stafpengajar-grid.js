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
			await axios.get('https://smkdiponegorosda.sch.id/api_smk/pengajar').then((response) => {
				if(response.data.status === 200){
					setData(response.data.data);
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

	console.log('cek_error',error);
	
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
								<CardStafPengajar key={element.id} nama={element.nama_guru} mapel={element.mata_pelajaran} foto={element.foto} linkedin={element.linkedin} facebook={element.facebook} twitter={element.twitter} instagram={element.instagram} />
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

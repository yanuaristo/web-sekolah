import React, { useState, useEffect } from 'react';
import axios from 'axios';

import parse from 'html-react-parser';

export default function SOTK() {
	const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true);
			await axios.get('https://smkdiponegorosda.sch.id/api_smk/sotk').then((response) => {
				if(response.data.status === 200){
					setData(response.data.data);
					setLoading(false);
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
		return <p>Tunggu Data</p>
	}

	return (
		<div className="about wow fadeInUp" data-wow-delay="0.1s">
			<div className="container">
				<div className="section-header text-center">
                    <h2>Struktur Organisasi</h2>
				</div>
                <div className="row">
				<img src={data.image} alt="sotk" />
				
				<p>{parse(data.keterangan)}</p>
                </div>
                
			</div>
		</div>
	);
}

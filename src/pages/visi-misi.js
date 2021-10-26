import React, { useState, useEffect } from 'react';
import axios from 'axios';

import parse from 'html-react-parser';

export default function VisiMisi() {
	const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true);
			await axios.get('https://smkdiponegorosda.sch.id/api_smk/visi').then((response) => {
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
		<div className="contact wow fadeInUp">
			<div className="container">
				<div className="section-header text-center">
					<h2>Visi dan Misi</h2>
				</div>
				<div className="row col-md-9">
					<p>
						<h2>VISI</h2>

						<blockquote
							style={{ padding: '10px 15px  15px', margin: '0 0 20px', borderLeft: '5px solid #eee' }}
						>
							<p>{data.visi}</p>
						</blockquote>

						<h2>MISI</h2>

						<blockquote
							style={{ padding: '10px 15px  15px', margin: '0 0 20px', borderLeft: '5px solid #eee' }}
						>
							{parse(data.misi)}
						</blockquote>
					</p>
				</div>
			</div>
		</div>
	);
}

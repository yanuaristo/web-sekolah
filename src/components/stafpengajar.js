import React, { useState, useEffect } from 'react';
import { Route,useHistory } from 'react-router-dom';
import axios from 'axios';
import CardStafPengajar from './card-stafpengajar';
import AppLoading from './AppLoading';

export default function StafPengajar() {
	const history = useHistory();
    const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);

    useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true)
			await axios.get('https://smkdiponegorosda.sch.id/api_smk/pengajar').then((response) => {
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

	const handleClick = (id) => {
		return (event) => {
			history.push(`/staf-pengajar/detail/${id}`);
		};
	};

	if (error !== '') {
		return <p>ERROR: {error}</p>;
	}

	if (loading) {
		return <AppLoading />
	}

	return (
		<div className="team">
			<div className="container">
				<div className="section-header text-center">
					<p>Perkenalkan</p>
					<h2>Staff Pengajar</h2>
				</div>
				<div className="row">
					{data.slice(0,4).map((element) => (
						<div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
							<span onClick={handleClick(element.id)}>
								<CardStafPengajar key={element.id} nama={element.nama_guru} mapel={element.mata_pelajaran} foto={element.foto} linkedin={element.linkedin} facebook={element.facebook} twitter={element.twitter} instagram={element.instagram} />
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
									href="/staf-pengajar"
									className="btn btn-warning col text-center"
									selected={match ? true : false}
									onClick={() => {
										history.push('/staf-pengajar');
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

import React, { useState, useEffect } from 'react';
import { Route,useHistory } from 'react-router-dom';
import axios from 'axios';
import CardStafPengajar from './card-stafpengajar';

export default function StafPengajar() {
	const history = useHistory();
    const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);

    useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			await axios.get('https://jsonplaceholder.typicode.com/users?_start=0&_limit=4').then((response) => {
				console.log('data', response.data);
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

	return (
		<div className="team">
			<div className="container">
				<div className="section-header text-center">
					<p>Perkenalkan</p>
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
		</div>
	);
}

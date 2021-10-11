import React, { useState, useEffect } from 'react';
import axios from 'axios';

import parse from 'html-react-parser';

import {
	FacebookShareButton,
	TwitterShareButton,
	WhatsappShareButton
} from 'react-share';

import { FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';
import AppPageLoading from '../../components/AppPageLoading';

export default function ArtikelDetail({ match }) {
	const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	useEffect(() => {
		async function getData(){
			try {
				  setLoading(true);
				await axios
					.get(`https://smkdiponegorosda.sch.id/api_smk/artikel/detail/${match.params.id}`)
					.then((response) => {
						console.log('data', response.data.data);
						setData(response.data.data);
						setLoading(false);
					});
			} catch (e) {
				if (e) {
					setError('Data Tidak ada');
				}
			}
		}
		
		getData();
	}, [match.params.id]);

	// const getData = async () => {
	// 	try {
	// 		//   setLoading(true);
	// 		await axios
	// 			.get(`https://smkdiponegorosda.sch.id/api_smk/artikel/detail/${match.params.id}`)
	// 			.then((response) => {
	// 				console.log('data', response.data.data);
	// 				setData(response.data.data);
	// 				// setLoading(false);
	// 			});
	// 	} catch (e) {
	// 		if (e) {
	// 			setError('Data Tidak ada');
	// 		}
	// 	}
	// };

	if (error !== '') {
		return <p>ERROR: {error}</p>;
	}

	if (loading) {
		return <AppPageLoading />
	}

	return (
		<div className="single">
			<div className="container">
				<div className="row">
					<div className="col-lg-8">
						<div className="single-content wow fadeInUp">
							<img src={data.image} alt="Gambar" />
							<h2>{data.judul}</h2>
							{parse(`${data.isi_artikel}`)}
						</div>
						<div>
							<p>Bagikan</p>
						</div>
						<div class="single-tags wow fadeInUp">
							<FacebookShareButton
								url={`https://smkdiponegorosda.sch.id/artikel/detail/${match.params.id}`}
								quote={data.judul}
								hashtag={'#smkdiponegorosidoarjo'}
								description={'aiueoffff'}
							>
								<FacebookIcon size={32} round/>
							</FacebookShareButton>
							<TwitterShareButton
								title={data.judul}
								url={`https://smkdiponegorosda.sch.id/artikel/detail/${match.params.id}`}
								hashtags={[ 'smkdiponegorosda', 'smkbisa','sekolahsidoarjo' ]}
							>
								<TwitterIcon size={32} round/>
							</TwitterShareButton>
							<WhatsappShareButton
								title={data.judul}
								url={`https://smkdiponegorosda.sch.id/artikel/detail/${match.params.id}`}
								separator={'	'}
							>
								<WhatsappIcon size={32} round/>
							</WhatsappShareButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

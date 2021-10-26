import React, { useState, useEffect } from 'react';
import axios from 'axios';

import parse from 'html-react-parser';

export default function ProfilSekolah() {
    const [ error, setError ] = React.useState('');
	const [ data, setData ] = useState([]);
	const [ loading, setLoading ] = useState(true);


    useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			setLoading(true);
			await axios.get('https://smkdiponegorosda.sch.id/api_smk/sambutan').then((response) => {
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
                    <div className="row align-items-center">
                        <div className="col-lg-5 col-md-6">
                            <div className="about-img">
                                <img src={data.image} alt="Gambar" />
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-6">
                            <div className="section-header text-left">
                                <h2>{data.judul}</h2>
                            </div>
                            <div className="about-text">
                                {/* {parse(data.isi)} */}
                                {parse(`${data.isi}`)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

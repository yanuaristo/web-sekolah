import React,{useState,useEffect} from "react"
import axios from "axios";

export default function ArtikelDetail({match}) {
    const [error, setError] = React.useState("");
	const [data, setData] = useState([])
    
    useEffect(() => {
		getData();
	});

	const getData = async () => {
		try {
			//   setLoading(true);
			await axios.get(`https://jsonplaceholder.typicode.com/posts/${match.params.id}`).then((response) => {
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
        <div className="single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="single-content wow fadeInUp">
                          <img src={`https://robohash.org/${match.params.id}`} alt="Gambar" />
                          <h2>{data.title}</h2>
                          <p>{data.body}</p>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

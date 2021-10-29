import parse from 'html-react-parser'

export default function CardArtikel(props) {
	
	const text = props.isi
	// console.log(text)
	const textpotong = text.slice(0, 100)
	console.log(textpotong)
	return (
		<div>
			<div className="blog-item">
				<div className="blog-img">
					{/* <img src={props.gambar} alt={props.judul}/> */}
					{/* <img src="img/blog-2.jpg" alt={props.judul} /> */}
					{props.gambar === '-' ? 
						<img src='img/no_image.jpg' alt="Team" /> :
						<img src={props.gambar} alt={props.judul} />
					}
				</div>
				<div className="blog-title">
					<h3>{props.judul}</h3>
					<a className="btn" href>
						+
					</a>
				</div>
				<div className="blog-meta">
					<p>
						By<a href>{props.pembuat}</a>
					</p>
					<p>
						dalam kategori<a href>{props.kategori}</a>
					</p>
				</div>
				<div className="blog-text">
					{parse(props.isi.slice(0,150))}
				</div>
			</div>
		</div>
	);
}

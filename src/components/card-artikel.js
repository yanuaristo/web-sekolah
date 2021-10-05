import parse from 'html-react-parser'

export default function CardArtikel(props) {
	return (
		<div>
			<div className="blog-item">
				<div className="blog-img">
					<img src="img/blog-1.jpg" alt={props.judul} />
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
					{parse(props.isi)}
				</div>
			</div>
		</div>
	);
}

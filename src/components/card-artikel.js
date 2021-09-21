export default function CardArtikel(props) {
	return (
		<div>
			<div className="blog-item">
				<div className="blog-img">
					<img src="img/blog-1.jpg" alt="Artikel" />
				</div>
				<div className="blog-title">
					<h3>{props.judul}</h3>
					<a className="btn" href>
						+
					</a>
				</div>
				<div className="blog-meta">
					<p>
						Oleh<a href>Admin</a>
					</p>
					<p>
						dalam<a href>Kesiswaan</a>
					</p>
				</div>
				<div className="blog-text">
					<p>{props.isi}</p>
				</div>
			</div>
		</div>
	);
}

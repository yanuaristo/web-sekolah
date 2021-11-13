export default function CardGaleri(props) {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
						<div className="service-item">
							<div className="service-img">
								<img src={props.foto} alt="Galeri" />
								<div className="service-overlay">
									<p>{props.keterangan}</p>
								</div>
							</div>
							<div className="service-text">
								<h3>{props.judul}</h3>
								<a className="btn" href={props.foto} data-lightbox="service">
									+
								</a>
							</div>
						</div>
					</div>
    )
}

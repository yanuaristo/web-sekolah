export default function CardStafPengajar(props) {
    
    return (
        <div>
						<div className="team-item btn">
							<div className="team-img">
								<img src="img/about.jpeg" alt="Team" />
							</div>
							<div className="team-text">
								<h2>{props.nama}</h2>
								<p>{props.nip}</p>
							</div>
							<div className="team-social">
								<a className="social-tw" href="#twtter">
									<i className="fab fa-twitter" />
								</a>
								<a className="social-fb" href="#fesbuk">
									<i className="fab fa-facebook-f" />
								</a>
								<a className="social-li" href="#linkedin">
									<i className="fab fa-linkedin-in" />
								</a>
								<a className="social-in" href="#instagram">
									<i className="fab fa-instagram" />
								</a>
							</div>
						</div>
					</div>
    )
}

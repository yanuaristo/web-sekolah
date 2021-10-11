export default function CardStafPengajar(props) {
	return (
		<div>
			<div className="team-item btn">
				<div className="team-img">
					{props.foto === '-' ? 
						<img src='img/no-photo.jpg' alt="Team" /> :
						<img src={props.foto} alt={props.nama} />
					}
				</div>
				<div className="team-text">
					<h2>{props.nama}</h2>
					<p>{props.mapel}</p>
				</div>
				{/* <Jajal /> */}
				<div className="team-social">
					{props.twitter === '-' ? (
						<span />
					) : (
						<a className="social-tw" href={props.twitter} target="_blank" rel="noopener noreferrer">
							<i class="fab fa-twitter" />
						</a>
					)}
					{props.facebook === '-' ? (
						<span />
					) : (
						<a className="social-fb" href={props.facebook} target="_blank" rel="noopener noreferrer">
							<i class="fab fa-facebook-f" />
						</a>
					)}
					{props.linkedin === '-' ? (
						<span />
					) : (
						<a className="social-li" href={props.linkedin} target="_blank" rel="noopener noreferrer">
							<i class="fab fa-linkedin-in" />
						</a>
					)}
					{props.instagram === '-' ? (
						<span />
					) : (
						<a className="social-in" href={props.instagram} target="_blank" rel="noopener noreferrer">
							<i class="fab fa-instagram" />
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

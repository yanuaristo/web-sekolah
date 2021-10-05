export default function CardStafPengajar(props) {
	const Twitter = () => {
		return (
			<div>
				<a className="social-tw" href={props.twitter} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-twitter" />
				</a>
			</div>
		);
	};

	const Facebook = () => {
		return (
			<div>
				<a className="social-fb" href={props.facebook} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-facebook-f" />
				</a>
			</div>
		);
	};

	const Instagram = () => {
		return (
			<div>
				<a className="social-in" href={props.instagram} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-instagram" />
				</a>
			</div>
		);
	};

	const Linkedin = () => {
		return (
			<div>
				<a className="social-li" href={props.linkedin} target="_blank" rel="noopener noreferrer">
					<i className="fab fa-linkedin-in" />
				</a>
			</div>
		);
	};

	return (
		<div>
			<div className="team-item btn">
				<div className="team-img">
					<img src="img/about.jpeg" alt="Team" />
				</div>
				<div className="team-text">
					<h2>{props.nama}</h2>
					<p>{props.mapel}</p>
				</div>
				{/* <Jajal /> */}
				<div className="team-social">
					
					{props.twitter === '-' ? null : <Twitter />}
					{props.facebook === '-' ? null : <Facebook />}
					{props.linkedin === '-' ? null : <Linkedin />}
					{props.instagram === '-' ? null : <Instagram />}
					
				</div>
			</div>
		</div>
	);
}

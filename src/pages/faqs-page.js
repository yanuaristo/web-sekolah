import Faqs from "../components/faqs";

export default function FaqsPage() {
    return (
        <div className="about wow fadeInUp" data-wow-delay="0.1s">
			<div className="container">
				<div className="section-header text-center">
					<h2>Faqs</h2>
				</div>
                <div className="row">
					<Faqs />
                </div>
			</div>
		</div>
    )
}

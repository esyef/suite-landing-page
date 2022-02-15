import Buttons from "./Buttons"
import heroSmall from "../assets/image-hero-360.png"
import heroMedium from "../assets/image-hero-760.png"
import heroLarge from "../assets/image-hero-1024.png"

const Hero = () => {
	return (
		<section className="row hero">
			<div className="col-2-4 hero-description">
				<h1 className="title-primary">
					A <span className="assent-color-dark"> super solution </span> for your{" "}
					<span className="assent-color-dark"> business. </span>
				</h1>

				<p className="text">
					Our marketing and sales automations help you scale your outreach to get more leads for your company.
				</p>

				<Buttons className="btn-secondary">request beta access</Buttons>
			</div>

			<div className="col-2-4 col-1-4">
				<figure className="picture-hero-container">
					<img src={heroSmall} alt="" className="hero-small" />
					<img src={heroMedium} alt="" className="hero-medium" />
					<img src={heroLarge} alt="" className="hero-large" />
				</figure>
			</div>

			<div className="col-4-4 col-1-4">
				<ul className="hero-statistics">
					<li className="element-statistic">
						2k+ <span className="assent-color-gray">companies</span>
					</li>
					<li className="element-statistic">
						8 <span className="assent-color-gray">languages</span>
					</li>
					<li className="element-statistic">
						1.2M <span className="assent-color-gray">leads</span>
					</li>
				</ul>
			</div>
		</section>
	)
}

export default Hero

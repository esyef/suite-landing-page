import logoSvg from "../assets/suite.svg"
import iconFacebook from "../assets/icon-facebook.svg"
import iconTwitter from "../assets/icon-twitter.svg"
import iconInstagram from "../assets/icon-instagram.svg"

const Footer = () => {
	return (
		<footer className="footer">
			<div className=" footer-content">
				<figure>
					<img src={logoSvg} alt="Suite logo" />
				</figure>

				<p>Copyright - Suite</p>

				<div className="social-icons">
					<img src={iconFacebook} className="social-icon" />
					<img src={iconTwitter} className="social-icon" />
					<img src={iconInstagram} className="social-icon" />
				</div>
			</div>
			<div>
				<p className="credits">
					Design of {" "}
					<a
						href="https://www.frontendmentor.io/challenges/suite-landing-page-tj_eaU-Ra"
						target="_blank"
						className="link"
					>
						Frontend Mentor
					</a>, Coder{" "}
					<a href="http://yefweb.com/" target="_blank" className="link">
						Yeferson
					</a>
				</p>
			</div>
		</footer>
	)
}

export default Footer

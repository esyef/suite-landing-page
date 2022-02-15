import Buttons from "./Buttons"
import logo from "../assets/suite.svg"

const Header = () => {
	return (
		<header className="flex">
			<figure>
				<img src={logo} alt="suite logo header" />
			</figure>
			<Buttons className="btn-primary">request beta access</Buttons>
		</header>
	)
}

export default Header

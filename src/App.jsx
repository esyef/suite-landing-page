import { Fragment } from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Testimony from "./components/Testimony"

const App = () => {
	return (
		<Fragment>
			<div className="wrapper">
				<Header />
				<Hero />
			</div>

			<div className="bottom-page">
				<Testimony />

				<Footer />
			</div>
		</Fragment>
	)
}

export default App

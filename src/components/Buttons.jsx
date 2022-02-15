const Buttons = ({ children, className }) => {
	return (
		<a href="#" className={`${className} btn`}>
			{children}
		</a>
	)
}

export default Buttons

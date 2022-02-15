import pictureSmall from "../assets/image-jeremy-360.png"
import pictureMedium from "../assets/image-jeremy-760.png"
import pictureLarge from "../assets/image-jeremy-1024.png"

const Testimony = () => {
	return (
		<article className="testimony">
			<div className="bg-dark">
				<figure className="figure-user">
					<img src={pictureSmall} alt="Jeremy Robinson" className="image-user-small" />
					<img src={pictureMedium} alt="Jeremy Robinson" className="image-user-medium" />
					<img src={pictureLarge} alt="Jeremy Robinson" className="image-user-large" />
				</figure>

				<div className="testimony-content">
					<h2 className="title-secondary">
						It just <span className="assent-white">works.</span>
					</h2>

					<p className="text">
						“I really like how it is an all-in-one solution that handle many of the tasks that you would
						normally need separate tools to do the same job. This thing is a miracle worker.”
					</p>

					<p className="user-name">
						Jeremy Robinson
						<span className="user-assent-grey">CMO, FYLO</span>
					</p>
				</div>
			</div>
		</article>
	)
}

export default Testimony

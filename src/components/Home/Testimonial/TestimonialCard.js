import React from "react";

const TestimonialCard = ({ testimonial }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="testimonial-card py-4 my-3">
				<div>
					<img src={testimonial.img} alt={testimonial.author} style={{ maxWidth: "64px" }} />
					<div>
						<h3 className="card-title mb-1">{testimonial.author}</h3>
						<h5 className="card-subtitle">{testimonial.designation}</h5>
					</div>
				</div>
				<p className="card-txt m-0">{testimonial.message}</p>
			</div>
		</div>
	);
};

export default TestimonialCard;

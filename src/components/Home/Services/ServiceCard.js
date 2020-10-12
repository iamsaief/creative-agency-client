import React from "react";

const ServiceCard = ({ service }) => {
	return (
		<div className="col-lg-4 col-md-6">
			<div className="service-card p-4 ">
				<img src={service.image} alt={service.title} style={{ maxWidth: "74px" }} />
				<h3 className="card-title pt-4">{service.title}</h3>
				<p className="card-txt px-xl-2">{service.description}</p>
			</div>
		</div>
	);
};

export default ServiceCard;

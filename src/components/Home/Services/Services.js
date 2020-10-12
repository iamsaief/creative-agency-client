import React from "react";
import "./Services.css";
import service1 from "../../../images/icons/service1.png";
import service2 from "../../../images/icons/service2.png";
import service3 from "../../../images/icons/service3.png";
import ServiceCard from "./ServiceCard";

const Services = () => {
	const servicesData = [
		{
			image: service1,
			title: "Web & Mobile design",
			description: "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
		},
		{
			image: service2,
			title: "Graphic design",
			description:
				"Amazing flyers, social media posts and brand representations that would make your brand stand out.",
		},
		{
			image: service3,
			title: "Web development",
			description:
				"With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
		},
	];
	return (
		<section className="services py-5">
			<div className="container text-center py-xl-3">
				<h4 className="section-title">
					Provide awesome <span className="brand-green">services</span>
				</h4>
				<div className="services-content pt-5">
					<div className="row">
						{servicesData.map((service) => (
							<ServiceCard service={service}></ServiceCard>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;

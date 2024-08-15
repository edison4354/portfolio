import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Experience"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-header">
								<img
									src="https://media.licdn.com/dms/image/C4D0BAQGKL_RPA6YaQA/company-logo_200_200/0/1631310751511?e=1727308800&v=beta&t=3HXn6TB_GS2Tk-m6m_4jE6IeVBSNeSprXBHN2jp9ZWE"
									alt="facebook"
									className="work-image"
								/>
								<div className="work-title">App Academy</div>
								<div className="work-subtitle">
									Student
								</div>
								<div className="work-duration">March 2024 - June 2024</div>
							</div>
							<div className="work-description"> 
								Rigorous 1000-hour software development bootcamp with &lt;7% acceptance rate
							</div>
						</div>
						<div className="work">
							<div className="work-header">
								<img
									src="https://media.licdn.com/dms/image/C4D0BAQHIniXX23n6Aw/company-logo_200_200/0/1630567917557/media_mobilize_logo?e=1727308800&v=beta&t=TGbjB5YzK4PYIXaFWv3b1gpOQGF168rGg5Y1cRpvYSg"
									alt="facebook"
									className="work-image"
								/>
								<div className="work-title">Media Mobilize</div>
								<div className="work-subtitle">
									Software Engineer Intern
								</div>
								<div className="work-duration">Jul 2022 - Sep 2022</div>
							</div>
							<div className="work-description"> 
								<ul>
									<li>
										Web Scraping and Data Collection: Developed and deployed Python scripts to efficiently scrape and aggregate marketing and advertising data from competitors' newsletters. This initiative provided critical insights that informed and enhanced the company's marketing strategy.
									</li>
									<li>
										API Development and Integration: Contributed to the design and implementation of a user referral tracking API, seamlessly integrating it with Shopify to streamline the reward granting process, thereby improving user engagement and retention.
									</li>
									<li>
										UI/UX Collaboration and Frontend Development: Worked closely with the UI/UX designer to create wireframes and initiate frontend development for a new sports newsletter service. This project significantly boosted the company's daily readership to over 200,000.
									</li>
									<li>
										Full-Stack Development: Gained hands-on experience with React, Figma, JavaScript, MongoDB, Express, Material UI, and TypeScript. Developed both frontend and backend components of the newsletter service, enhancing my skills in full-stack web development and API integration.
									</li>
								</ul>
							</div>
						</div>

						<div className="work">
							<div className="work-header">
								<img
									src="https://media.licdn.com/dms/image/C560BAQGkGfW7CAIbAw/company-logo_100_100/0/1630587459543/tutr_co_logo?e=1727308800&v=beta&t=tjukKPgEcMjmeACNbK7pGXwyv_p7fhfl7On7Jsm2ymE"
									alt="twitter"
									className="work-image"
								/>
								<div className="work-title">Tutr Co</div>
								<div className="work-subtitle">
									Full Stack Developer 
								</div>
								<div className="work-duration">Sep 2020 - Aug 2021</div>
							</div>
							<div className="work-description"> 
								<ul>
									<li>Product Development: Contributed to the development of the beta version of Tutr Co's mentoring product, Mentorly, which attracted over 2,000 site visitors within the first month, exceeding initial expectations and significantly impacting the company's growth trajectory.</li>
									<li>User Engagement: Implemented efficient and user-friendly features that improved user engagement and satisfaction by 30%, enhancing the overall user experience and retention rates.</li>
									<li>Technical Support and Maintenance: Provided ongoing technical and maintenance support for Mentorly, ensuring continuous operation and promptly addressing technical issues, reducing downtime by 20%.</li>
									<li>Technologies Utilized: Leveraged a diverse tech stack including Kubernetes, Docker, Figma, Webflow, React, JavaScript, Node.js, Express, MongoDB, Jest, and Mongoose to build and maintain robust software solutions.</li>
								</ul>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;

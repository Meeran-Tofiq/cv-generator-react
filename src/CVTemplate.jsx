import { useState } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

export default function CVTemplate() {
	const [generalInfo, setGeneralInfo] = useState({
		firstName: "",
		lastName: "",
		title: "",
		email: "",
		phone: "",
	});
	const [education, setEducation] = useState([]);
	const [experience, setExperience] = useState([]);

	return (
		<div className="template">
			<GeneralInfoForm info={generalInfo} onChange={setGeneralInfo} />
			<span>Education</span>
			<button
				type="button"
				onClick={() =>
					setEducation([
						...education,
						{
							id: Math.random() * 1000,
						},
					])
				}
			>
				+
			</button>
			<ul>
				{education.map((edu) => (
					<EducationForm
						education={education}
						educationId={edu.id}
						setEducation={setEducation}
					/>
				))}
			</ul>
			<span>Experience</span>
			<button
				type="button"
				onClick={() =>
					setExperience([
						...experience,
						{
							id: Math.random() * 1000,
						},
					])
				}
			>
				+
			</button>
			<ul>
				{experience.map((exp) => (
					<ExperienceForm
						experience={experience}
						experienceId={exp.id}
						setExperience={setExperience}
					/>
				))}
			</ul>
		</div>
	);
}

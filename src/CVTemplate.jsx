import { useState } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import EducationForm from "./EducationForm";

export default function CVTemplate() {
	const [generalInfo, setGeneralInfo] = useState({
		firstName: "",
		lastName: "",
		title: "",
		email: "",
		phone: "",
	});
	const [education, setEducation] = useState([]);

	return (
		<div className="template">
			<GeneralInfoForm info={generalInfo} onChange={setGeneralInfo} />
			<span>Add Education</span>
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
						obj={edu}
						educationId={edu.id}
						setEducation={setEducation}
					/>
				))}
			</ul>
		</div>
	);
}

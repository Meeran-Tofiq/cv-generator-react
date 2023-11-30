import { useState } from "react";
import GeneralInfoForm from "./GeneralInfoForm";
import Education from "./EducationForm";
import Experience from "./ExperienceForm";

export default function CVTemplate({
	generalInfo,
	setGeneralInfo,
	education,
	setEducation,
	experience,
	setExperience,
}) {
	return (
		<div className="template">
			<GeneralInfoForm info={generalInfo} onChange={setGeneralInfo} />
			<Education education={education} setEducation={setEducation} />
			<Experience experience={experience} setExperience={setExperience} />
		</div>
	);
}

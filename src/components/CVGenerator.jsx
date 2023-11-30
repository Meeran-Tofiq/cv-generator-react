import CVPreview from "./CVPreview";
import CVTemplate from "./CVTemplate";
import { useState } from "react";

export default function CVGenerator() {
	const [generalInfo, setGeneralInfo] = useState({});
	const [education, setEducation] = useState([]);
	const [experience, setExperience] = useState([]);

	return (
		<main>
			<CVTemplate
				generalInfo={generalInfo}
				setGeneralInfo={setGeneralInfo}
				education={education}
				setEducation={setEducation}
				experience={experience}
				setExperience={setExperience}
			/>
			<CVPreview
				generalInfo={generalInfo}
				education={education}
				experience={experience}
			/>
		</main>
	);
}

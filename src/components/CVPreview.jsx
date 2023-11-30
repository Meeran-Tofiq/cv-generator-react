import EducationPreview from "./EducationPreview";
import ExperiencePreview from "./ExperiencePreview";
import GeneralPreview from "./GeneralPreview";

export default function CVPreview({ generalInfo, education, experience }) {
	return (
		<div className="preview">
			<GeneralPreview generalInfo={generalInfo} />
			<EducationPreview education={education} />
			<ExperiencePreview experience={experience} />
		</div>
	);
}

import EducationPreview from "./EducationPreview";
import GeneralPreview from "./GeneralPreview";

export default function CVPreview({ generalInfo, education, experience }) {
	return (
		<div className="preview">
			<GeneralPreview generalInfo={generalInfo} />
			<EducationPreview education={education} />
		</div>
	);
}

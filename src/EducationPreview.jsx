export default function EducationPreview({ education }) {
	return (
		<div className="education-preview">
			{education.map((edu) => (
				<li key={edu.key}>
					<Education edu={edu} />
				</li>
			))}
		</div>
	);
}

function Education({ edu }) {
	return (
		<>
			<h2>{edu.institution}</h2>
			<span className="duration">
				{edu.startYear} - {edu.endYear}
			</span>
			<span className="degree">{edu.degree}</span>
			<span className="location">{edu.location}</span>
		</>
	);
}

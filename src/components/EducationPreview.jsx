export default function EducationPreview({ education }) {
	return (
		<div className="education">
			<h2>Education</h2>
			<ul>
				{education.map((edu) => (
					<li key={edu.key}>
						<Education edu={edu} />
					</li>
				))}
			</ul>
		</div>
	);
}

function Education({ edu }) {
	return (
		<>
			<h3>{edu.institution}</h3>
			<span className="duration">
				{edu.startYear} - {edu.endYear}
			</span>
			<span className="location">{edu.location}</span>
			<span className="degree">{edu.degree}</span>
		</>
	);
}

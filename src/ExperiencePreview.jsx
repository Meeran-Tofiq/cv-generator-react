export default function ExperiencePreview({ experience }) {
	return (
		<div className="expcation-preview">
			{experience.map((exp) => (
				<li key={exp.key}>
					<Experience exp={exp} />
				</li>
			))}
		</div>
	);
}

function Experience({ exp }) {
	return (
		<>
			<h2>{exp.institution}</h2>
			<span className="duration">
				{exp.startDate} - {exp.endDate || "present"}
			</span>
			<span className="position">{exp.position}</span>
			<span className="location">{exp.location}</span>
			<p className="descrption">{exp.description}</p>
		</>
	);
}

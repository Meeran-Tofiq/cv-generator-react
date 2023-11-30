export default function ExperiencePreview({ experience }) {
	return (
		<div className="experience">
			<h2>Experience</h2>
			<ul>
				{experience.map((exp) => (
					<li key={exp.key}>
						<Experience exp={exp} />
					</li>
				))}
			</ul>
		</div>
	);
}

function Experience({ exp }) {
	return (
		<>
			<h3>{exp.institution}</h3>
			<span className="duration">
				{exp.startDate} - {exp.endDate || "present"}
			</span>
			<span className="position">{exp.position}</span>
			<span className="location">{exp.location}</span>
			<p className="descrption">{exp.description}</p>
		</>
	);
}

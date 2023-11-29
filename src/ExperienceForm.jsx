export default function Experience({ experience, setExperience }) {
	return (
		<>
			<span>Experience</span>
			<button
				type="button"
				className="add"
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
		</>
	);
}

function ExperienceForm({ experience, experienceId, setExperience }) {
	function handleInstitutionChange(e) {
		setExperience(
			experience.map((exp) => {
				if (exp.id === experienceId) {
					return { ...exp, institution: e.target.value };
				} else {
					return exp;
				}
			})
		);
	}

	function handlePositionChange(e) {
		setExperience(
			experience.map((exp) => {
				if (exp.id === experienceId) {
					return { ...exp, position: e.target.value };
				} else {
					return exp;
				}
			})
		);
	}

	function handleStartDateChange(e) {
		setExperience(
			experience.map((exp) => {
				if (exp.id === experienceId) {
					return { ...exp, startDate: e.target.value };
				} else {
					return exp;
				}
			})
		);
	}

	function handleEndDateChange(e) {
		setExperience(
			experience.map((exp) => {
				if (exp.id === experienceId) {
					return { ...exp, endDate: e.target.value };
				} else {
					return exp;
				}
			})
		);
	}

	function handleLocationChange(e) {
		setExperience(
			experience.map((exp) => {
				if (exp.id === experienceId) {
					return { ...exp, location: e.target.value };
				} else {
					return exp;
				}
			})
		);
	}

	function handleDescriptionChange(e) {
		setExperience(
			experience.map((exp) => {
				if (exp.id === experienceId) {
					return { ...exp, description: e.target.value };
				} else {
					return exp;
				}
			})
		);
	}

	return (
		<li key={experienceId}>
			<form>
				<label>
					Institution:{" "}
					<input
						type="text"
						id="institution"
						onChange={handleInstitutionChange}
					/>
				</label>
				<label>
					Position:{" "}
					<input type="text" id="position" onChange={handlePositionChange} />
				</label>
				<label>
					Start Date:{" "}
					<input type="date" id="start-date" onChange={handleStartDateChange} />
				</label>
				<label>
					End Date:{" "}
					<input type="date" id="end-date" onChange={handleEndDateChange} />
				</label>
				<label>
					Location:{" "}
					<input type="text" id="location" onChange={handleLocationChange} />
				</label>
			</form>

			<button
				className="delete"
				onClick={() =>
					setExperience(experience.filter((exp) => exp.id !== experienceId))
				}
			>
				DELETE
			</button>
		</li>
	);
}

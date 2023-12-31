import { useState } from "react";

export default function Education({ education, setEducation }) {
	return (
		<div className="education">
			<span>
				Education
				<button
					type="button"
					className="add"
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
			</span>
			<ul>
				{education.map((edu) => (
					<EducationForm
						education={education}
						educationId={edu.id}
						setEducation={setEducation}
					/>
				))}
			</ul>
		</div>
	);
}

function EducationForm({ education, educationId, setEducation }) {
	function handleInstitutionChange(e) {
		setEducation(
			education.map((edu) => {
				if (edu.id === educationId) {
					return { ...edu, institution: e.target.value };
				} else {
					return edu;
				}
			})
		);
	}

	function handleDegreeChange(e) {
		setEducation(
			education.map((edu) => {
				if (edu.id === educationId) {
					return { ...edu, degree: e.target.value };
				} else {
					return edu;
				}
			})
		);
	}

	function handleStartYearChange(e) {
		setEducation(
			education.map((edu) => {
				if (edu.id === educationId) {
					return { ...edu, startYear: e.target.value };
				} else {
					return edu;
				}
			})
		);
	}

	function handleEndYearChange(e) {
		setEducation(
			education.map((edu) => {
				if (edu.id === educationId) {
					return { ...edu, endYear: e.target.value };
				} else {
					return edu;
				}
			})
		);
	}

	function handleLocationChange(e) {
		setEducation(
			education.map((edu) => {
				if (edu.id === educationId) {
					return { ...edu, location: e.target.value };
				} else {
					return edu;
				}
			})
		);
	}

	return (
		<li key={educationId}>
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
					Start Year:{" "}
					<input
						type="number"
						id="start-year"
						onChange={handleStartYearChange}
					/>
				</label>
				<label>
					End Year:{" "}
					<input type="number" id="end-year" onChange={handleEndYearChange} />
				</label>
				<label>
					Location:{" "}
					<input type="text" id="location" onChange={handleLocationChange} />
				</label>
				<label>
					Degree:{" "}
					<input type="text" id="degree" onChange={handleDegreeChange} />
				</label>
			</form>

			<button
				className="delete"
				onClick={() =>
					setEducation(education.filter((edu) => edu.id !== educationId))
				}
			>
				DELETE
			</button>
		</li>
	);
}

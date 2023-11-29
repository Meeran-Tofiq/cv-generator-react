export default function GeneralInfoForm({ info, onChange }) {
	function handleFirstNameChange(e) {
		onChange({ ...info, firstName: e.target.value });
	}

	function handleLastNameChange(e) {
		onChange({ ...info, lastName: e.target.value });
	}

	function handleTitleChange(e) {
		onChange({ ...info, title: e.target.value });
	}

	function handleEmailChnage(e) {
		onChange({ ...info, email: e.target.value });
	}

	function handlePhoneChnage(e) {
		onChange({ ...info, phone: e.target.value });
	}

	return (
		<div className="general-info">
			<form>
				<label>
					First Name:{" "}
					<input type="text" id="first-name" onChange={handleFirstNameChange} />
				</label>
				<label>
					Last Name:{" "}
					<input type="text" id="last-name" onChange={handleLastNameChange} />
				</label>
				<label>
					Title: <input type="text" id="title" onChange={handleTitleChange} />
				</label>
				<label>
					Email: <input type="email" id="email" onChange={handleEmailChnage} />
				</label>
				<label>
					Phone no.:{" "}
					<input type="number" id="phone-no" onChange={handlePhoneChnage} />
				</label>
			</form>
		</div>
	);
}

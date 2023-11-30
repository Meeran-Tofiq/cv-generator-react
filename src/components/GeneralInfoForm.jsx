export default function GeneralInfoForm({ info, onChange }) {
	function handleFirstNameChange(e) {
		onChange({ ...info, firstName: e.target.value });
	}

	function handleLastNameChange(e) {
		onChange({ ...info, lastName: e.target.value });
	}

	function handleAddressChange(e) {
		onChange({ ...info, address: e.target.value });
	}

	function handleEmailChnage(e) {
		onChange({ ...info, email: e.target.value });
	}

	function handlePhoneChnage(e) {
		onChange({ ...info, phone: e.target.value });
	}

	return (
		<div className="general-info">
			<span>General Information</span>
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
					Address:{" "}
					<input type="text" id="address" onChange={handleAddressChange} />
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

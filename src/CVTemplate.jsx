import { useState } from "react";
import GeneralInfoForm from "./GeneralInfoForm";

export default function CVTemplate() {
	const [generalInfo, setGeneralInfo] = useState({
		firstName: "",
		lastName: "",
		title: "",
		email: "",
		phone: "",
	});

	return (
		<div className="template">
			<GeneralInfoForm info={generalInfo} onChange={setGeneralInfo} />
		</div>
	);
}

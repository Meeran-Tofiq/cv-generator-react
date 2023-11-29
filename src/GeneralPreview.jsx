export default function GeneralPreview({ generalInfo }) {
	return (
		<div className="general-info">
			<h1>{generalInfo.firstName + " " + generalInfo.lastName}</h1>
			<span className="email">{generalInfo.email}</span>
			<span className="phone">{generalInfo.phone}</span>
			<span className="address">{generalInfo.address}</span>
		</div>
	);
}

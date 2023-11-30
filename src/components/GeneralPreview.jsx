export default function GeneralPreview({ generalInfo }) {
	return (
		<div className="general-info">
			<h1>{generalInfo.firstName + " " + generalInfo.lastName}</h1>
			<div>
				<span className="address">{generalInfo.address}</span>
				<span className="email">{generalInfo.email}</span>
				<span className="phone">{generalInfo.phone}</span>
			</div>
		</div>
	);
}

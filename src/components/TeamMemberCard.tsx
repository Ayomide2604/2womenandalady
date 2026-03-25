import Image from "next/image";

interface TeamMemberCardProps {
	member: {
		id: string;
		name: string;
		image_url: string | null;
		active: boolean;
	};
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
	return (
		<div className="team-item">
			<div className="team-img">
				{member.image_url ? (
					<img src={member.image_url} alt={member.name} />
				) : (
					<div
						className="d-flex align-items-center justify-content-center bg-light"
						style={{ height: "280px" }}
					>
						<span className="text-muted">No Image</span>
					</div>
				)}
			</div>
			<div className="team-text">
				<h2>{member.name}</h2>
				<div className="team-social">
					<a
						className="btn btn-warning text-dark fw-bold"
						href={`https://wa.me/17807091707?text=Hello%20I%20would%20like%20to%20book%20${encodeURIComponent(member.name)}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						Book Cleaner
					</a>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberCard;

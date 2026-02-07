import Image from "next/image";
import { TeamMember } from "@/data/team";

interface TeamMemberCardProps {
	member: TeamMember;
}

const TeamMemberCard = ({ member }: TeamMemberCardProps) => {
	return (
		<div className="team-item">
			<div className="team-img">
				<img src={member.image} alt={member.imageAlt} />
			</div>
			<div className="team-text">
				<h2>{member.name}</h2>
				<h3>{member.role}</h3>
				<div className="team-social">
					<a
						className="btn btn-warning text-dark fw-bold"
						href={`https://wa.me/17807091707?text=Hello%20I%20would%20Like%20to%20book%20${encodeURIComponent(member.name)}`}
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

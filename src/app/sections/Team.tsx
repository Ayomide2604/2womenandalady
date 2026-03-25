"use client";

import { useEffect, useState } from "react";
import TeamMemberCard from "@/components/TeamMemberCard";
import { supabase } from "@/lib/supabase";

const Team = () => {
	const [teamMembers, setTeamMembers] = useState<any[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchTeamMembers = async () => {
			const { data, error } = await supabase
				.from("team_members")
				.select("*")
				.eq("active", true)
				.order("created_at", { ascending: false });

			if (error) console.error("Failed to fetch team members:", error);
			else setTeamMembers(data || []);
			setLoading(false);
		};

		fetchTeamMembers();
	}, []);

	// Don't render the section if there are no active team members
	if (!loading && teamMembers.length === 0) {
		return null;
	}

	if (loading) {
		return (
			<div className="team">
				<div className="container">
					<div className="section-header">
						<p>Team Member</p>
						<h2>Meet Our Expert Cleaners</h2>
					</div>
					<div className="text-center">Loading team members...</div>
				</div>
			</div>
		);
	}

	return (
		<div className="team">
			<div className="container">
				<div className="section-header">
					<p>Team Member</p>
					<h2>Meet Our Expert Cleaners</h2>
				</div>
				<div className="row">
					{teamMembers.map((member) => (
						<div key={member.id} className="col-lg-3 col-md-6">
							<TeamMemberCard member={member} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Team;

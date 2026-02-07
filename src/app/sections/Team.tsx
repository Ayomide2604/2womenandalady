import TeamMemberCard from '@/components/TeamMemberCard';
import { teamMembers } from '@/data/team';

const Team = () => {
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

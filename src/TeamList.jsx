// TeamList.js
import React from 'react';

const TeamList = ({ teamMembers, onDeleteTeamMember }) => {
  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {teamMembers.map(member => (
          <li key={member.id}>
            {member.name}
            <button onClick={() => onDeleteTeamMember(member.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;


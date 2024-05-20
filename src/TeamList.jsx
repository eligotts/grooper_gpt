// TeamList.js
import React from 'react';

const TeamList = ({ teamMembers }) => {
  return (
    <div>
      <h2>Team Members</h2>
      <ul>
        {teamMembers.map((member, index) => (
          <li key={index}>{member.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamList;

// SubTeamList.js
import React from 'react';

const SubTeamList = ({ subTeams }) => {
  return (
    <div>
      <h2>Sub Teams</h2>
      <ul>
        {subTeams.map((subTeam, index) => (
          <li key={index}>
            <strong>{subTeam.name}</strong> ({subTeam.members.length} members)
            <ul>
              {subTeam.members.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubTeamList;

// Dashboard.js
import React, { useState } from 'react';
import TeamList from './TeamList';
import SubTeamList from './SubTeamList';
import CreateSubTeamForm from './CreateSubTeamForm';

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    { name: 'John Doe' },
    { name: 'Jane Smith' },
    { name: 'Bob Johnson' },
    { name: 'Sarah Williams' },
    { name: 'Michael Brown' },
    { name: 'Emily Davis' },
    { name: 'David Wilson' },
    { name: 'Olivia Taylor' },
    { name: 'James Anderson' },
    { name: 'Sophia Martinez' },
    { name: 'Daniel Thomas' },
    { name: 'Ava Garcia' },
    { name: 'Matthew Robinson' },
    { name: 'Isabella Clark' },
    { name: 'Joseph Rodriguez' },
    { name: 'Mia Lewis' },
    { name: 'Andrew Lee' },
    { name: 'Emma Hall' },
    { name: 'William Young' },
    { name: 'Abigail Allen' }
  ]);
  const [subTeams, setSubTeams] = useState([]);

  const handleCreateSubTeam = (subTeamName) => {
    // Calculate number of members per sub team
    const membersPerSubTeam = Math.ceil(teamMembers.length / (subTeams.length + 1));
    
    // Distribute members among sub teams
    const newSubTeams = [];
    for (let i = 0; i < subTeams.length + 1; i++) {
      const subTeamMembers = teamMembers.slice(i * membersPerSubTeam, (i + 1) * membersPerSubTeam);
      newSubTeams.push({ name: subTeamName, members: subTeamMembers.map(member => member.name) });
    }
    setSubTeams(newSubTeams);
  };

  return (
    <div>
      <h1>Team Dashboard</h1>
      <TeamList teamMembers={teamMembers} />
      <SubTeamList subTeams={subTeams} />
      <CreateSubTeamForm onCreateSubTeam={handleCreateSubTeam} />
    </div>
  );
};

export default App;


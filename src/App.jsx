// Dashboard.js
import React, { useState } from 'react';
import TeamList from './TeamList';
import SubTeamList from './SubTeamList';
import CreateSubTeamForm from './CreateSubTeamForm';
import CreateTeamMemberForm from './CreateTeamMemberForm';

const App = () => {
  const [teamMembers, setTeamMembers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Bob Johnson' },
    { id: 4, name: 'Sarah Williams' },
    { id: 5, name: 'Michael Brown' },
    { id: 6, name: 'Emily Davis' },
    { id: 7, name: 'David Wilson' },
    { id: 8, name: 'Olivia Taylor' },
    { id: 9, name: 'James Anderson' },
    { id: 10, name: 'Sophia Martinez' },
    { id: 11, name: 'Daniel Thomas' },
    { id: 12, name: 'Ava Garcia' },
    { id: 13, name: 'Matthew Robinson' },
    { id: 14, name: 'Isabella Clark' },
    { id: 15, name: 'Joseph Rodriguez' },
    { id: 16, name: 'Mia Lewis' },
    { id: 17, name: 'Andrew Lee' },
    { id: 18, name: 'Emma Hall' },
    { id: 19, name: 'William Young' },
    { id: 20, name: 'Abigail Allen' }
  ]);
  const [subTeams, setSubTeams] = useState([]);

  const handleCreateTeamMember = (name) => {
    const newMember = { id: Date.now(), name }; // Generate a unique id for the new member
    setTeamMembers([...teamMembers, newMember]);
  };

  const handleDeleteTeamMember = (id) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };


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
      <TeamList teamMembers={teamMembers} onDeleteTeamMember={handleDeleteTeamMember} />
      <SubTeamList subTeams={subTeams} />
      <CreateSubTeamForm onCreateSubTeam={handleCreateSubTeam} />
      <CreateTeamMemberForm onCreateTeamMember={handleCreateTeamMember} /> {/* Render the form for creating team members */}
    </div>
  );
};

export default App;


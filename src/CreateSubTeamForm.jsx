// CreateSubTeamForm.js
import React, { useState } from 'react';

const CreateSubTeamForm = ({ onCreateSubTeam }) => {
  const [subTeamName, setSubTeamName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (subTeamName.trim() === '') return;
    onCreateSubTeam(subTeamName);
    setSubTeamName('');
  };

  return (
    <div>
      <h2>Create Sub Team</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter sub team name"
          value={subTeamName}
          onChange={(e) => setSubTeamName(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateSubTeamForm;

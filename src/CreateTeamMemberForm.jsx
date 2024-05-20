// CreateTeamMemberForm.js
import React, { useState } from 'react';

const CreateTeamMemberForm = ({ onCreateTeamMember }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') return;
    onCreateTeamMember(name);
    setName('');
  };

  return (
    <div>
      <h2>Add Team Member</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter member name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default CreateTeamMemberForm;

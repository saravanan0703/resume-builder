import React, { useState } from 'react';
import TagInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css';

function SkillInput({ skills, onChange }) {
  const [tagInput, setTagInput] = useState('');

  const handleTagChange = (tags) => {
    onChange(tags);
  };

  const handleTagInput = (input) => {
    setTagInput(input);
  };

  const handleTagAdd = () => {
    if (tagInput.trim() !== '') {
      onChange([...skills, tagInput.trim()]);
      setTagInput('');
    }
  };

  return (
    <div className="form-group">
      <TagInput
        value={skills}
        onChange={handleTagChange}
        inputValue={tagInput}
        onChangeInput={handleTagInput}
        addOnBlur={true}
      />
      <button className="btn btn-primary" onClick={handleTagAdd}>Add Skill</button>
    </div>
  );
}

export default SkillInput;

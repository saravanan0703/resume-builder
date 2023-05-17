import React from 'react';
import SkillInput from './SkillInput';

function ResumeForm({
  resumeData,
  onInputChange,
  onEducationChange,
  onExperienceChange,
  onAddEducation,
  onAddExperience,
  onSkillChange
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const handleEducationChange = (index, field, value) => {
    onEducationChange(index, field, value);
  };

  const handleExperienceChange = (index, field, value) => {
    onExperienceChange(index, field, value);
  };

  const handleSkillChange = (skills) => {
    onSkillChange(skills);
  };

  return (
    <div>
      <h2>Personal Information</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          className="form-control"
          name="name"
          value={resumeData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          className="form-control"
          name="email"
          value={resumeData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Address:</label>
        <input
          type="text"
          className="form-control"
          name="address"
          value={resumeData.address}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Phone:</label>
        <input
          type="text"
          className="form-control"
          name="phone"
          value={resumeData.phone}
          onChange={handleInputChange}
        />
      </div>

      <h2>Education</h2>
      {resumeData.education.map((edu, index) => (
        <div key={index}>
          <div className="form-group">
            <label>Institute:</label>
            <input
              type="text"
              className="form-control"
              value={edu.institute}
              onChange={(e) => handleEducationChange(index, 'institute', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Year:</label>
            <input
              type="text"
              className="form-control"
              value={edu.year}
              onChange={(e) => handleEducationChange(index, 'year', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Degree:</label>
            <input
              type="text"
              className="form-control"
              value={edu.degree}
              onChange={(e) => handleEducationChange(index, 'degree', e.target.value)}
            />
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={onAddEducation}>Add Education</button>

      <h2>Experience</h2>
      {resumeData.experience.map((exp, index) => (
        <div key={index}>
          <div className="form-group">
            <label>Company:</label>
            <input
              type="text"
              className="form-control"
              value={exp.company}
              onChange={(e) => handleExperienceChange(index, 'company', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Year:</label>
            <input
              type="text"
              className="form-control"
              value={exp.year}
              onChange={(e) => handleExperienceChange(index, 'year', e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Designation:</label>
            <input
              type="text"
              className="form-control"
              value={exp.designation}
              onChange={(e) => handleExperienceChange(index, 'designation', e.target.value)}
            />
          </div>
        </div>
      ))}
      <button className="btn btn-primary" onClick={onAddExperience}>Add Experience</button>

      <h2>Skills</h2>
      <SkillInput skills={resumeData.skills} onChange={handleSkillChange} />

    </div>
  );
}

export default ResumeForm;

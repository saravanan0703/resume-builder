import React, { useState } from 'react';
import ResumeForm from './ResumeForm';
import ResumePreview from './ResumePreview';

function App() {
  const [resumeData, setResumeData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
    education: [{ institute: '', year: '', degree: '' }],
    experience: [{ company: '', year: '', designation: '' }],
    skills: []
  });

  const handleInputChange = (field, value) => {
    setResumeData((prevData) => ({
      ...prevData,
      [field]: value
    }));
  };

  const handleEducationChange = (index, field, value) => {
    setResumeData((prevData) => ({
      ...prevData,
      education: prevData.education.map((edu, i) =>
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  const handleExperienceChange = (index, field, value) => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: prevData.experience.map((exp, i) =>
        i === index ? { ...exp, [field]: value } : exp
      )
    }));
  };

  const handleAddEducation = () => {
    setResumeData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { institute: '', year: '', degree: '' }]
    }));
  };

  const handleAddExperience = () => {
    setResumeData((prevData) => ({
      ...prevData,
      experience: [...prevData.experience, { company: '', year: '', designation: '' }]
    }));
  };

  const handleSkillChange = (skills) => {
    setResumeData((prevData) => ({
      ...prevData,
      skills
    }));
  };

  return (
    <div className="container">
      <h1>Resume Builder</h1>
      <div className="row">
        <div className="col-md-6">
          <ResumeForm
            resumeData={resumeData}
            onInputChange={handleInputChange}
            onEducationChange={handleEducationChange}
            onExperienceChange={handleExperienceChange}
            onAddEducation={handleAddEducation}
            onAddExperience={handleAddExperience}
            onSkillChange={handleSkillChange}
          />
        </div>
        <div className="col-md-6 preview">
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}

export default App;

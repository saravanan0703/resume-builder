import React from 'react';
import './App.css'
function ResumePreview({ resumeData }) {
  return (
    <div className='preview-details'>
      <h2 className='text-center'>Preview</h2>
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">Personal Information</h3>
          <p className="card-text">Name: {resumeData.name}</p>
          <p className="card-text">Email: {resumeData.email}</p>
          <p className="card-text">Address: {resumeData.address}</p>
          <p className="card-text">Phone: {resumeData.phone}</p>
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h3 className="card-title">Education</h3>
          {resumeData.education.map((edu, index) => (
            <div key={index}>
              <p className="card-text">Institute: {edu.institute}</p>
              <p className="card-text">Year: {edu.year}</p>
              <p className="card-text">Degree: {edu.degree}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h3 className="card-title">Experience</h3>
          {resumeData.experience.map((exp, index) => (
            <div key={index}>
              <p className="card-text">Company: {exp.company}</p>
              <p className="card-text">Year: {exp.year}</p>
              <p className="card-text">Designation: {exp.designation}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-3">
        <div className="card-body">
          <h3 className="card-title">Skills</h3>
          <ul className="list-group">
            {resumeData.skills.map((skill, index) => (
              <li className="list-group-item" key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ResumePreview;

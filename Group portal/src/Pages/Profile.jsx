import { useState } from "react";
import { teamMembers } from "../data/team";

export default function Profile() {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <section className="profile">
      <div className="profile-header">
        <h2>Our Team</h2>
        <p>Get to know the talented individuals behind our projects</p>
      </div>

      <div className="profile-grid">
        {teamMembers.map((member) => (
          <div key={member.id} className="profile-card">
            <div className="avatar">{member.photo}</div>
            <h3>{member.name}</h3>
            <span className="role">{member.role}</span>
            <p className="bio">{member.bio}</p>
            
            <div className="skills">
              {member.skills.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>

            <div className="social-links">
              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>

            <button 
              className="view-profile-btn"
              onClick={() => setSelectedMember(selectedMember?.id === member.id ? null : member)}
            >
              {selectedMember?.id === member.id ? "Close Profile" : "View Profile"}
            </button>

            {selectedMember?.id === member.id && (
              <div className="profile-details">
                <h4>About {member.name}</h4>
                <p>{member.bio}</p>
                <div className="detail-item">
                  <strong>Role:</strong> {member.role}
                </div>
                <div className="detail-item">
                  <strong>Skills:</strong> {member.skills.join(", ")}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
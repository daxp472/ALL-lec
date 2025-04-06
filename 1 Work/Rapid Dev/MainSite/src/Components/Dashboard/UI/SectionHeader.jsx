import React from 'react';
import './SectionHeader.css';

const SectionHeader = ({ title, link }) => {
  return (
    <div className="section-header">
      <h3 className="section-title">{title}</h3>
      {link && <a href="#" className="section-link">{link}</a>}
    </div>
  );
};

export default SectionHeader;
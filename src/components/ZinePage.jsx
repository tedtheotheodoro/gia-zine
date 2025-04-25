import React from 'react';
import './ZinePage.css';
import ZineNavigation from './ZineNavigation';

const ZinePage = ({ title, text, image, references, language }) => {
  return (
    <div className="zine-container">
      <h1 className="zine-title">{title}</h1>
      <img src={image} alt="Collage" className="zine-image" />
      <div className="zine-text" dangerouslySetInnerHTML={{ __html: text }} />

      {references && (
        <div className="zine-references">
          <h3>{language === 'pt' ? 'Referências' : 'References'}</h3>
          <ul>
            {references.map((ref, index) => (
              <li key={index}>{ref}</li>
            ))}
          </ul>
        </div>
      )}

      <ZineNavigation language={language} />
    </div>
  );
};

export default ZinePage;

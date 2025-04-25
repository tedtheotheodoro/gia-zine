import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const blocks = [
    { path: '/origem', pt: 'Origem & Ascensão', en: 'Origins & Rise' },
    { path: '/estetica', pt: 'A Estética Gia', en: 'The Gia Aesthetic' },
    { path: '/silenciamento', pt: 'Sexo, Poder & Silenciamento', en: 'Sex, Power & Erasure' },
    { path: '/morte', pt: 'Vício & Morte', en: 'Addiction & Death' },
    { path: '/ressurgencia', pt: 'Pós-morte & Ressurgência', en: 'Afterdeath & Resurgence' },
];
const ZineNavigation = ({ language }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentIndex = blocks.findIndex(b => b.path === location.pathname);

  const prev = blocks[currentIndex - 1];
  const next = blocks[currentIndex + 1];

  return (
    <div className="zine-navigation">
      {prev && (
        <button onClick={() => navigate(prev.path)}>
          ← {language === 'pt' ? prev.pt : prev.en}
        </button>
      )}
      {next && (
        <button onClick={() => navigate(next.path)}>
          {language === 'pt' ? next.pt : next.en} →
        </button>
      )}
      </div>
      
  );
};

export default ZineNavigation;

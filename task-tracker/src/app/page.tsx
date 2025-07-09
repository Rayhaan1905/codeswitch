'use client';

import { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import LanguageSelector from './components/LanguageSelector';

export default function HomePage(): JSX.Element {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('python');
  const [converted, setConverted] = useState('');

  const handleConvert = () => {
    // Placeholder logic — you can later connect it to an API or logic
    setConverted(`// Converted to ${language}\n\n${code}`);
  };

  return (
    <section className="codeswitch">
      <LanguageSelector value={language} onChange={setLanguage} />
      <CodeEditor value={code} onChange={setCode} />
      <button className="convert-btn" onClick={handleConvert}>
        Convert
      </button>

      {converted && (
        <div className="output">
          <h3>Converted Code:</h3>
          <pre>{converted}</pre>
        </div>
      )}
    </section>
  );
}

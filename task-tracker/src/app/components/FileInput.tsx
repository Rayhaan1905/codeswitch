'use client';

import { useState } from 'react';

export default function FileInput(): JSX.Element {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="file-upload">
      <label className="custom-file-upload">
        <input type="file" onChange={handleChange} />
        Choose File
      </label>
      {selectedFile && (
        <p>
          Selected File: <strong>{selectedFile.name}</strong>
        </p>
      )}
    </div>
  );
}

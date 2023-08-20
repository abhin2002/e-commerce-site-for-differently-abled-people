// SettingsPage.js
import React from 'react';
import { useColor } from '../ColorContext';

function SettingsPage() {
  const { setColor } = useColor();

  const handleColorChange = (color) => {
    setColor(color);
  };

  return (
    <div>
      <h1>Settings Page</h1>
      <input type="color" onChange={(e) => handleColorChange(e.target.value)} />
    </div>
  );
}

export default SettingsPage;

import React, {useState} from 'react';
import Welcome from './Welcome';

const InteractiveWelcome = () => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
            <Welcome name={inputValue} />
      <input type='text' value={inputValue} onChange={handleInputChange} />
    </div>
  );
};

export default InteractiveWelcome;
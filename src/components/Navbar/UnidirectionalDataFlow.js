import React, { useState } from 'react';

function UnidirectionalDataFlow() {
  const [state, setState] = useState('');

  function handleChange(e) {
    setState(e.target.value);
  }
  return (
    <div>
      <input type="text" value={state} onChange={handleChange} />
    </div>
  );
}

export default UnidirectionalDataFlow;

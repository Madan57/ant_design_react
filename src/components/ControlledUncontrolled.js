import { useState } from 'react/cjs/react.development';

function ControlledUncontrolled() {
  const [state, setState] = useState('');

  function alertValue() {
    alert(state);
  }
  return (
    <div>
      <input
        type="text"
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
      <button onClick={alertValue}>Click me</button>
    </div>
  );
}

export default ControlledUncontrolled;

import React from 'react';
import { useState, memo } from 'react/cjs/react.development';

const Child = memo(function (props) {
  console.log('I am rendering');
  return <h1>I am a child</h1>;
});

function useMemoDemo() {
  const [localValue, setLocalValue] = useState(0);
  return (
    <div>
      <Child />
      <h1>localValue: {localValue} </h1>
      <button onClick={() => setLocalValue(localValue + 1)}>
        Change Local Value
      </button>
    </div>
  );
}

export default useMemoDemo;

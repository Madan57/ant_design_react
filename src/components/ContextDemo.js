import React, { useContext } from 'react';

const Context = React.createContext();

function Child(props) {
  return <GrandChild />;
}

function GrandChild(props) {
  const value = useContext(Context);

  return <h1>{value}</h1>;
}

function ContextDemo() {
  return (
    <Context.Provider value={1}>
      <div>
        <Child />
      </div>
    </Context.Provider>
  );
}

export default ContextDemo;

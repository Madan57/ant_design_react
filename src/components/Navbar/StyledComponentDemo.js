import React from 'react';
import styled from 'styled-components';

const StyledComponentDemo = () => {
  const LoginBackground = styled.div`
    & {
      width: 40%;
      height: 75%;
      padding: 0.5em;
      background-color: #f8d05d;
      text-shadow: -1px 4px 4px;
      font-size: 1.25rem;
      margin: 0 auto;
      position: relative;
    }
    &:after {
      border-right: solid 20px transparent;
      border-left: solid 20px transparent;
      border-top: solid 20px #f8d05d;
      transform: translateX(-50%);
      position: absolute;
      z-index: -1;
      content: '';
      top: 100%;
      left: 50%;
      height: 0;
      width: 0;
    }
  `;
  return (
    <div>
      <LoginBackground>
        <h1>styled-components</h1>
      </LoginBackground>
    </div>
  );
};

export default StyledComponentDemo;

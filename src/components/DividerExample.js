import React from 'react';
import { Divider } from 'antd';

const DividerExample = () => {
  return (
    <>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne
        merninisti licere mihi ista probare, quae sunt a te dicta? Refert tamen,
        quo modo.
      </p>
      <Divider type="vertical" />
      <Divider orientation="left" plain>
        Text
      </Divider>
    </>
  );
};

export default DividerExample;

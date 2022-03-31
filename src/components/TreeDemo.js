import React from 'react';
import { Tree } from 'antd';

const treeData = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
            disableCheckbox: true,
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [
          {
            title: <span style={{ color: '#1890ff' }}>sss</span>,
            key: '0-0-1-0',
          },
        ],
      },
    ],
  },
];

const TreeDemo = () => {
  const onSelect = (slectedKeys, info) => {
    console.log('selected', slectedKeys, info);
  };
  const onCheck = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };
  return (
    <>
      <Tree
        checkable
        onSelect={onSelect}
        onCheck={onCheck}
        treeData={treeData}
      />
    </>
  );
};

export default TreeDemo;

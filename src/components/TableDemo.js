import React from 'react';
import { Table, Tag, Space } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Age',
    // dataIndex: 'age',
    key: 'age',
    render: (text, record) => (
      <>
        <span
          style={{ fontWeight: 700, color: 'crimson', marginRight: '0.5rem' }}
        >
          {console.log('check record data 111', record)}
          {text.age}
        </span>
        <b>
          <span>{text.address} </span>
        </b>
      </>
    ),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      console.log('check record data', text),
      (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      )
    ),
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    email: 'john@gmail.com',

    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
  {
    key: '4',
    name: 'Madan Ghimire',
    age: 29,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'programmer'],
  },
];

const ListDemo = () => {
  return (
    <div style={{ padding: '1rem' }}>
      <Table scroll={{ x: 1000 }} columns={columns} dataSource={data} />
    </div>
  );
};

export default ListDemo;

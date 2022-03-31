import React, { useState } from 'react';
import { Typography, Switch, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const AntDesignComponents = () => {
  const [editableStr, setEditableStr] = useState('This is an editable text.');
  const [ellipsis, setEllipsis] = useState(true);

  return (
    <div>
      <Title copyable>Introduction</Title>
      <Title italic type="danger">
        h1. Ant Design
      </Title>
      <Title type="secondary" level={2}>
        h2. Ant Design
      </Title>
      <Title type="warning" level={3}>
        h3. Ant Design
      </Title>
      <Title level={4}>h4. Ant Design</Title>
      <Title level={5}>h5. Ant Design</Title>
      <Text italic strong copyable>
        Ant Design (default)
      </Text>
      <Link href="https://ant.design" target="_blank">
        Ant Design (Link)
      </Link>
      <Paragraph editable={{ onChange: setEditableStr }}>
        {editableStr}
      </Paragraph>
      <Switch checked={ellipsis} onChange={() => setEllipsis(!ellipsis)} />
      <Paragraph
        style={{ width: '50%', cursor: 'pointer' }}
        underline
        onClick={(e) => alert('hello you clicked me!!!')}
        mark
        ellipsis={ellipsis}
      >
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. Ant Design, a design language for background applications,
        is refined by Ant UED Team. Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design, a design language
        for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team.
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
      </Paragraph>
      <Paragraph
        ellipsis={
          ellipsis ? { rows: 2, expandable: true, symbol: 'more' } : false
        }
      >
        Ant Design, a design language for background applications, is refined by
        Ant UED Team. Ant Design, a design language for background applications,
        is refined by Ant UED Team. Ant Design, a design language for background
        applications, is refined by Ant UED Team. Ant Design, a design language
        for background applications, is refined by Ant UED Team. Ant Design, a
        design language for background applications, is refined by Ant UED Team.
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
      </Paragraph>
      <Text
        style={ellipsis ? { width: 100 } : undefined}
        ellipsis={ellipsis ? { tooltip: 'I am ellipsis now!' } : false}
      >
        Ant Design, a design language for background applications, is refined by
        Ant UED Team.
      </Text>
      Text
      <Divider
        type="vertical"
        style={{ borderLeft: '10px solid red', height: '5rem' }}
        dashed
      />
      <a href="#">Link</a>
      <Divider
        style={{ borderLeft: '10px solid red', height: '5rem' }}
        type="vertical"
      />
      <a href="#">Link 1</a>
      <div style={{ width: '50%', marginLeft: '1rem' }}>
        <Divider
          style={{
            backgroundColor: 'red',
            border: '1rem solid green',
            borderRadius: '1rem 0px',
          }}
          type="horizontal"
        />
      </div>
      <a href="#">Link</a>
    </div>
  );
};

export default AntDesignComponents;

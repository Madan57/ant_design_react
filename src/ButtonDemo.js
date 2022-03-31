import React from 'react';
import { Button } from 'antd';
import {
  FacebookOutlined,
  SaveFilled,
  EditOutlined,
  PoweroffOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

var bgColors = {
  Default: '#81b71a',
  Blue: '#00B1E1',
  Cyan: '#37BC9B',
  Green: '#8CC152',
  Red: '#E9573F',
  Yellow: '#F6BB42',
};
const ButtonDemo = () => {
  return (
    <div>
      <Button type="primary" shape="round" danger>
        submit
      </Button>
      <Button type="link" danger>
        Link button
      </Button>
      <Button type="ghost" danger>
        ghost button
      </Button>
      <Button type="primary" icon={<PoweroffOutlined />}>
        Click me
      </Button>
      <div
        style={{ padding: '26px 16px 16px', backgroundColor: bgColors.Yellow }}
      >
        <Button type="primary" ghost>
          Primary
        </Button>
        <Button ghost>Default</Button>
        <Button type="dashed" ghost>
          Dashed
        </Button>
      </div>
      <Button block>Default</Button>
      <Button type="link" danger block>
        Primary
      </Button>
      <Button
        style={{ justifyContent: 'center' }}
        icon={<LoadingOutlined rotate style={{ color: 'red' }} />}
        size="small"
        shape="round"
        htmlType="submit"
        type="ghost"
        onClick={(e) => alert('you clicked on save button')}
      >
        save
      </Button>
    </div>
  );
};

export default ButtonDemo;

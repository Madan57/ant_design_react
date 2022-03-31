import React, { useState } from 'react';
import { Form, Input, Button, Checkbox, Divider, Radio } from 'antd';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];

const SimpleForm = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const [fieldValue, setFieldValue] = useState('');

  const handleBlur = (e) => setFieldValue(e.target.value);
  const handleChange = (e) => setFieldValue(e.target.value);
  console.log(fieldValue);

  function sum(x, y) {
    return x + y;
    console.log('Hello World');
  }
  console.log(sum(1, 2));

  for (let i = 0; i < 5; i++) {
    console.log('Inside the loop:', i);
  }

  console.log(null == undefined); // true
  let price = 200.0; // interpreted as an integer 200

  console.log(price); // 200.00
  console.log(Number.MAX_VALUE);
  console.log(Number.MIN_VALUE);
  console.log(Number.MAX_VALUE + Number.MAX_VALUE);
  console.log('a' / 2);
  const onChange = (list) => {
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };

  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };

  const [form] = Form.useForm();
  const handleFormSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        console.log('Received values of form: ', values);
      })
      .catch((errorInfo) => {
        console.log('Validate Failed:', errorInfo);
      });
  };

  return (
    <div>
      <Form form={form}>
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input onBlur={handleBlur} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item name="favourites" value={checkedList}>
          <Checkbox
            indeterminate={indeterminate}
            onChange={onCheckAllChange}
            checked={checkAll}
          >
            Check all
          </Checkbox>
          <Divider type="vertical" />
          <CheckboxGroup
            name="favourites"
            value={checkedList}
            options={plainOptions}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" onClick={handleFormSubmit} htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SimpleForm;

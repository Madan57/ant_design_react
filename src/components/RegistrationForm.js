import React, { useState } from 'react';
import {
  Form,
  Input,
  Checkbox,
  Radio,
  Button,
  Typography,
  List,
  Row,
  Col,
  Divider,
} from 'antd';

import './style/style.css';

const { Title, Text } = Typography;
const { TextArea } = Input;

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  'Travelling',
  'Cooking',
  'Reading',
  'Hiking',
  'Photography',
  'Singing',
];

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [checkedList, setCheckedList] = useState(['']);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const [myData, setMyData] = useState([]);

  const people = [
    {
      name: 'James',
      age: 31,
    },
    {
      name: 'John',
      age: 45,
    },
    {
      name: 'Paul',
      age: 65,
    },
    {
      name: 'Ringo',
      age: 49,
    },
    {
      name: 'George',
      age: 34,
    },
  ];

  // const data = [
  //   'Racing car sprays burning fuel into crowd.',
  //   'Japanese princess to wed commoner.',
  //   'Australian walks 100km after outback crash.',
  //   'Man charged over missing wedding girl.',
  //   'Los Angeles battles huge wildfires.',
  // ];

  const tasks = [
    {
      taskId: 1,
      taskName: 'Clean the house',
      taskStatus: 'Completed',
      taskDate: '2020-01-01',
    },
    {
      taskId: 2,
      taskName: 'Clean the car',
      taskStatus: 'Completed',
      taskDate: '2021-12-10',
    },
    {
      taskId: 3,
      taskName: 'Learn filtering data in React',
      taskStatus: 'To do',
      taskDate: '2022-02-01',
    },
    {
      taskId: 4,
      taskName: 'Fix the bug on React project',
      taskStatus: 'To do',
      taskDate: '2022-01-15',
    },
    {
      taskId: 5,
      taskName: 'Fix the car',
      taskStatus: 'Completed',
      taskDate: '2022-01-07',
    },
  ];

  // const resultData = tasks
  //   .filter((task) => task.taskStatus === 'Completed')
  //   .map((task) => task.taskName);

  // const resultData = tasks
  //   ?.filter((task) => task.taskStatus === 'To do')
  //   ?.map((task, index) => task?.taskName);

  console.log(people);

  const onFinish = (values) => {
    console.log('Received values of registration form: ', values);
    form.resetFields();
    console.log('chekedList babe', checkedList);
  };

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

  console.log('checkedList', checkedList);

  return (
    <>
      <div>
        <Title style={{ textAlign: 'center', padding: '1rem' }}>
          Customer Registration Form
        </Title>
        <Form
          form={form}
          name="registrationForm"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          onFinish={onFinish}
        >
          <Row>
            <Col span={12}>
              <Form.Item
                label="First Name"
                name="firstName"
                rules={[
                  { required: true, message: 'Please input your firstname' },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Last Name"
                name="lastName"
                rules={[
                  { required: true, message: 'Please input your lastname' },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Please input your email' },
              { type: 'email', message: 'Please input a valid email' },
            ]}
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 9 }}
          >
            <Input />
          </Form.Item>

          <Form.Item
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 9 }}
            label="Description"
            name="description"
            rules={[
              { required: true, message: 'Please input your description' },
            ]}
          >
            <TextArea rows={4} />
          </Form.Item>
          <Form.Item
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 9 }}
            label="Gender"
            name="gender"
            rules={[{ required: true, message: 'Please choose a gender' }]}
          >
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Other">Other</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            labelCol={{ span: 2 }}
            wrapperCol={{ span: 9 }}
            label="Interests"
            name="interests"
            valuePropName="checked"
          >
            <Checkbox
              value={checkedList}
              indeterminate={indeterminate}
              onChange={onCheckAllChange}
            >
              Check all
            </Checkbox>
            <Divider />

            <CheckboxGroup
              options={plainOptions}
              value={checkedList}
              onChange={onChange}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 2, span: 16 }}>
            <Button
              className="btnSubmit"
              htmlType="submit"
              size="large"
              style={{
                backgroundColor: '#fe6d04',
                borderColor: '#fe6d04',
                color: '#f2f2f2',
              }}
            >
              submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div>
        <Title style={{ textAlign: 'center', padding: '1rem' }}>
          Check filter map
          {people
            .filter((person, index) => person.age < 60)
            .map((filteredPerson, index) => {
              return (
                <div key={index}>
                  <Text style={{ color: 'burlywood' }}>
                    {filteredPerson.name} {'\n'}
                  </Text>
                  {filteredPerson.age}
                </div>
              );
            })}
        </Title>
      </div>
      <div>
        <h1 style={{ textAlign: 'center' }}>
          one more example practice for filters and map for javascript
        </h1>
        <Divider orientation="left">Default Size</Divider>
        {/* <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={resultData}
          renderItem={(item) => <List.Item>{item} </List.Item>}
          style={{ padding: '1rem' }}
        /> */}
        {tasks
          .filter((task) => task.taskStatus === 'Completed')

          .map((task, index) => {
            return (
              (task.EstimatedHour = null),
              (task.CalculatedTotal = null),
              (
                <li style={{ textAlign: 'center' }} key={task.taskId}>
                  {task.taskName}
                </li>
              )
            );
          })}
      </div>
    </>
  );
};

export default RegistrationForm;

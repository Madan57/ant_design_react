import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio } from 'antd';

function FormDemo() {
  const [isModalFormVisible, setIsModalFormVisible] = useState(false);

  const [form] = Form.useForm();

  const showModalForm = () => {
    setIsModalFormVisible(true);
  };

  const handleModalFormCancel = () => {
    setIsModalFormVisible(false);
  };
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Button type="primary" onClick={showModalForm}>
        New Collection
      </Button>
      <Modal
        visible={isModalFormVisible}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        onCancel={handleModalFormCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              console.log('form values', values);
              // onCreate(values);
            })
            .catch((info) => {
              console.log('Validate Failed:', info);
            });
        }}
      >
        <Form
          form={form}
          layout="vertical"
          name="form_in_modal"
          initialValues={{
            modifier: 'public',
          }}
        >
          <Form.Item
            name="title"
            label="Title"
            rules={[
              {
                required: true,
                message: 'Please input the title of collection!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[
              {
                required: true,
                message: 'Please input the description of collection',
              },
            ]}
          >
            <Input type="textarea" />
          </Form.Item>
          <Form.Item name="modifier">
            <Radio.Group>
              <Radio value="public">Public</Radio>
              <Radio value="private">Private</Radio>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
              <Radio value="Others">Others</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item>
            <Button
              style={{
                backgroundColor: 'indigo',
                borderColor: 'indigo',
                color: '#fff',
                borderRadius: '10px',
              }}
              type="ghost"
            >
              save
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default FormDemo;

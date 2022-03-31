import {
  Button,
  Col,
  Divider,
  Form,
  Input,
  Radio,
  Row,
  Typography,
} from "antd";
import React from "react";
import "./style/style.scss";

const handleSubmit = (values) => {
  console.log(values);
};

function RegisterForm(props) {
  const { Text, Paragraph } = Typography;

  return (
    <Row style={{ width: "100%" }} justify="center">
      <Col xs={24} align="middle">
        <Text style={{ fontSize: "25px", fontWeight: "600" }}>Sign Up</Text>
      </Col>
      <Form
        onFinish={handleSubmit}
        style={{ width: "100%", marginTop: "20px" }}
        layout="vertical"
      >
        <Row style={{ width: "100%" }} gutter={16}>
          <Col xs={12}>
            <Form.Item
              name="firstName"
              label="First Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your first name!",
                },
              ]}
            >
              <Input className="modal-input" />
            </Form.Item>
          </Col>
          <Col xs={12}>
            <Form.Item
              name="lastName"
              label="Last Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your first name!",
                },
              ]}
            >
              <Input className="modal-input" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Radio.Group name="radiogroup" defaultValue="Male">
            <Radio value="Male">Male</Radio>
            <Radio value="Female">Female</Radio>
            <Radio value="Other">Other</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              required: true,
              message: "Please enter your e-mail!",
            },
            {
              type: "email",
              message: "Please enter a valid e-mail!",
            },
          ]}
        >
          <Input className="modal-input" />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="rePassword"
          label="Re-enter Password"
          dependencies={["password"]}
          rules={[
            {
              required: true,
              message: "Please confirm your password!",
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "The two passwords that you entered do not match!"
                );
              },
            }),
          ]}
        >
          <Input.Password className="modal-input" />
        </Form.Item>

        <Form.Item>
          <Button
            shape="round"
            htmlType="submit"
            style={{
              border: "2px solid green",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: "5cm",
              marginTop: 5,
            }}
            className="modal-login-btn"
          >
            Sign Up
          </Button>
        </Form.Item>
        <Row style={{ width: "100%" }}>
          <Col xs={24} align="middle">
            <Text style={{ fontSize: "12px" }}>
              By clicking the 'Sign Up' button, you confirm that you accept our{" "}
            </Text>
            <Paragraph>
              <Text
                style={{
                  fontSize: "12px",
                  color: " #143f91",
                  fontWeight: "600",
                }}
              >
                Terms of Use{" "}
              </Text>
              <Text style={{ fontSize: "12px" }}>and </Text>
              <Text
                style={{
                  fontSize: "12px",
                  color: " #143f91",
                  fontWeight: "600",
                }}
              >
                Privacy Policy
              </Text>
            </Paragraph>
          </Col>
        </Row>
        <Divider style={{ height: "1px", backgroundColor: "#000" }} />
        <Row style={{ width: "100%" }} justify="center">
          <Col xs={24} align="middle">
            <Text style={{ fontSize: "14px", fontWeight: "600" }}>
              Have an account?{" "}
            </Text>
            <Text
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: "#143f91",
              }}
            >
              Log In
            </Text>
          </Col>
        </Row>
        <Divider>
          <Text style={{ fontSize: "14px", fontWeight: "600" }}>
            or Sign in with
          </Text>
        </Divider>
        <Form.Item>
          <Button
            block
            shape="round"
            type="primary"
            className="modal-login-btn-facebook"
          >
            Continue with Facebook
          </Button>
        </Form.Item>
        <Form.Item>
          <Button
            block
            shape="round"
            type="primary"
            className="modal-login-btn-google"
          >
            Continue with Google
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
}
export default RegisterForm;

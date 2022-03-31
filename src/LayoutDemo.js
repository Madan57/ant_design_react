import {
  Layout,
  Menu,
  Dropdown,
  Breadcrumb,
  Space,
  Card,
  Affix,
  Button,
  Typography,
} from "antd";
import {
  LaptopOutlined,
  NotificationOutlined,
  DownOutlined,
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import Logo from "./assets/ug.webp";

const { Header, Content, Sider, Footer } = Layout;

const { Title, Text } = Typography;

const { SubMenu } = Menu;

const LayoutDemo = () => {
  const [collapsed, setCollapsed] = useState(false);

  const [top, setTop] = useState(10);
  const [bottom, setBottom] = useState(10);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleCollapse = (collapsed) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const menu = (
    <Menu>
      <Menu.Item>1st menu item</Menu.Item>
      <Menu.Item icon={<DownOutlined />}>2nd menu item</Menu.Item>
      <Menu.Item>3rd menu item</Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

  return (
    <Layout>
      <Header className="header">
        {/* <img src={Logo} height="30" width="150" /> */}
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>

      <Layout>
        <Sider
          style={{ marginTop: "-15px" }}
          collapsible
          collapsed={collapsed}
          onCollapse={handleCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
            <Menu.Item key="9" icon={<FileOutlined />}>
              Files
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            Content
            <Space direction="vertical" align="center" size="middle">
              {" "}
              <Card title="Card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
              <Card title="Card" style={{ width: 300 }}>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Space>
            <Affix offsetTop={top}>
              <Button type="primary" onClick={() => setTop(top + 10)}>
                Affix top
              </Button>
            </Affix>
          </Content>
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              {" "}
              <HomeOutlined /> Home
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application Center</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <a href="">Application List</a>
            </Breadcrumb.Item>
            <Breadcrumb.Item>An Application</Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          <Text>basic dropdown example</Text>
          <Dropdown overlay={menu}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              Hover me <DownOutlined />
            </a>
          </Dropdown>

          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default LayoutDemo;

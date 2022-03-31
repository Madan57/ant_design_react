import React, { useEffect, useState } from 'react';
import { Row, Col, Divider, Card, Space } from 'antd';

const style = {
  backgroundColor: '#0092ff',
  borderRadius: '7px',
  height: '120px',
  fontSize: '14px',
  textAlign: 'center',
  padding: '20px',
};

const MoreResponsive = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(window.innerHeight);

  const updateWindowHeight = () => {
    const newHeight = window.innerHeight;
    setHeight(newHeight);
  };
  const updateWindowDimensions = () => {
    const newWidth = window.innerWidth;
    setWidth(newWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', updateWindowDimensions);
    window.addEventListener('resize', updateWindowHeight);
    return () => {
      window.removeEventListener('resize', updateWindowDimensions);
      window.removeEventListener('resize', updateWindowHeight);
    };
  }, []);
  return (
    <div style={{ color: 'white', backgroundColor: 'chocolate', padding: 20 }}>
      <Divider orientation="center">More Responsive Grid Demo</Divider>
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 16, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col
          xs={{ span: 24 }}
          sm={{ span: 8 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div style={style}>Column check</div>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 8 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div style={style}>Column</div>
        </Col>

        <Col
          xs={{ span: 24 }}
          sm={{ span: 8 }}
          md={{ span: 12 }}
          lg={{ span: 8 }}
        >
          <div style={style}>
            <p style={{ color: 'white', fontWeight: 600 }}>
              window width: {width} and window height: {height}
            </p>
          </div>
        </Col>
      </Row>
      <Row
        gutter={[
          { xs: 100, sm: 16, md: 24, lg: 48 },
          { xs: 200, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col xs={24} sm={8} md={12} lg={8}>
          <div style={style}>
            <p style={{ color: 'white', fontWeight: 600 }}>
              hello how are you doing
            </p>
          </div>
        </Col>
        <Col xs={24} sm={8} md={12} lg={8}>
          <div style={style}>
            <p style={{ color: 'white', fontWeight: 600 }}>
              hello how are you doing
            </p>
          </div>
        </Col>
        <Col xs={24} sm={8} md={12} lg={8}>
          <div style={style}>
            <p style={{ color: 'white', fontWeight: 600 }}>
              hello how are you doing
            </p>
          </div>
        </Col>
        <Col xs={24} sm={8} md={12} lg={8}>
          <div style={style}>
            <p style={{ color: 'white', fontWeight: 600 }}>
              hello how are you doing
            </p>
          </div>
        </Col>
        <Col xs={24} sm={8} md={12} lg={8}>
          <div style={style}>
            <p style={{ color: 'white', fontWeight: 600 }}>
              hello how are you doing
            </p>
          </div>
        </Col>
        <Col xs={24} sm={8} md={12} lg={8}>
          <div style={style}>
            <p style={{ color: 'white', fontWeight: 600 }}>
              hello how are you doing
            </p>
          </div>
        </Col>
      </Row>
      <Row gutter={(16, 16)}>
        <Col xs={12} sm={16} md={24} lg={24}>
          <Card title="my card title">content</Card>
        </Col>
        <Col xs={12} sm={16} md={24} lg={24}>
          {' '}
          <Card title="my card title">content</Card>
        </Col>
        <Col xs={12} sm={16} md={24} lg={24}>
          <Card title="my card title">content</Card>
        </Col>
      </Row>
    </div>
  );
};

export default MoreResponsive;

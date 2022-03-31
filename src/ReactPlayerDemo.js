import React from 'react';
import ReactPlayer from 'react-player';
import { Card, Row, Col } from 'antd';
import './ractplayer.css';

const ReactPlayerDemo = () => {
  return (
    <div
      className="react_player"
      style={{
        backgroundColor: 'gray',
        padding: 30,
      }}
    >
      <Row gutter={16}>
        <Col lg={8} sm={24}>
          <Card
            title="react-player"
            hoverable
            style={{
              borderRadius: 5,
            }}
          >
            <ReactPlayer
              controls
              width="50"
              light
              url="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1"
            />
          </Card>
        </Col>
        <Col lg={8} sm={24}>
          <Card
            title="react-player"
            hoverable
            style={{
              borderRadius: 5,
            }}
          >
            <ReactPlayer
              controls
              width="50"
              light
              url="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1"
            />
          </Card>
        </Col>
        <Col lg={8} sm={24}>
          <Card
            title="react-player"
            hoverable
            style={{
              borderRadius: 5,
            }}
          >
            <ReactPlayer
              controls
              width="50"
              light
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ReactPlayerDemo;

import React, { useState } from "react";
import { Button, message } from "antd";
import { DownloadOutlined, PoweroffOutlined } from "@ant-design/icons";

const ButtonExample = () => {
  const [loadings, setLoadings] = useState(false);

  const enterLoading = () => {
    setLoadings(true);
    setTimeout(() => {
      setLoadings(false);
    }, 3000);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "gray",
        padding: "20px",
      }}
    >
      <Button
        type="primary"
        shape="round"
        onClick={(e) => message.success("downloaded successfully this is epic")}
        icon={<DownloadOutlined />}
      >
        Download
      </Button>
      <Button type="primary" danger loading>
        Update
      </Button>
      <Button
        type="primary"
        loading={loadings}
        onClick={enterLoading}
        icon={<PoweroffOutlined />}
      >
        Click me!
      </Button>
    </div>
  );
};

export default ButtonExample;

import React, { useState } from "react";
import { Button, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
const antIcon = <LoadingOutlined style={{ fontSize: 20, color: "red" }} spin />;
const SpinDemo = () => {
  const [loading, setLoading] = useState(false);
  const handleButtonLoading = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  };
  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Spin size="large" />
      <Button>
        <Spin style={{ alignContent: "center", marginRight: 10 }} />
        Save
      </Button>
      <Button onClick={handleButtonLoading}>
        {loading && (
          <Spin
            indicator={antIcon}
            size="small"
            style={{
              alignContent: "center",
              borderRadius: 20,
              marginRight: 10,
              color: "red",
            }}
          />
        )}
        click me
      </Button>
    </div>
  );
};

export default SpinDemo;

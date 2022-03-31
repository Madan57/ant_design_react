import React, { useState } from "react";
import { Spin, Alert, Switch, message } from "antd";

const SpinExample = () => {
  const [loading, setLoading] = useState(false);
  const handleToggle = (checked) => {
    setLoading(checked);
  };

  const onClose = (e) => {
    message.success("you closed alert lets go this is epic");
  };

  return (
    <div>
      <Spin spinning={loading}>
        <Alert
          message="Alert message title"
          description="Further details about the context of this alert."
          type="info"
          showIcon
          closable
          onClose={onClose}
          onClick={(e) => alert("you clicked inside alert box")}
        />
      </Spin>
      <div style={{ marginTop: 16 }}>
        Loading state：
        <Switch checked={loading} onChange={handleToggle} />
      </div>
    </div>
  );
};

export default SpinExample;

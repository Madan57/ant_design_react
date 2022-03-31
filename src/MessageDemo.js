import React from "react";
import { message, Button } from "antd";

const success = () => {
  message
    .loading("Action in progress..", 2.5)
    .then(() => message.success("Loading finished", 2.5))
    .then(() => message.info("Loading finished is finished", 2.5));
};

const MessageDemo = () => {
  return (
    <div>
      <Button onClick={success}>Customized display duration</Button>
    </div>
  );
};

export default MessageDemo;

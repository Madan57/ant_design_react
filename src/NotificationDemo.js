import React from "react";
import { Button, notification } from "antd";

const openNotification = () => {
  notification.open({
    message: "notification title saved!!!",
    description: "description goes here content epic",
    type: "success",
    placement: "topRight",
  });
};

const NotificationDemo = () => {
  return (
    <div>
      <Button onClick={openNotification}>notification demo</Button>
    </div>
  );
};

export default NotificationDemo;

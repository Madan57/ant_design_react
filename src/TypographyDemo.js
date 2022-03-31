import React, { useState } from "react";
import { Typography, Divider } from "antd";
import { tooltip } from "@antv/g2plot/lib/adaptor/common";
const { Link, Text, Title, Paragraph } = Typography;

const TypographyDemo = () => {
  const [hideTooltipStr, setHideTooltipStr] = useState("Hide Edit tooltip.");
  const [hideMeText, setHideMeText] = useState(
    "hello whats gone on this is beautiful"
  );

  return (
    <>
      <Title editable type="success">
        h1 Ant Design
      </Title>
      <Title level={2}>h2 Ant Design</Title>
      <Text keyboard>Ant Design (keyboard)</Text> <br />
      <Text disabled>Ant Design (disabled)</Text>
      <Text>Test Text goes here</Text>
      <Paragraph editable={{ tooltip: true, onChange: setHideTooltipStr }}>
        {hideTooltipStr}
      </Paragraph>
      <Paragraph editable={{ tooltip: true, onChange: setHideMeText }}>
        {hideMeText}{" "}
      </Paragraph>
      <Text copyable>hello this is link </Text>
      <Paragraph copyable>This is a copyable text.</Paragraph>
      <Paragraph delete>test paragraph</Paragraph>
    </>
  );
};

export default TypographyDemo;

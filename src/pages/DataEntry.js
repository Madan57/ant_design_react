import React, { useState } from "react";
import { Row, Col, Checkbox, Button, Cascader, Typography } from "antd";
import { Select } from "antd";
const { Option } = Select;

const { Text, Title } = Typography;

const handleChange = (value) => {
  console.log(`Selected ${value}`);
};

const onChange = (checkedValues) => {
  console.log(`checked = ${checkedValues} `);
};

const DataEntry = () => {
  const [checked, setChecked] = useState(true);
  const [disabled, setDisabled] = useState(false);
  const toggleChecked = () => {
    setChecked({ checked: !checked });
  };

  const toggleDisabled = () => {
    setDisabled({ disabled: !disabled });
  };

  const label = `${checked ? "Checked" : "Unchecked"}-${
    disabled ? "Disabled" : "Enabled"
  }`;

  const plainOptions = ["Apple", "Pear", "Orange"];

  //   const options = [
  //     { label: "Apple", value: "Apple" },
  //     { label: "Pear", value: "Pear" },
  //     { label: "Orange", value: "Orange" },
  //     ];

  const options = [
    {
      value: "bagmati",
      label: "Bagmati",
      children: [
        {
          value: "kathmandu",
          label: "Kathmandu",
          children: [
            {
              value: "lalitpur",
              label: "Lalitpur",
              children: [
                {
                  value: "test",
                  label: "Test",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <Checkbox.Group style={{ width: "100%" }} onChange={onChange}>
        <Row>
          <Col span={8}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
      <Checkbox.Group
        options={plainOptions}
        defaultValue={["Orange"]}
        onChange={onChange}
      ></Checkbox.Group>

      <Checkbox.Group defaultValue="active" disabled onChange={onChange}>
        <Checkbox value="active">Active</Checkbox>
        <Checkbox value="inactive">InActive</Checkbox>
      </Checkbox.Group>

      <Cascader
        options={options}
        onChange={onChange}
        placeholder="please select"
      />
      <Text>Select component is to select value from options</Text>

      <Select
        defaultValue="Please select"
        style={{ width: 120 }}
        onChange={handleChange}
      >
        <Option value="jack">Jack</Option>
        <Option value="lucy">Luck</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
    </>
  );
};

export default DataEntry;

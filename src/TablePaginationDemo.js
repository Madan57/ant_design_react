import React from "react";
import {
  Table,
  Pagination,
  Tag,
  Space,
  Button,
  Popconfirm,
  message,
} from "antd";

function handleConfirm(e) {
  console.log(e);
  message.success("You Click on Yes");
}

function cancel(e) {
  console.log(e);
  message.error("you click on No");
}

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Adddress",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    dataIndex: "tags",
    key: "tags",
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "Action",
    dataIndex: "action",
    key: "action",
    render: (text, record) => (
      <Space
        direction="horizontal"
        style={{ justifyContent: "space-between", alignItems: "center" }}
        size="middle"
      >
        <a>Invite {record.name}</a>
        <div
          style={{
            justifyContent: "center",
            alignContent: "space-between",
            alignItems: "center",
            float: "right",
          }}
        >
          <Popconfirm
            title="Are you sure you want to delete this item?"
            onConfirm={handleConfirm}
            onCancel={cancel}
          >
            <Button type="primary" danger style={{ justifyContent: "center" }}>
              Delete
            </Button>
          </Popconfirm>
        </div>
      </Space>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jimm Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser", "designer"],
  },
  {
    key: "3",
    name: "Joee Blackk",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

const TablePaginationDemo = () => {
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomCenter"] }}
      />
    </div>
  );
};

export default TablePaginationDemo;

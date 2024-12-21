import { Table } from "antd";
import Header from "../components/header/Header.jsx";

const CustomerPage = () => {
  const dataSource = [
    {
      key: "1",
      name: " Yusuf",
      age: 24,
      address: "23 Elazığ",
    },
    {
      key: "2",
      name: "Çakmak",
      age: 66,
      address: "56 Siirt",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Müşterilerim</h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
      </div>
    </>
  );
};

export default CustomerPage;

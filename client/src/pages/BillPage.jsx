import { Button, Card, Table } from "antd";
import { useState } from "react";
import PrintBill from "../components/bills/PrintBill.jsx";
import Header from "../components/header/Header.jsx";

const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  console.log(isModalOpen);

  return (
    <>
      <Header />
      <div className="px-6">
        <h1 className="text-4xl font-bold text-center mb-4">Faturalar</h1>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          pagination={false}
        />
        <div className="cart-total flex justify-end mt-4">
          <Card className="w-72">
            <Button
              className="mt-4 w-full"
              type="primary"
              size="large"
              onClick={() => setIsModalOpen(true)}
            >
              Yazdır
            </Button>
          </Card>
        </div>
      </div>
      <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
};

export default BillPage;

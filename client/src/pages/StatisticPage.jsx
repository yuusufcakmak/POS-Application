import { useEffect, useState } from "react";
import Header from "../components/header/Header.jsx";
import StatisticCard from "../components/statistics/StatisticCard.jsx";
import { Area, Pie } from "@ant-design/plots";
import User from "../assets/statistic/user.png";
import Money from "../assets/statistic/money.png";
import Product from "../assets/statistic/product.png";
import Sale from "../assets/statistic/sale.png";

const StatisticPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch(
      "https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json"
    )
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log("fetch data failed", error);
      });
  };

  const data2 = [
    {
      type: "Çakmak",
      value: 27,
    },
    {
      type: "Yusuf",
      value: 25,
    },
    {
      type: "Fırat",
      value: 18,
    },
    {
      type: "Üni",
      value: 15,
    },
    {
      type: "Bil",
      value: 10,
    },
    {
      type: "Müh",
      value: 5,
    },
  ];

  const config = {
    data,
    xField: "timePeriod",
    yField: "value",
    xAxis: {
      range: [0, 1],
    },
  };

  const config2 = {
    appendPadding: 10,
    data: data2,
    angleField: "value",
    colorField: "type",
    radius: 1,
    innerRadius: 0.6,
    label: {
      type: "inner",
      offset: "-50%",
      content: "{value}",
      style: {
        textAlign: "center",
        fontSize: 14,
      },
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
    statistic: {
      title: false,
      content: {
        style: {
          whiteSpace: "pre-wrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
        content: "AntV\nG2Plot",
      },
    },
  };

  return (
    <>
      <Header />
      <div className="px-6 md:pb-0 pb-20">
        <h1 className="text-4xl font-bold text-center mb-4">İstatistiklerim</h1>
        <div className="statistic-section">
          <h2 className="text-lg">
            Hoş geldin{" "}
            <span className="text-green-700 font-bold text-xl">admin</span>.
          </h2>
          <div className="statistic-cards grid xl:grid-cols-4 md:grid-cols-2 my-10 md:gap-10 gap-4">
            <StatisticCard title={"Toplam Müşteri"} amount={"10"} img={User} />
            <StatisticCard
              title={"Toplam Kazanç"}
              amount={"660.96 ₺"}
              img={Money}
            />
            <StatisticCard title={"Toplam Satış"} amount={"6"} img={Sale} />
            <StatisticCard title={"Toplam Ürün"} amount={"28"} img={Product} />
          </div>
          <div className="flex justify-between gap-10 lg:flex-row flex-col items-center">
            <div className="lg:w-1/2 lg:h-full h-72">
              <Area {...config} />
            </div>
            <div className="lg:w-1/2 lg:h-full h-72">
              <Pie {...config2} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticPage;

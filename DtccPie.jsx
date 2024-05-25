// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// ChartJS.register(ArcElement, Tooltip, Legend);

// const dummyData = [
//   {
//     contentType: "POSITIONS",
//     reportDate: [2024, 5, 11],
//     status: "READY",
//     total: 28,
//   },
//   {
//     contentType: "VALUATIONS",
//     reportDate: [2024, 5, 12],
//     status: "READY",
//     total: 30,
//   },
//   {
//     contentType: "COLLATERAL",
//     reportDate: [2024, 5, 13],
//     status: "PENDING",
//     total: 25,
//   },
//   {
//     contentType: "POSITIONS",
//     reportDate: [2024, 5, 14],
//     status: "READY",
//     total: 32,
//   },
//   {
//     contentType: "VALUATIONS",
//     reportDate: [2024, 5, 15],
//     status: "FAILED",
//     total: 20,
//   },
//   {
//     contentType: "COLLATERAL",
//     reportDate: [2024, 5, 16],
//     status: "READY",
//     total: 28,
//   },
//   {
//     contentType: "POSITIONS",
//     reportDate: [2024, 5, 17],
//     status: "PENDING",
//     total: 22,
//   },
//   {
//     contentType: "VALUATIONS",
//     reportDate: [2024, 5, 18],
//     status: "READY",
//     total: 29,
//   },
//   {
//     contentType: "COLLATERAL",
//     reportDate: [2024, 5, 19],
//     status: "FAILED",
//     total: 21,
//   },
//   {
//     contentType: "POSITIONS",
//     reportDate: [2024, 5, 20],
//     status: "READY",
//     total: 27,
//   },
//   {
//     contentType: "VALUATIONS",
//     reportDate: [2024, 5, 21],
//     status: "PENDING",
//     total: 26,
//   },
//   {
//     contentType: "COLLATERAL",
//     reportDate: [2024, 5, 22],
//     status: "READY",
//     total: 33,
//   },
//   {
//     contentType: "POSITIONS",
//     reportDate: [2024, 5, 23],
//     status: "FAILED",
//     total: 18,
//   },
//   {
//     contentType: "VALUATIONS",
//     reportDate: [2024, 5, 24],
//     status: "READY",
//     total: 35,
//   },
//   {
//     contentType: "COLLATERAL",
//     reportDate: [2024, 5, 25],
//     status: "PENDING",
//     total: 24,
//   },
// ];

// const aggregateData = (data) => {
//   return data.reduce((acc, item) => {
//     if (!acc[item.status]) {
//       acc[item.status] = 0;
//     }
//     acc[item.status] += item.total;
//     return acc;
//   }, {});
// };

// const positions = dummyData.filter((item) => item.contentType === "POSITIONS");
// const valuations = dummyData.filter(
//   (item) => item.contentType === "VALUATIONS"
// );
// const collateral = dummyData.filter(
//   (item) => item.contentType === "COLLATERAL"
// );

// const aggregatedPositions = aggregateData(positions);
// const aggregatedValuations = aggregateData(valuations);
// const aggregatedCollateral = aggregateData(collateral);

// const createChartData = (data) => {
//   return {
//     labels: Object.keys(data),
//     datasets: [
//       {
//         data: Object.values(data),
//         backgroundColor: [
//           "rgba(75, 192, 192, 0.2)",
//           "rgba(255, 99, 132, 0.2)",
//           "rgba(255, 205, 86, 0.2)",
//         ],
//         borderColor: [
//           "rgba(75, 192, 192, 1)",
//           "rgba(255, 99, 132, 1)",
//           "rgba(255, 205, 86, 1)",
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };
// };

// const DtccCharts = () => {
//   return (
//     <div style={{ display: "flex" }}>
//       <div style={{ width: "400px" }}>
//         <h2>Positions</h2>
//         <Pie data={createChartData(aggregatedPositions)} />
//       </div>
//       <div style={{ width: "400px" }}>
//         <h2>Valuations</h2>
//         <Pie data={createChartData(aggregatedValuations)} />
//       </div>
//       <div style={{ width: "400px" }}>
//         <h2>Collateral</h2>
//         <Pie data={createChartData(aggregatedCollateral)} />
//       </div>
//     </div>
//   );
// };

// export default DtccCharts;

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const dummyData = [
  {
    contentType: "POSITIONS",
    reportDate: [2024, 5, 11],
    status: "READY",
    total: 28,
  },
  {
    contentType: "VALUATIONS",
    reportDate: [2024, 5, 12],
    status: "READY",
    total: 30,
  },
  {
    contentType: "COLLATERAL",
    reportDate: [2024, 5, 13],
    status: "PENDING",
    total: 25,
  },
  {
    contentType: "POSITIONS",
    reportDate: [2024, 5, 14],
    status: "READY",
    total: 32,
  },
  {
    contentType: "VALUATIONS",
    reportDate: [2024, 5, 15],
    status: "FAILED",
    total: 20,
  },
  {
    contentType: "COLLATERAL",
    reportDate: [2024, 5, 16],
    status: "READY",
    total: 28,
  },
  {
    contentType: "POSITIONS",
    reportDate: [2024, 5, 17],
    status: "PENDING",
    total: 22,
  },
  {
    contentType: "VALUATIONS",
    reportDate: [2024, 5, 18],
    status: "READY",
    total: 29,
  },
  {
    contentType: "COLLATERAL",
    reportDate: [2024, 5, 19],
    status: "FAILED",
    total: 21,
  },
  {
    contentType: "POSITIONS",
    reportDate: [2024, 5, 20],
    status: "READY",
    total: 27,
  },
  {
    contentType: "VALUATIONS",
    reportDate: [2024, 5, 21],
    status: "PENDING",
    total: 26,
  },
  {
    contentType: "COLLATERAL",
    reportDate: [2024, 5, 22],
    status: "READY",
    total: 33,
  },
  {
    contentType: "POSITIONS",
    reportDate: [2024, 5, 23],
    status: "FAILED",
    total: 18,
  },
  {
    contentType: "VALUATIONS",
    reportDate: [2024, 5, 24],
    status: "READY",
    total: 35,
  },
  {
    contentType: "COLLATERAL",
    reportDate: [2024, 5, 25],
    status: "PENDING",
    total: 24,
  },
];

const aggregateData = (data) => {
  return data.reduce((acc, item) => {
    if (!acc[item.status]) {
      acc[item.status] = 0;
    }
    acc[item.status] += item.total;
    return acc;
  }, {});
};

const positions = dummyData.filter((item) => item.contentType === "POSITIONS");
const valuations = dummyData.filter(
  (item) => item.contentType === "VALUATIONS"
);
const collateral = dummyData.filter(
  (item) => item.contentType === "COLLATERAL"
);

const aggregatedPositions = aggregateData(positions);
const aggregatedValuations = aggregateData(valuations);
const aggregatedCollateral = aggregateData(collateral);

const createChartData = (data) => {
  return {
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 205, 86, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

const chartOptions = {
  plugins: {
    datalabels: {
      color: "black",
      formatter: (value) => {
        return value;
      },
      font: {
        weight: "bold",
        size: 14,
      },
    },
  },
};

const DtccPie = () => {
  const cardStyle = { width: "200px", height: "200px" };
  return (
    <div style={{ display: "flex", margin: "60px" }}>
      <div style={cardStyle}>
        <h2>Positions</h2>
        <Pie
          data={createChartData(aggregatedPositions)}
          options={chartOptions}
        />
      </div>
      <div style={cardStyle}>
        <h2>Valuations</h2>
        <Pie
          data={createChartData(aggregatedValuations)}
          options={chartOptions}
        />
      </div>
      <div style={cardStyle}>
        <h2>Collateral</h2>
        <Pie
          data={createChartData(aggregatedCollateral)}
          options={chartOptions}
        />
      </div>
    </div>
  );
};

export default DtccPie;

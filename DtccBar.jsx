import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
const groupByContentType = (data) => {
  return data.reduce((acc, item) => {
    const date = item.reportDate.join("-");
    if (!acc[item.contentType]) {
      acc[item.contentType] = {};
    }
    if (!acc[item.contentType][date]) {
      acc[item.contentType][date] = { READY: 0, PENDING: 0, FAILED: 0 };
    }
    acc[item.contentType][date][item.status] += item.total;
    return acc;
  }, {});
};

const groupedData = groupByContentType(dummyData);

const createBarChartData = (data) => {
  const dates = Object.keys(data).sort();
  const statusData = {
    READY: dates.map((date) => data[date].READY),
    PENDING: dates.map((date) => data[date].PENDING),
    FAILED: dates.map((date) => data[date].FAILED),
  };

  return {
    labels: dates,
    datasets: [
      {
        label: "READY",
        data: statusData.READY,
        backgroundColor: "rgba(75, 192, 192, 0.6)",
      },
      {
        label: "PENDING",
        data: statusData.PENDING,
        backgroundColor: "rgba(255, 205, 86, 0.6)",
      },
      {
        label: "FAILED",
        data: statusData.FAILED,
        backgroundColor: "rgba(255, 99, 132, 0.6)",
      },
    ],
  };
};

const DtccBar = () => {
  const positionsData = createBarChartData(groupedData.POSITIONS || {});
  const valuationsData = createBarChartData(groupedData.VALUATIONS || {});
  const collateralData = createBarChartData(groupedData.COLLATERAL || {});

  return (
    <div style={{ display: "flex", marginTop: "100px" }}>
      <div style={{ width: "500px" }}>
        <h2>Positions</h2>
        <Bar data={positionsData} options={{ responsive: true }} />
      </div>
      <div style={{ width: "500px" }}>
        <h2>Valuations</h2>
        <Bar data={valuationsData} options={{ responsive: true }} />
      </div>
      <div style={{ width: "500px" }}>
        <h2>Collateral</h2>
        <Bar data={collateralData} options={{ responsive: true }} />
      </div>
    </div>
  );
};

export default DtccBar;

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

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

const createRechartsData = (data) => {
  return Object.keys(data)
    .sort()
    .map((date) => ({
      date,
      READY: data[date].READY,
      PENDING: data[date].PENDING,
      FAILED: data[date].FAILED,
    }));
};

const ReBar = () => {
  const positionsData = createRechartsData(groupedData.POSITIONS || {});
  const valuationsData = createRechartsData(groupedData.VALUATIONS || {});
  const collateralData = createRechartsData(groupedData.COLLATERAL || {});

  const renderBarChart = (data, title) => (
    <div style={{ width: "500px", margin: "20px" }}>
      <h2>{title}</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="READY" fill="rgba(75, 192, 192, 0.6)" />
          <Bar dataKey="PENDING" fill="rgba(255, 205, 86, 0.6)" />
          <Bar dataKey="FAILED" fill="rgba(255, 99, 132, 0.6)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {renderBarChart(positionsData, "Positions")}
      {renderBarChart(valuationsData, "Valuations")}
      {renderBarChart(collateralData, "Collateral")}
    </div>
  );
};

export default ReBar;

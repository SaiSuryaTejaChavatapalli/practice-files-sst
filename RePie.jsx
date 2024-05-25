import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
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
  return Object.keys(data).map((key) => ({
    name: key,
    value: data[key],
  }));
};

const COLORS = ["#4bc0c0", "#ff6384", "#ffcd56"];

const renderPieChart = (data, title) => (
  <div style={{ width: "400px", margin: "20px" }}>
    <h2>{title}</h2>
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

const RePie = () => {
  const positionsData = createChartData(aggregatedPositions);
  const valuationsData = createChartData(aggregatedValuations);
  const collateralData = createChartData(aggregatedCollateral);

  return (
    <div
      style={{
        display: "flex",
        marginTop: "100px",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {renderPieChart(positionsData, "Positions")}
      {renderPieChart(valuationsData, "Valuations")}
      {renderPieChart(collateralData, "Collateral")}
    </div>
  );
};

export default RePie;

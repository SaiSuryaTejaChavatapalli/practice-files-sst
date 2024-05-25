import "./App.css";

// import Cdv from "./components/Cdv";
// import DynamicUploadForm from "./components/DynamicUploadForm";
// import MuiRadioButton from "./components/MuiRadioButton";
// import PDFViewer from "./components/PdfViewer";
import DtccPie from "./dtccCharts/DtccPie";
import DtccLine from "./dtccCharts/DtccLine";
import DtccBar from "./dtccCharts/DtccBar";
import ReBar from "./dtccRecharts/ReBar";
import ReLine from "./dtccRecharts/ReLine";
import RePie from "./dtccRecharts/RePie";
import ReLine2 from "./dtccRecharts/RelIne2";

// import MuiSelect from "./components/MuiSelect";
// import MuiTextField from "./components/MuiTextField";
// import MuiButton from './components/MuiButton'
// import TypographyPractice from './components/TypographyPractice'

function App() {
  console.log("Hi");
  return (
    <>
      {/* <TypographyPractice/> */}
      {/* <MuiButton/> */}
      {/* <MuiTextField /> */}
      {/* <MuiSelect /> */}
      {/* <MuiRadioButton /> */}
      {/* <DynamicUploadForm /> */}
      {/* <PDFViewer /> */}
      <DtccPie />
      <DtccLine />
      <DtccBar />
      <ReBar />
      <ReLine />
      {/* <ReLine2 /> */}
      <RePie />
    </>
  );
}

export default App;

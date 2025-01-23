import "./App.css";
import Navbar from "./components/Navbar";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <>
      <div>
        {/* <Navbar /> */}
        <Section1 />
        <Section2 />
        {/* <div className="sec3">
          <Section3 />
        </div> */}
        <Section4 />

        <div className="sec5-heading">
          <CardContent>
            <Typography gutterBottom variant="h2" component="div">
              ALL BMW MODELS
            </Typography>
            <Typography
              variant="body"
              sx={{ color: "text.secondary", fontWeight: "bold" }}
            >
              Find your BMW
            </Typography>
          </CardContent>
        </div>
        <Section5 />
      </div>
    </>
  );
}

export default App;

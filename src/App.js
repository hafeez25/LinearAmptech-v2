import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import { AboutUs, Home, Team, Innovations, NewsEvents } from "./Pages";
import { GanMMIC, RFPassive, RFPowerAmp } from "./Pages/products";
import AIandML from "./Pages/products/AIandML";
import CyberSystem from "./Pages/products/CyberSystem";
import { LAMP1, LAMP2, LAMP3, LAMP4 } from "./Pages/products/RFAmplifier";
import TempProduct from "./Pages/products/TempProduct";
import {
  PassiveA,
  PassiveB,
  PassiveC,
  PassiveD,
} from "./Pages/products/RFPassiveComp";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/innovations" exact element={<Innovations />} />
          <Route path="/news-and-events" exact element={<NewsEvents />} />
          <Route path="/about-us" exact element={<AboutUs />} />

          {/* ************PRODUCT*********************** */}

          {/* ************LAMP series******************* */}
          <Route
            path="/products/rf-amplifier/lamp-PACF1P9"
            exact
            element={<LAMP1 />}
          />
          <Route
            path="/products/rf-amplifier/lamp-PAMOCBJ"
            exact
            element={<LAMP2 />}
          />
          <Route
            path="/products/rf-amplifier/lamp-PAMOCCE"
            exact
            element={<LAMP3 />}
          />
          <Route
            path="/products/rf-amplifier/lamp-PAMOCCF"
            exact
            element={<LAMP4 />}
          />
          {/* ****************************************** */}

          {/* ************LAMP series******************* */}

          <Route
            path="/products/rf-passive/KuPD-1"
            exact
            element={<PassiveB />}
          />
          <Route
            path="/products/rf-passive/5GBPF-1"
            exact
            element={<PassiveA />}
          />
          <Route
            path="/products/rf-passive/UHFPD-1"
            exact
            element={<PassiveC />}
          />
          <Route
            path="/products/rf-passive/UHFPD-2"
            exact
            element={<PassiveD />}
          />

          {/* ****************************************** */}
          <Route
            path="/products/rf-passive/GaN-MMIC"
            exact
            element={<GanMMIC />}
          />
          <Route
            path="/products/rf-design-and-signal-processing"
            exact
            element={<TempProduct />}
          />
          <Route
            path="/products/cyber-physical-system-and-signal-processing"
            exact
            element={<CyberSystem />}
          />
          <Route path="/products/ai-and-ml" exact element={<AIandML />} />

          <Route
            path="/products/rf-power-amplifiers"
            exact
            element={<RFPowerAmp />}
          />
          <Route
            path="/products/rf-passive-components"
            exact
            element={<RFPassive />}
          />

          {/* ******************unsued ************************ */}
          {/* <Route
            path="/products/software-defined-radio"
            exact
            element={<SDR />}
          />
          <Route
            path="/products/rf-linear-nonlinear-characterization"
            exact
            element={<RFlinear />}
          />
          <Route
            path="/products/power-amplifier-linearization"
            exact
            element={<PowerAmp />}
          /> */}
          {/* ****************************************** */}

          <Route path="/team" exact element={<Team />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

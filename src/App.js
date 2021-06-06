import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBars from "./components/NavBars/NavBars";
import TopHeader from "./components/TopHeader/TopHeader";
import Footer from "./components/Footer/Footer";
import MiniFooter from "./components/MiniFooter/MiniFooter";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import Brands from "./components/Brands/Brands";
import ContactUs from "./components/ContactUs/ContactUs";
export default function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <TopHeader />
        <NavBars />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/brands">
            <Brands />
          </Route>
          <Route exact path="/contact">
            <ContactUs />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        <MiniFooter />
      </div>
    </BrowserRouter>
  );
}

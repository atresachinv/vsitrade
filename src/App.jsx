import "./App.css";
import AppPricising from "./Components/AppPricising";
import Hero from "./Components/Carousel";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import OurApps from "./Components/OurApps";
import Services from "./Components/Services";

function App() {
  return (
    <div className="main-container w100 d-flex-col">
      <Header />
      <Hero />
      <OurApps />
      <Services />
      <AppPricising />
      <Footer />
    </div>
  );
}

export default App;

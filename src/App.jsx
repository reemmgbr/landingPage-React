import "./App.css";
import Breadcruamb from "./Components/Breadcruamb/Breadcruamb";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar";
import Reviews from "./Components/Reviews/Reviews";
import Sectionthree from "./Components/Sectionthree/Sectionthree";
import SimpleSlider from "./Components/SimpleSlider/SimpleSlider";
import Tabs from "./Components/Tabs/Tabs";
function App() {
  return (
    <>
      <div className="mx-auto container w-[85%]">
        <Navbar />
        <Breadcruamb />
        <Tabs />
        <Cards />
        <Sectionthree /> <Reviews />
        <SimpleSlider />
      </div>{" "}
      <Footer />
    </>
  );
}

export default App;

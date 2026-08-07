import { useState, useEffect } from "react";
import AOS from "aos";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "animate.css";
import ProgressBar from "react-progressbar-on-scroll";
import { UseSize } from "./components/useSize";
import type { LandingPageData } from "./types/portfolio";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = (): JSX.Element => {
  const [landingPageData, setLandingPageData] = useState<LandingPageData>({});
  const { mobile } = UseSize();

  useEffect(() => {
    setLandingPageData(JsonData as LandingPageData);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      disable: mobile,
    });
    AOS.refreshHard();
  }, [landingPageData, mobile]);

  return (
    <div className="app">
      {!mobile && (
        <ProgressBar
          color="#5ca9fb"
          gradient={true}
          height={4}
          gradientColor="#5ca9fb"
        />
      )}
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;

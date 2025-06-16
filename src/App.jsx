import React from "react";
import Header from "./components/Header";
import About from "./pages/About";
import Engagement from "./pages/Engagement";
import Actuality from "./pages/Actuality";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="main-wrapper">
        <Header />
        <About />
        <Engagement />
        <Actuality />
      </div>
      <Footer />
    </>
  );
}

export default App;

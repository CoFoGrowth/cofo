import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Forms from "./components/forms/Forms";
import Automation from "./components/automation/Automation";

function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ marginTop: "100px" }}>
        {" "}
        {/* offset for fixed header */}
        <Hero />
        <Forms />
        <Automation />
      </main>
      <Footer />
    </div>
  );
}

export default App;

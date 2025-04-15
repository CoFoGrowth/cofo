import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";
import Forms from "./components/forms/Forms";

function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ marginTop: "100px" }}>
        {" "}
        {/* offset for fixed header */}
        <Hero />
        <Forms />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { useState } from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main style={{ marginTop: "100px" }}>
        {" "}
        {/* offset for fixed header */}
        <Hero />
        <section className="section-1">
          <h2>Section 1</h2>
          <p>Content for section 1</p>
        </section>
        <section className="section-2">
          <h2>Section 2</h2>
          <p>Content for section 2</p>
        </section>
        <section className="section-3">
          <h2>Section 3</h2>
          <p>Content for section 3</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;

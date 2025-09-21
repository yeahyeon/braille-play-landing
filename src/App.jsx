import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;

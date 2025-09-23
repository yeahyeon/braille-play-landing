import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import DeviceSection from "./components/DeviceSection";
import MainFeatures from "./components/MainFeatures";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <DeviceSection />
        <MainFeatures />
      </main>
      <Footer />
    </div>
  );
}

export default App;

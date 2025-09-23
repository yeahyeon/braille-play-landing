import React, { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import DeviceSection from "./components/DeviceSection";
import MainFeatures from "./components/MainFeatures";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.slide-in-left, .slide-in-right');
  
    animatedElements.forEach(el => {
      // 모바일이면 초기 transform을 translateY로 설정
      if (window.innerWidth <= 768) {
        el.style.transform = 'translateY(30px)';
        el.style.opacity = '0';
      }
    });
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          if (!el.classList.contains('animate')) {
            el.classList.add('animate');
  
            // 모바일이면 animate 적용 시 transform을 translateY로 변경
            if (window.innerWidth <= 768) {
              el.style.transform = 'translateY(0)';
              el.style.opacity = '1';
            }
          }
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1 });
  
    animatedElements.forEach(el => observer.observe(el));
  
    return () => observer.disconnect();
  }, []);
  

  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <About />
        <DeviceSection />
        <MainFeatures />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;

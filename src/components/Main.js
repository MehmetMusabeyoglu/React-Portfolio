import React,  { useState } from "react";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./styles/Main.css"


export default function Main() {
    const [currentPage, setCurrentPage] = useState("About Me");
  
       const renderPage = () => {
      if (currentPage === "About Me") {
        return <AboutMe />;
      }
      if (currentPage === "Portfolio") {
        return <Portfolio />;
      }
      if (currentPage === "Resume") {
        return <Resume />;
      }
      return <Contact />;
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
        <div>
        <header>
          <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
        <main>
          {renderPage()}
          <Footer />
        </main>
      </div>
    );
  }
  
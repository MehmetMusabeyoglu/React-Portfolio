import React,  { useState } from "react";
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';
import NavBar from './NavBar';
import './styles/Main.css'


export default function Main() {
    const [currentPage, setCurrentPage] = useState('Home');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About Me') {
        return <AboutMe />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Resume') {
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
  
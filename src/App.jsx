import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './Component/Nav';
import Footer from './Component/Footer';
import HomePage from './Pages/Home';
import AboutPage from './Pages/AboutUs';
import AcademicsPage from './Pages/Academics';
import AdmissionsPage from './Pages/Admissions';
import FacultyPage from './Pages/Faculty';
import StudentsPage from './Pages/Student';
import GalleryPage from './Pages/Gallery';
import ContactPage from './Pages/Contact';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage />} />
            <Route path="/admissions" element={<AdmissionsPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/students" element={<StudentsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
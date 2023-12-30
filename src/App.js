import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Header from './components/base-components/header/Header';
import Footer from './components/base-components/footer/Footer';
import ErrorPage from './components/base-components/errorPage/ErrorPage';

import Home from './components/main-components/home/Home';
import About from './components/main-components/about/About';
import Services from './components/main-components/services/Services';
import Projects from './components/main-components/projects/Projects';
import Blog from './components/main-components/blog/Blog';
import Contact from './components/main-components/contact/Contact';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

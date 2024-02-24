import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ListBook from './components/ListBook';
import BookProvider from './context/BookContext';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {

  return (
    <div className="container">
      <BookProvider>
        <Navbar />
        <Header />
        <Routes>
          <Route path='/' element={<ListBook />} />
          <Route path='/add' element={<AddBook />} />
          <Route path='/edit/:id' element={<EditBook />} />
          <Route path='/about' element={<About />} /> 
            <Route path='/contact' element={<Contact />} /> 
            <Route path='/products' element={<Products />} /> 
        </Routes>
        <Footer />
      </BookProvider>
    </div>
  )
}

export default App


import logo from './logo.svg';
import './App.css';
import Header  from './components/Header';
import { Footer } from './components/Footer';
import  Home  from './components/Home';
import  Listings  from './components/Listings';
import  ViewListing  from './components/ViewListing';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/groups" element={<Home/>}></Route>
        <Route path="/listings" element={<Listings/>}></Route>
        <Route path="/listing/:id" element={<ViewListing/>}></Route>
      </Routes>
      <Footer/>  
    </div>
  );
}

export default App;

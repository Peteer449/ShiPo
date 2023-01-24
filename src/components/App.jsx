import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Home from "./home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

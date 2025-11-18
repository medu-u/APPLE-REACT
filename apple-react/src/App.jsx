import React from "react";
import Nav from "./Components/Nav/Nav";
import MainSection from "./Components/MainSection/MainSection";
import Footer from "./Components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Mac from "./Pages/Mac/Mac";
import Iphone from "./Pages/Iphone/Iphone";
import Ipad from "./Pages/Ipad/Ipad";
import Watch from "./Pages/Watch/Watch";
import Tv from "./Pages/Tv/Tv";
import Music from "./Pages/Music/Music";
import Support from "./Pages/Support/Support";
import Product from "./Pages/Product/Product";
import Carts from "./Pages/Carts/Carts";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<MainSection />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/iphone" element={<Iphone />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/tv" element={<Tv/>} />
        <Route path="/music" element={<Music />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/product" element={<Product/>} />
        <Route path="/cart" element={<Carts/>} />
        <Route path="/Serach" element={<Search/>} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;

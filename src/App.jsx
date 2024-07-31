import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Sidebar from "./components/Sidebar/Sidebar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default App;

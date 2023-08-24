import { Routes, Route } from "react-router-dom";
import Product from "../product/Product";
import Category from "../category/Category";
import Home from "../home page/Home";
import Description from "../buyurtma/Description";

function App() {
  return (
    <div> 
    
      <Routes>
        <Route path="" element={<Home />}/>
        <Route path="/category" element={<Category/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path="/home/description" element={<Description/>}/>
      </Routes>
    </div>
  );
}

export default App;
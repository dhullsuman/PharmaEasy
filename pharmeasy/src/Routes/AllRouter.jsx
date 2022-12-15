import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Components/Landing/Home";
import Offer from "../Pages/Offers/Offer";
import Plus from "../Pages/Plus/Plus";
import ProductPage from "../Pages/productsPage/Productpage";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        <Route path="/Plus" element={<Plus />}></Route>
        <Route path="/Offer" element={<Offer />}></Route>

        <Route path={"/product"} element={<ProductPage />}></Route>
      </Routes>
    </div>
  );
};

export default AllRouter;

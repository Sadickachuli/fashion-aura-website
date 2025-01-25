import React from "react";
import "./App.css";
import Main from "./Components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FilteredProducts from "./Components/FiltredProducts/FilteredProducts";
import SingleProduct from "./Components/FiltredProducts/SingleProduct";
import Login from "./Components/Login/Login";

function App() {
  // You can bypass the `authUser` check by setting a default value or removing it.
  // You could either set authUser to `true` or just remove the condition.

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            // Always render the Main component, without checking authUser
            element={<Main></Main>}
          ></Route>

          <Route
            path="/filteredProducts/:type"
            element={<FilteredProducts></FilteredProducts>}
          ></Route>
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct></SingleProduct>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Login from "./pages/UserProfile/Login";
import Register from "./pages/UserProfile/Register";
import AllTours from "./pages/AllTours/AllTours";
import TourDetails from "./pages/TourDetails/TourDetails";
import BlogDetails from "./pages/BlogDetails/BlogDetails";
import ThankYou from "./pages/ThankYou/ThankYou";
import Blogs from "./pages/Blogs/Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tours" element={<AllTours />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/tours/:id" element={<TourDetails />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />}></Route>
          <Route path="/thankyou" element={<ThankYou />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

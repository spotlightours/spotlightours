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
import TourBooked from "./pages/ThankYou/TourBooked";
import TourAdded from "./pages/ThankYou/TourAdded";
import BlogAdded from "./pages/ThankYou/BlogAdded";
import Blogs from "./pages/Blogs/Blogs";
import AddTours from "./pages/Admin/AddTours";
import AddBlogs from "./pages/Admin/AddBlogs";

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
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/addTours" element={<AddTours />}></Route>
          <Route path="/addBlogs" element={<AddBlogs />}></Route>
          <Route path="/tourBooked" element={<TourBooked />}></Route>
          <Route path="/tourAdded" element={<TourAdded />}></Route>
          <Route path="/blogAdded" element={<BlogAdded />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

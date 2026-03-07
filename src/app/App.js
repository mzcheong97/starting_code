import React from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from `react-router-dom`;

import "./App.css";

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={ <Root/> }>
    // nested routes here will render along with the <Root/> component
  </Route>
));


function App() {
  return (
    <RouterProvider router={router} />  
  );
}

export default App;

import React from "react";

// import ReactDOM from 'react-dom';

import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App/App";

import HomePage from "./Components/home";

import AboutPage from "./Components/about";

import ArticlePage from "./Components/article";

import Articles from "./Components/Articles";

const container = document.getElementById("root");

const Root = createRoot(container);

Root.render(
  <React.StrictMode>

    <BrowserRouter>
      
      <Routes>

        <Route path="/" element={<App />}>

          <Route index element={<HomePage />}></Route>

          <Route path="about" element={<AboutPage />}></Route>

          <Route path="article" element={<ArticlePage />}></Route>
          
          <Route path="article/:authorId" element={<Articles />}></Route>

        </Route>

      </Routes>

    </BrowserRouter>

  </React.StrictMode>
);

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<App />}>
//           <Route index element={<HomePage />}></Route>
//           <Route path='about' element={<AboutPage />}></Route>
//           <Route path='article' element={<ArticlePage />}></Route>
//           <Route path='article/:authorId' element={ <Articles/>} ></Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

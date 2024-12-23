import React from "react";
import Home from "./Components/Home-Page/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Top_rated from "./Components/Top_Rated/Top_rated";
import Upcoming_movies from './Components/Upcoming-Movies/Upcoming_movies'
import Singlepage from "./Components/Single_page/Singlepage";
import Search_page from "./Components/Search/Search_page";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Home />} />
          <Route path="/top-rated" element={<Top_rated />} />
          <Route path="/upcoming-movies" element={<Upcoming_movies/>}/>
          <Route path='/single-page/:id' element={<Singlepage/>}/>
          <Route path='/search' element={<Search_page/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;

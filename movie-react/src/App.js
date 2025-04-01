import React from "react";
import {Layout} from "antd";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Home from "./pages/home";
import NewMovies from "./pages/newMovies";
import Popular from "./pages/popular";
import Search from "./pages/search/search";
import Movie from "./pages/movie/movie";
import Error404 from "./pages/error404/error404";

import MenuTop from "./components/MenuTop/MenuTop";

function App() {
  const {Header, Content} = Layout;

  return (
    <Router> 
      <Layout>
        <Header style={{zIndex:1}}><MenuTop /></Header>
        <Content>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new-movies" element={<NewMovies />} />
            <Route path="/popular" element={<Popular />} />
            <Route path="/search" element={<Search />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;

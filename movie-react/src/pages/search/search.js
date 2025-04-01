import React, { useState, useEffect } from "react";
import { Row, Col, Input } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import MovieCatalog from "../../components/MovieCatalog/MovieCatalog";
import Footer from "../../components/Footer/Footer";
import { URL_API, API } from "../../utils/contants";

import "./search.scss";

function Search() {
  const location = useLocation(); // Usamos useLocation para obtener la ubicación
  const navigate = useNavigate(); // Usamos useNavigate para la navegación
  const [movieList, setMovieList] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    (async () => {
      const searchValue = queryString.parseUrl(location.search); // Obtén los parámetros de la URL
      const { s } = searchValue.query;
      const response = await fetch(
        `${URL_API}/search/movie?api_key=${API}&language=es-ES&query=${s}&page=1`
      );
      const movies = await response.json();

      setSearchValue(s);
      setMovieList(movies);
    })();
  }, [location.search]); // Vuelve a ejecutar cuando cambien los parámetros de búsqueda

  const onChangeSearch = (e) => {
    const urlParams = queryString.parse(location.search); // Analiza los parámetros actuales
    urlParams.s = e.target.value; // Actualiza el parámetro de búsqueda
    navigate(`?${queryString.stringify(urlParams)}`); // Cambia la URL sin recargar la página
    setSearchValue(e.target.value);
  };

  return (
    <Row>
      <Col span={12} offset={6} className="search">
        <h1>Busca tu película</h1>
        <Input value={searchValue} onChange={onChangeSearch} />
      </Col>
      {movieList.results && (
        <Row>
          <Col span={24}>
            <MovieCatalog movies={movieList} />
          </Col>
        </Row>
      )}
      <Col span={24}>
        <Footer />
      </Col>
    </Row>
  );
}

export default Search;
import React from "react";
import {Row, Col} from "antd"
import useFetch from "../hooks/useFetch"
import {URL_API, API} from "../utils/contants"

import SliderMovies from "../components/SliderMovies/SliderMovies";
import MovieList from "../components/MovieList/MovieList";

export default function Home() {

    const newMovies = useFetch(`${URL_API}/movie/now_playing?api_key=${API}&language=es-ES&page=1`)
    const popularMovies = useFetch(`${URL_API}/movie/popular?api_key=${API}&language=es-ES&page=1`)

    console.log(popularMovies)


    return (
        <div>
            <SliderMovies movies={newMovies}/>
            <Row>
                <Col span={12}>
                <MovieList title="Peliculas Populares" movies={popularMovies} />
                </Col>
                <Col span={12}>
                ....
                </Col>
            </Row>
        </div>
    )
}
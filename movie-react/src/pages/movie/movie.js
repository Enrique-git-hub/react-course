import React, { useState } from "react";
import { Row, Col, Button } from "antd";
import { useParams } from "react-router-dom";
import moment from 'moment'
import '@ant-design/v5-patch-for-react-19';

import useFetch from "../../hooks/useFetch";
import { URL_API, API } from "../../utils/contants";
import Loading from "../../components/Loading/Loading";
import ModalVideo from "../../components/ModalVideo/ModalVideo";

import "./movie.scss"

export default function Movie() {
    const {id} = useParams()
    const movieInfo = useFetch(`${URL_API}/movie/${id}?api_key=${API}&language=es-ES&page=1`)
    
    if(movieInfo.loading || !movieInfo.result){
        return <Loading/>
    }

    return (<RenderMovie movie={movieInfo.result}/>)
}

function RenderMovie(props) {
    const {movie: {title, backdrop_path, poster_path}} = props
    const backdropPpath = `https://image.tmdb.org/t/p/original/${backdrop_path}`
    

    return (
        <div className="movie" style={{backgroundImage: `url('${backdropPpath}')`}}>
            <div className="movie__dark"/>
           <Row>
                <Col span={8} offset={3} className="movie__poster"><PosterMovie image={poster_path}/></Col>
                <Col span={10} className="movie__info"><MovieInfo movieInfo={props.movie}/></Col>
           </Row>
        </div>
    )
}

function PosterMovie(props) {
    const {image} = props
    const posterPath = `https://image.tmdb.org/t/p/original/${image}`

    return <div style={{backgroundImage: `url('${posterPath}')`}}/>
}

function MovieInfo(props) {
    const {
      movieInfo: { id, title, release_date, overview, genres }
    } = props;
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const videoMovie = useFetch(
      `${URL_API}/movie/${id}/videos?api_key=${API}&language=es-ES`
    );
    
    const openModal = () => setIsVisibleModal(true);
    const closeModal = () => setIsVisibleModal(false);
  
    const renderVideo = () => {
      if (videoMovie.result) {
        if (videoMovie.result.results.length > 0) {
          return (
            <>
              <Button icon=">" onClick={openModal}>
                Ver trailer
              </Button>
              <ModalVideo
                videoKey={videoMovie.result.results[0].key}
                videoPlatform={videoMovie.result.results[0].site}
                isOpen={isVisibleModal}
                close={closeModal}
              />
            </>
          );
        }
      }else{
        setTimeout(() => {<Loading/>}, 3000)
      }
    };
  
    return (
      <>
        <div className="movie__info-header">
          <h1>
            {title}
            <span>{moment(release_date, "YYYY-MM-DD").format("YYYY")}</span>
          </h1>
          {renderVideo()}
        </div>
        <div className="movie__info-content">
          <h3>General</h3>
          <p>{overview}</p>
  
          <h3>Generos</h3>
          <ul>
            {genres.map(gender => (
              <li key={gender.id}>{gender.name}</li>
            ))}
          </ul>
        </div>
      </>
    );
  }
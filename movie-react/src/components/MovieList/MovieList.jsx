import React from "react";
import {List, Avatar, Button} from 'antd'
import {Link} from 'react-router-dom'
import Loading from '../Loading/Loading'

import './MovieList.scss'

export default function MovieList(props) {
    const {title, movies} = props

    if (movies.loading || !movies.result) {
        return <Loading />
    }

    return (
        <List className="movie-list" size="default" header={<h2>{title}</h2>} bordered dataSource={movies.result.results} renderItem={movie => <RenderMovie movie={movie}/>}/>
    )
}

function RenderMovie(props) {
    const {movie: {id, title, poster_path}} = props
    const posterPath = `https://image.tmdb.org/t/p/original${poster_path}`
    return (
        <List.Item className="movie-list__movie" >
            <List.Item.Meta avatar={<Avatar src={posterPath}/>} title={<Link to={`/movie/${id}`}>{title}</Link>}/>
            <Link to={`/movie/${id}`}><Button type="primary" shape="circle" icon=">"/></Link>
        </List.Item>
    )
}
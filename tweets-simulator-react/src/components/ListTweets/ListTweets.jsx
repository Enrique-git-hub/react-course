import React from "react";
import {Grid2} from '@mui/material'

import Tweet from "../Tweet/Tweet";

import './ListTweets.scss'

export default function ListTweets(props) {
    const {allTweets, deleteTweet} = props

    if(!allTweets || allTweets.length === 0) {
        return(
            <div className="list-tweets-empty">
            <h2>No hay Tweets...</h2>
        </div>
        )
    }else {
        return (
            <Grid2 container spacing={3} className="list-tweets">
                {allTweets.map((tweet, i) => (
                    <Grid2 key={i} size={{xs: 4, sm: 4}}>
                        <Tweet
                        tweet={tweet} index={i} deleteTweet={deleteTweet}></Tweet>
                    </Grid2>
                ))}
            </Grid2>
        );
    }
    }

    

    
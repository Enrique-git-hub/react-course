import Header from "./components/Header/Header";
import SendTweet from "./components/SendTweet/SendTweet";
import ListTweets from "./components/ListTweets/ListTweets";

import {Container, Snackbar} from "@mui/material"
import {React, useState, useEffect} from "react";

import { TWEET_STORAGE } from './utils/constants'
function App() {
  const [toastProps, setToastProps] = useState({
    open: false,
    text: null
  })
  const [allTweets, setAllTweets] = useState([])
  const [reloadTweets, setReloadTweets] = useState(false)

  useEffect(() => {
    const allTweetsStorage = localStorage.getItem(TWEET_STORAGE)
    const allTweetsArray = JSON.parse(allTweetsStorage)
    setAllTweets(allTweetsArray)
    setReloadTweets(false)
  }, [reloadTweets])

  const deleteTweet = (index) => {
    allTweets.splice(index, 1)
    setAllTweets(allTweets)
    localStorage.setItem(TWEET_STORAGE, JSON.stringify(allTweets))
    setReloadTweets(true)
  }

  return (
    <div className="App">
      <Container className="tweets-simulator" maxWidth={false}>
        <Header/>
        <SendTweet setToastProps={setToastProps} allTweets={allTweets}/>
        <ListTweets allTweets={allTweets} deleteTweet={deleteTweet}/>
        <Snackbar anchorOrigin={{vertical:"top", horizontal:"right"}} open={toastProps.open} autoHideDuration={1000} message={<span id="message-id">{toastProps.text}</span>}/>
      </Container>
    </div>
  );
}

export default App;

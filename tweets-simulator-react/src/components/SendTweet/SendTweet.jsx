import {React, useState} from 'react'
import moment from "moment"

import {Fab} from "@mui/material"
import AddIcon from "@mui/icons-material/Add"
import ModalContainer from '../ModalContainer/ModalContainer'
import FormSendTweet from '../FormSendTweet/FormSendTweet'

import './SendTweet.scss'
import { TWEET_STORAGE } from '../../utils/constants'

export default function SendTweet(props) {
    const {setToastProps, allTweets} = props
    const [isOpenModal, setIsOpenModal] = useState(false)

    const openModal = () => {
        setIsOpenModal(true)
    }

    const closeModal = () => {
        setIsOpenModal(false)
    }

    const sendTweet = (event, formValue) => {
        event.preventDefault()
        const {name, tweet} = formValue
        let allTweetsArray = []

        if(allTweets) {
            allTweetsArray = allTweets
        }

        if(!name || !tweet) {
            setToastProps({
                open: true,
                text: "Todos los campos son obligatorios"
            })
        } else {
            formValue.time = moment()
            allTweetsArray.push(formValue)
            localStorage.setItem(TWEET_STORAGE, JSON.stringify(allTweetsArray))
            setToastProps({
                open: true,
                text: "Tweet enviado correctamente"
            })
            closeModal()
        }

        allTweetsArray = []
    }

    return (
        <div className='send-tweet'>
            <Fab className='send-tweet__open' color='primary' aria-label='add' onClick={openModal}>
                <AddIcon/>
            </Fab>

            <ModalContainer isOpenModal={isOpenModal} closeModal={closeModal}>
                <FormSendTweet sendTweet={sendTweet}/>
            </ModalContainer>
        </div>
    )
}
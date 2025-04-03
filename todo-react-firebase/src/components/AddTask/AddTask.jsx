import React, {useState} from "react";
import {Form, Button} from "react-bootstrap"
import {compact, isEmpty} from "lodash"
import {getFirestore, collection, addDoc} from "firebase/firestore"

import { ReactComponent as Send } from "../../assets/send.svg"
import app from "../../utils/firebase" 

import "./AddTask.scss"


const db = getFirestore(app)

export default function AddTask() {
    const [task, setTask] = useState("")

    // console.log(app);
    const onSubmit = (e) => {
        e.preventDefault()
        if (!isEmpty(task)) {
           taskManager(task)
           setTask("")
        }
    }

    return (
        <Form onSubmit={onSubmit} className="add-task">
            <input type="text" placeholder="nueva Tarea..." onChange={(e) => setTask(e.target.value)} value={task}/>
            <Button type="submit">
                <Send />
            </Button>
        </Form>
    )
}

async function taskManager(task) {
    try 
    {
        const coleccionRef = collection(db, "tasks")
        const newDocument = await addDoc(coleccionRef, {
            name: task,
            completed: false,
            dateOfCreation: new Date()
        })
        console.log("Documento creado " + newDocument.id);
        
    } 
    catch(e) 
    {
        console.log(e);
    }
}
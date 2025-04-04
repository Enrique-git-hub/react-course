import React from "react";
import { doc, getFirestore, collection, updateDoc, deleteDoc } from 'firebase/firestore';

import {ReactComponent as Check} from "../../assets/check.svg"
import {ReactComponent as Delete} from "../../assets/delete.svg"
import app from '../../utils/firebase';
import "./Task.scss"

export default function Task(props) {
    const {task, setReload} = props
    const db = getFirestore(app);

    const completeTask = async (id) => {
        try {
            const docRef = doc(db, 'tasks', id);
            await updateDoc(docRef, {
                completed: true
            });
            setReload(true)
    
        } catch (e) {
            console.log(e);
        }

        deleteTask(id)
    };

    const deleteTask = async (id) => {
        setTimeout(async () => {
            try {
                const docRef = doc(db, 'tasks', id);
                await deleteDoc(docRef)
                setReload(true)
        
            } catch (e) {
                console.log(e);
            }
        }, 2000)
    }

    return (
        <div className="task">
            <div><Check className={task.completed ? "completed" : ""} onClick={() => completeTask(task.id)}/></div>
            <div>{task.name}</div>
            {/* <div><Delete/></div> */}
        </div>
    )
}
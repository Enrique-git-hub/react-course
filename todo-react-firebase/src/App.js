import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import { map, size } from 'lodash';
import { getDocs, getFirestore, collection, orderBy, query } from 'firebase/firestore';

import AddTask from './components/AddTask/AddTask';
import Task from './components/Task/Task';
import app from './utils/firebase';

import './App.scss';

const db = getFirestore(app);

function App() {
  const [tasks, setTasks] = useState(null);
  const [reload, setReload] = useState(false)
  const arrayTasks = []
  const idArrayTasks = [arrayTasks.length]
  console.log(tasks);
  

  useEffect(() => {
    getTasks();
    setReload(false)
  }, [reload]); 

  const getTasks = async () => {
    try {
      const coleccionRef = collection(db, 'tasks');
      const q = query(coleccionRef, orderBy('completed'));
      const response = await getDocs(q)

      response.docs.forEach((task) => {
        const data = task.data();
        data.id = task.id;
      
        if (!idArrayTasks.includes(data.id)) {
          idArrayTasks.push(data.id);
          arrayTasks.push(data);
        }
      });

      setTasks(arrayTasks); 
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container fluid className='app'>
      <div className='title'>
        <h2>tareas</h2>
      </div>

      <Row className='todo'>
        <Col className='todo__title' xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <h2>today</h2>
        </Col>
        <Col className='todo__list' xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>

          {!tasks ? (
            <div className='loading'>
              <Spinner/>
            </div>
          ) : size(tasks) === 0 ? (
          <h3>No hay tareas</h3>
          ) : (
            map(tasks, (task, index) => (
              <Task key={index} task={task} setReload={setReload}/>
            ))
          )}

        </Col>
        <Col className='todo__input' xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <AddTask setReload={setReload}/>
        </Col>
      </Row>
    </Container>
  );
}

export default App;

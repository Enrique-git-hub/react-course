import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { map } from 'lodash';
import { getDocs, getFirestore, collection, orderBy, query } from 'firebase/firestore';

import AddTask from './components/AddTask/AddTask';
import app from './utils/firebase';

import './App.scss';

const db = getFirestore(app);

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []); // Ejecutar solo una vez cuando el componente se monta.

  const getTasks = async () => {
    try {
      const coleccionRef = collection(db, 'tasks');
      const q = query(coleccionRef, orderBy('name'));
      const response = await getDocs(q);

      const newTasks = response.docs.map((task) => task.data());
      setTasks(newTasks);  // Actualizar el estado con las tareas obtenidas.
      console.log(newTasks);
      
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
        </Col>
        <Col className='todo__input' xs={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <AddTask />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      position?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Asfakur Rahman",
      age: 25,
      img: "https://i.ibb.co/RDYgLK8/Untitled-1.jpg",
      position: "Full Mern Stack Developer",
    }
  ])

  return (
    <div className="App">
      <h1>Pioneer IT</h1>
      <h3>List of all employees</h3>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;

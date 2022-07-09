import './App.css';
import React, { useEffect, useState } from 'react';
import List from './components/List';
import Detail from './components/Detail';

export default function App() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState({});
  const url = 'https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json';

  useEffect(() => {
    fetch(url)
    .then((response) => response.json())
    .then((data) => setList(data))
  }, []);

  const clickItem = (data) => () =>{
    setSelected(data);
  }

  return (
    <div className="main-page">
      <List list={list} getInformation={clickItem}/>
      <Detail selected={selected}/>
    </div>
  );
}
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Menu from './components/Menu';


function App() {

  const [openBars, setOpenBars] = useState(false)
  const [search, setSearch] = useState("");

     
  return (
    <div className="App">
      <Header toggleMenu={() => setOpenBars(!openBars)} setSearch={setSearch}/>
      <Menu openBars ={openBars} setOpenBars={setOpenBars}/>
      <Main  search={search}/>
    </div>
  );
}

export default App;

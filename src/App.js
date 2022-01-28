import { useState } from 'react';
import './App.scss';
import Products from './components/Products';
import Upload from "./components/Upload" 
import {BiMessageSquareAdd, BiMessageSquareMinus} from "react-icons/bi"

function App() {
  const [toggle, setToggle] = useState(true)
  return (
    <div className="app">
      <div className="top">
        <span>admin<span>Panel</span></span>
      </div>
      <div className="controller">
        {toggle?<BiMessageSquareAdd onClick={()=>setToggle(!toggle)} className='icon' />:<BiMessageSquareMinus onClick={()=>setToggle(!toggle)} className='icon' />}
      </div>
      <div className="body">
        <div style={toggle ? { display: "none" } : {
          display: "flex",
          width: "100%",
          justifyContent: "center"
        }} >
          <Upload />
        </div>
        <div className="col1">
          <Upload />
        </div>
        <div className="col2">
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;

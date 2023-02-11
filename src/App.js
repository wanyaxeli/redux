import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import img1 from './assets/w1.png'
import {useSelector} from 'react-redux'
import { useEffect } from 'react';
import Links from './components/Links';
function App() {
  return (
    <div className="App">
      <Header/>
      <Links/>
    </div>
  );
}

export default App;

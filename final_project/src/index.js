import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Header from "./components/Navbar";
import "./App.css"
import Slider from './components/Slider';
import Footer from './components/Footer';
const Index = () => {
  return (
    <>
    <Header/>
    <Slider/>
    <App/>
    <Footer/>
    </>
  )
}

ReactDOM.render(<Index />, document.getElementById("root"));
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ScrollButton from './components/ScrollButton';
import { Content, Heading } from './components/Styles';
// import { BiArrowFromLeft } from "react-icons/bi";
// import { Link, useRoutes } from "react-router-dom";
// import Header from "./components/Header";
// import Slider from "./components/Slider";
// import Footer from "./components/Footer";

import "./App.css";
const App = () => {
  const [city, setCity] = useState([]);
  const [loaded, setLoader] = useState(false);
  const API = "http://localhost:3000/cities";
  const fetchData = async () => {
    const retrievedData = await fetch(API)
      .then((retrieved) => retrieved.json())
      .then((retrDt) => {
        console.log(retrDt);
        setCity(retrDt);
        setLoader(true);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
     <ScrollButton />
      <div className="d-flex w-75  justify-content-between my-5 mx-auto flex-wrap text-center" id="po">
        {loaded
          ? city.map((el, i) => {
              return (
                <Card key={i}style={{ width: '18rem' }}className="my-5">
        <div className='ss'>
      <Card.Img variant="top" src={el.src} className="img-fluid h-65" />
      <Card.Body>
        <Card.Title >{el.name}</Card.Title>
        <Card.Text>
          {el.location}
        </Card.Text>
      </Card.Body>
      
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{el.Age}</ListGroup.Item>
        <ListGroup.Item>{el.downloads}</ListGroup.Item>
        <ListGroup.Item>Free to play</ListGroup.Item>
      </ListGroup>
    
      </div>
    </Card>
          )})
          : null}
      </div>
      {/* <Footer /> */}
    </>
  );
};
export default App;










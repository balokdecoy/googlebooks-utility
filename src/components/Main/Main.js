import React, { useState, useEffect } from "react";
import Nav from "../Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Form, Card, Container, Row, Col, Image } from "react-bootstrap/";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


export default function Main(props) {

    const [title, setTitle] = useState("");
    const [bookData, setData] = useState([]);

    function buildQueryURL(e) {
        e.preventDefault();
        var key = process.env.API
        var queryURL = "https://www.googleapis.com/books/v1/volumes?q=" + title;
        axios.get(queryURL).then((data) => {
          var searchReturn = data.data.items;
          setData(searchReturn)
          console.log(searchReturn)
          console.log(bookData);
        }).catch((error) => {
          console.log(error)
        })
    }
 
    return (
        <div>
        <div className="container">
        <Nav />
          <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <form className="d-flex" onSubmit={buildQueryURL}>
                <input className="form-control" id="search-term" type="text" placeholder="Search" aria-label="Book or Author Search"
               value={title} onChange={(e) => setTitle(e.target.value)}></input>
                <button className="btn btn-outline-success" id="run-search" type="submit">Search</button>
                </form>
            </div>
          </div>
       
        <div className="container">
            {bookData.map((x => { return (
              <div className="row" id="main">
                <Card border="secondary" style={{ borderRadius: "15px", margin: "10px" }}>
                  <Card.Body className="row">
                    <Col xs={6} md={4} lg={8}>
                    <Image variant="left" src={x.volumeInfo.imageLinks !== undefined ? 
                    x.volumeInfo.imageLinks.smallThumbnail + "/171px180" : ""} fluid></Image>
                    </Col>
                    <div className="col-10">
                    <Card.Title>{x.volumeInfo.title}</Card.Title>
                    <Card.Title>by {x.volumeInfo.authors} </Card.Title>
                    <Card.Text>{x.volumeInfo.description}</Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            )}))}
        </div>
        </div>
        </div>
    ) 
}
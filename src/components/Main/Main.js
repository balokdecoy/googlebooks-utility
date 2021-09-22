import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Form, Card, Container, Row, Col } from "react-bootstrap/";
import axios from "axios";
import dotenv from "dotenv";
import { SameValueNonNumber } from "es-abstract/es2016";
dotenv.config();


export default function Main(props) {

    const [title, setTitle] = useState("");
    const [bookData, setData] = useState([])

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
          <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Google Books Search Utility</a>
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
                <Card>
                  <Card.Body>
                    <Card.Img variant="left" src={x.volumeInfo.imageLinks.smallThumbnail}></Card.Img>
                    <Card.Title>{x.volumeInfo.title}</Card.Title>
                    <Card.Title>{x.volumeInfo.authors}</Card.Title>
                    <Card.Text>{x.volumeInfo.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            )}))}
        </div>
        </div>
        </div>
    ) 
}
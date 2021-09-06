import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Form, Card, Container, Row, Col } from "react-bootstrap/";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();


export default function Main(props) {

    // const [values, setValues ] = useState(initialValues);

    // const [validated, setValidated] = useState(false);

    const [title] = useState();

    function buildQueryURL(e) {
        e.preventDefault();
        var key = process.env.API
        // var searchTerm =  e.target.value;
        var queryURL = "https://www.googleapis.com/books/v1/volumes?q=harry+potter";
        axios.get(queryURL).then((data) => {
            var searchReturn = data.data.items;
            console.log(searchReturn[0].volumeInfo.title)
          })
        return (queryURL)
    }
 
    return (
        <div>
        <div className="container">
          <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">Google Books Search Utility</a>
                <form className="d-flex" onSubmit={buildQueryURL}>
                <input className="form-control me-2" id="search-term" type="text" placeholder="Search" aria-label="Book or Author Search"></input>
                <button className="btn btn-outline-success" id="run-search" type="submit">Search</button>
                </form>
            </div>
          </div>
       
        <div className="container">
            <div className="row" id="main">
                <div className="col-4" id="pic"></div>
                <img id="book-pic"></img>
            </div>
        </div>
        </div>
        </div>
    )
    
}
import React from 'react';
import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from "./Banner";
import Nav from './Nav';

function App() {
  return (
    <div className="app">

      <Nav/>

      {/* Nav box */}

      {/* Banner */}
      <Banner/>

      <Row title="NullVoid Originals" fetchUrl={requests.fetchNullVoidOriginals}
      isLargeRow
      ></Row>
      <Row title="Trending Now" fetchUrl={requests.fetchTrending}></Row>
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated}></Row>
      <Row title="Action" fetchUrl={requests.fetchActionMovies}></Row>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}></Row>
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}></Row>
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies}></Row>
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}></Row>
      
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchtopAlbum } from "./api/api";
// import Card from "./components/Card/Card";
import Section from "./components/Section/Section";

const App = () => {
  const [albums, setAlbums] = useState([]);

  const albumCard = async () => {
    const data = await fetchtopAlbum();
    console.log(data);
    setAlbums(data);
  };
  useEffect(() => {
    albumCard();
  }, []);
  // fetchsongsItems();

  return (
    <div>
      <Navbar />
      <Hero />
      {/* {albums.map((item) => {
        return <Card data={item} type="album" key={item.title} />;
      })} */}
      {/* <Card (data)/> */}
      <div>
        <Section data={albums} type="album" title="Top Album" />
      </div>
    </div>
  );
};

export default App;

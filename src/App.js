import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchtopAlbum, fetchnewAlbum, fetchSongs } from "./api/api";
// import Card from "./components/Card/Card";
import SongsTabs from "./components/Tabs/SongsTabs";
import Section from "./components/Section/Section";
import AccordianFaq from "./components/AccordianFaq/AccordianFaq";

const App = () => {
  const [albums, setAlbums] = useState([]);
  const [newalbum, setNewalbum] = useState([]);
  const [songsData, setSongsData] = useState([]);

  const albumCard = async () => {
    try {
      const data = await fetchtopAlbum();
      console.log(data);
      setAlbums(data);
    } catch (err) {
      console.log(err);
    }
  };
  const generateAllSongsData = async () => {
    try {
      const res = await fetchSongs();
      setSongsData(res);
    } catch (err) {
      console.log(err);
    }
  };
  const generateNewSongsData = async () => {
    try {
      const res = await fetchnewAlbum();
      setNewalbum(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    albumCard();
    generateNewSongsData();
    generateAllSongsData();
  }, []);

  return (
    <div>
      <Navbar data={albums} />
      <Hero />
      {/* {albums.map((item) => {
        return <Card data={item} type="album" key={item.title} />;
      })} */}
      {/* <Card (data)/> */}
      <Section data={albums} type="album" title="Top Albums" />
      <Section data={newalbum} type="album" title="New Albums" />
      <SongsTabs data={songsData} type="songs" title="Songs" />
      <AccordianFaq />
    </div>
  );
};

export default App;

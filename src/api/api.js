import axios from "axios";

export const backendEndPoint = "https://qtify-backend-labs.crio.do/";

export const fetchtopAlbum = async () => {
  try {
    const getTopAlbum = await axios.get(`${backendEndPoint}/albums/top`);

    return getTopAlbum.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchnewAlbum = async () => {
  try {
    const newAlbumm = await axios.get(`${backendEndPoint}/albums/new`);

    return newAlbumm.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchSongs = async () => {
  try {
    const res = await axios.get(`${backendEndPoint}/songs`);

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

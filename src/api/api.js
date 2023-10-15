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

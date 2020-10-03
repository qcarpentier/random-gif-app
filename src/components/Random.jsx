import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_KEY;

const Random = () => {
  const [gif, setGif] = useState("");

  const fetchGif = async () => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const {
      data: { data },
    } = await axios.get(url);

    const gifSrc = data.images.downsized_large.url;
    console.log(gifSrc);
    setGif(gifSrc);
  };

  useEffect(() => {
    fetchGif();
  }, []);

  const handleClick = () => {
    fetchGif();
  };

  return (
    <div className="container">
      <h1>Random Image</h1>
      <img src={gif} alt="GIF Image" />
      <button onClick={handleClick}>Change image</button>
    </div>
  );
};

export default Random;

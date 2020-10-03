import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = process.env.REACT_APP_GIPHY_KEY;

const Tag = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("");

  const fetchGif = async (tag) => {
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {
      data: { data },
    } = await axios.get(url);

    const gifSrc = data.images.downsized_large.url;
    console.log(gifSrc);
    setGif(gifSrc);
  };

  useEffect(() => {
    fetchGif("dogs");
  }, []);

  const handleTag = (e) => {
    setTag(e.target.value);
  };

  const handleClick = () => {
    fetchGif(tag);
  };

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} alt="GIF Image" />
      <input type="text" onChange={handleTag} value={tag} />
      <button onClick={handleClick}>Change image</button>
    </div>
  );
};

export default Tag;

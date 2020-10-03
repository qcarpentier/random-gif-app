import React, { useState } from "react";

import useGif from "../useGif";

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);

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

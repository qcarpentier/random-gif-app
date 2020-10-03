import React from "react";

import useGif from "../useGif";

const Random = () => {
  const { gif, fetchGif } = useGif();

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

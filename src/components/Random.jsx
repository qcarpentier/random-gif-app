import React from "react";

import useGif from "../useGif";

const Random = () => {
  const { gif, fetchGif } = useGif();

  return (
    <div className="container">
      <h1>Random Gif</h1>
      <img src={gif} alt="GIF Image" />
      <button onClick={() => fetchGif()}>Change image</button>
    </div>
  );
};

export default Random;

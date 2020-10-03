import React, { useState } from "react";

import useGif from "../useGif";

const Tag = () => {
  const [tag, setTag] = useState("dogs");
  const { gif, fetchGif } = useGif(tag);

  return (
    <div className="container">
      <h1>Random {tag} Gif</h1>
      <img src={gif} alt="GIF Image" />
      <input type="text" onChange={(e) => setTag(e.target.value)} value={tag} />
      <button onClick={() => fetchGif(tag)}>Change image</button>
    </div>
  );
};

export default Tag;

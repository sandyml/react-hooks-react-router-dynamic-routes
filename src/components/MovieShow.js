import React from "react";
import { useParams } from "react-router-dom";

// i keep the notes in to i can go back and look at what we did from the code along -sandra yun

function MovieShow({ movies }) {
// call useParams to access the `params` from the url
  const params = useParams();
  console.log(params);

  return (
    <div>
      {/* And here we access the `movieId` stored in `params` to render 
        information about the selected movie */}
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;

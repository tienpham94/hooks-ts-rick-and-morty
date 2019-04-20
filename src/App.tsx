import React from "react";
import { Store } from "./Store";

const URL =
  "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

export default function App() {
  const { state, dispatch } = React.useContext(Store);

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  });
  const fetchDataAction = async () => {
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: "FETCH_DATA",
      payload: dataJSON._embedded.episodes
    });
  };

  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favourite episode!!!</p>
      <section>
        {state.episodes.map((episode: any) => (
          <section key={episode.id}>
            <img src={episode.image.medium} />
            <div>{episode.name}</div>
            <section>
              Season: {episode.season} Number: {episode.number}
            </section>
          </section>
        ))}
      </section>
    </>
  );
}

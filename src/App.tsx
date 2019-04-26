import React from "react";

import { Store } from "./Store";
import { IEpisode } from "./interfaces";

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

  const toggleFavAction = (episode: IEpisode) =>
    dispatch({
      type: "ADD_FAV",
      payload: episode
    });

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
              <div>
                Season: {episode.season} Number: {episode.number}
              </div>
              <button type="button" onClick={() => toggleFavAction(episode)}>
                Fav
              </button>
            </section>
          </section>
        ))}
      </section>
    </>
  );
}

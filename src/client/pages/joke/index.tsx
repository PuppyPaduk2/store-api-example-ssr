import * as React from "react";
import { store, contractStores, contractDepends, depend } from "store-api";
import { useContext, useStore } from "store-api-react";

const jokeApi = store({
  init: { id: -1, type: "", setup: "", punchline: "" },
  api: ({ setState }) => ({
    next: () => fetch("https://official-joke-api.appspot.com/random_joke")
      .then(result => result.json())
      .then(setState),
  }),
})

const stores = contractStores({ joke: jokeApi });

const loadJoke = depend({
  name: "loadJoke",
  stores: stores.config(),
  handler: ({ joke }) => joke.api.next(),
});

const depends = contractDepends({ loadJoke });

export const PageJoke: React.FC = () => {
  useContext(depends.depend.loadJoke);

  const joke = useContext(stores.store.joke);
  const value = useStore(joke);

  return (
    <div>
      <div>Page</div>
      <div>{JSON.stringify(value)}</div>
    </div>
  );
};

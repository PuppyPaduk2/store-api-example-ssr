import { store } from "store-api";

export const numApi = store({
  init: -1,
  api: ({ setState, getState }) => ({
    inc: () => setState((prev) => prev + 1),
    dec: () => setState(getState() - 1),
  }),
});
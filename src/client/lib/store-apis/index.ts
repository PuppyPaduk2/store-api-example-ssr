import { store } from "store-api";

export const numberApi = store({
  init: 0,
  api: ({ setState, getState }) => ({
    set: (value: number) => setState(value),
    inc: () => setState((prev) => prev + 1),
    dec: () => setState(getState() - 1),
  }),
});

export const stringApi = store({
  init: "",
  api: ({ setState }) => ({
    set: (value: string) => setState(value),
  }),
});

export const arrayStringApi = store({
  init: [],
  api: ({ setState, getState }) => ({
    add: (value: string) => setState([...getState(), value]),
    remove: (value: string) => {
      const index = getState().indexOf(value);

      if (index > -1) {
        const next = [...getState()];
        next.splice(index, 1);
        setState(next);
      }

      return getState();
    },
  }),
});

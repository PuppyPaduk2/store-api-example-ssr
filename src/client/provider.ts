import { numApi } from "./lib/store-apis";

export const getCountClick = (init?: number) =>
  numApi({ name: "count-click", init });

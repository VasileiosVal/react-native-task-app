import { ENABLE_LOADER, DISABLE_LOADER } from "./actionTypes";

export const enableLoader = () => ({
  type: ENABLE_LOADER
});
export const disableLoader = () => ({
  type: DISABLE_LOADER
});

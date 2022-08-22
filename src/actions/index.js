import { CALL_PUBLIC_COPIES } from "./actionTypes";

export const callPublicCopies = (payload) => ({
  type: CALL_PUBLIC_COPIES,
  payload,
});

export default callPublicCopies;

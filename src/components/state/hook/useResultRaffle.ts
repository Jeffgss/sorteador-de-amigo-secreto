import { useRecoilValue } from "recoil";
import { secretFriendResultState } from "../atom";

export const useResultRaffle = () => {
  return useRecoilValue(secretFriendResultState);
};

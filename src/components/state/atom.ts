import { atom } from "recoil";

export const participantListState = atom<string[]>({
  key: "participantListState",
  default: [],
});

import { atom } from "recoil";

export const participantListState = atom<string[]>({
  key: "participantListState",
  default: [],
});

export const secretFriendResultState = atom<Map<string, string>>({
  key: "secretFriendResultState",
  default: new Map(),
});

export const errorState = atom<string>({
  key: "errorState",
  default: "",
});

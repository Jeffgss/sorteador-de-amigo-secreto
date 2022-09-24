import { useSetRecoilState } from "recoil";
import { secretFriendResultState } from "../atom";
import { holdRaffle } from "../helpers/holdRaffle";
import { useParticipantsList } from "./useParticipantsList";

export const useRaffle = () => {
  const participants = useParticipantsList();
  const setResult = useSetRecoilState(secretFriendResultState);

  return () => {
    const result = holdRaffle(participants);
    setResult(result);
  };
};

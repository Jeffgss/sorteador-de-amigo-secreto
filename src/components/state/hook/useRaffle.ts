import shuffle from "just-shuffle";
import { useSetRecoilState } from "recoil";
import { secretFriendResultState } from "../atom";
import { useParticipantsList } from "./useParticipantsList";

export const useRaffle = () => {
  const participants = useParticipantsList();

  const setResult = useSetRecoilState(secretFriendResultState);

  return () => {
    const totalParticipants = participants.length;

    const shuffled = shuffle(participants);

    const result = new Map<string, string>();

    for (let index = 0; index < totalParticipants; index++) {
      const indexFriend = index === totalParticipants - 1 ? 0 : index + 1;

      result.set(shuffled[index], shuffled[indexFriend]);
    }
    setResult(result);
  };
};

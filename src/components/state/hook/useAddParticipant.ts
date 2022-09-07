import { useSetRecoilState } from "recoil";
import { participantListState } from "../atom";

export const useAddParticipant = () => {
  const setList = useSetRecoilState(participantListState);

  return (participantName: string) => {
    return setList((currentList) => [...currentList, participantName]);
  };
};

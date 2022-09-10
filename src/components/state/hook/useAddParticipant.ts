import { useRecoilValue, useSetRecoilState } from "recoil";
import { errorState, participantListState } from "../atom";

export const useAddParticipant = () => {
  const setList = useSetRecoilState(participantListState);
  const list = useRecoilValue(participantListState);
  const setError = useSetRecoilState(errorState);

  return (participantName: string) => {
    if (list.includes(participantName)) {
      setError("Nomes duplicados não são permitidos!");
      return;
    }
    return setList((currentList) => [...currentList, participantName]);
  };
};

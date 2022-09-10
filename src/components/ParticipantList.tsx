import { useParticipantsList } from "./state/hook/useParticipantsList";

export const ParticipantList = () => {
  const participants: string[] = useParticipantsList();

  return (
    <ul>
      {participants.map((participant) => (
        <li key={participant}>{participant}</li>
      ))}
    </ul>
  );
};

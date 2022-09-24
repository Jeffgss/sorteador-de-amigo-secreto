import React, { useState } from "react";
import { useParticipantsList } from "../components/state/hook/useParticipantsList";
import { useResultRaffle } from "../components/state/hook/useResultRaffle";

const Raffle = () => {
  const participants = useParticipantsList();

  const [participantOfTheTime, setParticipantOfTheTime] = useState("");
  const [secretFriend, setSecretFriend] = useState("");
  const result = useResultRaffle();

  const raffle = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (result.has(participantOfTheTime)) {
      setSecretFriend(result.get(participantOfTheTime)!);
    }
  };

  return (
    <section>
      <form onSubmit={raffle}>
        <select
          required
          name="participantOfTheTime"
          id="participantOfTheTime"
          placeholder="Selecione o seu nome"
          value={participantOfTheTime}
          onChange={(event) => setParticipantOfTheTime(event.target.value)}
        >
          {participants.map((participant) => (
            <option key={participant}>{participant}</option>
          ))}
        </select>
        <button>Sortear</button>
      </form>
      {secretFriend && <p role={"alert"}>{secretFriend}</p>}
    </section>
  );
};

export default Raffle;

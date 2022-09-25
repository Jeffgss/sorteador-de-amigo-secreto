import React, { useState } from "react";
import Card from "../components/Card";
import { useParticipantsList } from "../components/state/hook/useParticipantsList";
import { useResultRaffle } from "../components/state/hook/useResultRaffle";

import "./Raffle.css";

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
    <Card>
      <section className="raffle">
        <h2>Quem vai tirar o papelzinho?</h2>
        <form onSubmit={raffle}>
          <select
            required
            name="participantOfTheTime"
            id="participantOfTheTime"
            placeholder="Selecione o seu nome"
            value={participantOfTheTime}
            onChange={(event) => setParticipantOfTheTime(event.target.value)}
          >
            <option>Selecione seu nome</option>
            {participants.map((participant) => (
              <option key={participant}>{participant}</option>
            ))}
          </select>
          <p>Clique em em sortear para ver quem é seu amigo secreto!</p>
          <button className="button-raffle">Sortear</button>
        </form>
        {secretFriend && <p role={"alert"}>{secretFriend}</p>}
        <footer className="raffle">
          <img
            src="/imagens/aviao.png"
            className="airplane"
            alt="Um desenho de um avião de papel"
          />
        </footer>
      </section>
    </Card>
  );
};

export default Raffle;

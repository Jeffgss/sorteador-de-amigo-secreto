import { useParticipantsList } from "../components/state/hook/useParticipantsList";

const Raffle = () => {
  const participants = useParticipantsList();

  return (
    <section>
      <form>
        <select name="participantOfTheTime" id="participantOfTheTime">
          {participants.map((participant) => (
            <option key={participant}>{participant}</option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default Raffle;

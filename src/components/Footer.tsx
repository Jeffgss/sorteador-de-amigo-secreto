import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "./state/hook/useParticipantsList";

const Footer = () => {
  const participants = useParticipantsList();

  const navigate = useNavigate();

  const start = () => {
    navigate("/sorteio");
  };

  return (
    <footer>
      <button onClick={start} disabled={participants.length < 3}>
        Iniciar brincadeira
      </button>
    </footer>
  );
};

export default Footer;

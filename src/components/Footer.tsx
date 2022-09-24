import React from "react";
import { useNavigate } from "react-router-dom";
import { useParticipantsList } from "./state/hook/useParticipantsList";
import "./Footer.css";

const Footer = () => {
  const participants = useParticipantsList();

  const navigate = useNavigate();

  const start = () => {
    navigate("/sorteio");
  };

  return (
    <footer className="footer-config">
      <button
        className="button"
        onClick={start}
        disabled={participants.length < 3}
      >
        Iniciar brincadeira
      </button>
      <img src="/imagens/sacolas.png" alt="Sacolas de compras" />
    </footer>
  );
};

export default Footer;

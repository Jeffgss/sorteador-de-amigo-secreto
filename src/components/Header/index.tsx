import "./styles.css";

const Header = () => {
  return (
    <header className="header">
      <div
        className="image-logo"
        role="img"
        aria-label="Logo do Sorteador"
      ></div>
      <img
        className="participant"
        src="/imagens/participante.png"
        alt="Participante com um presente na mão"
      />
    </header>
  );
};

export default Header;

import React from "react";

import "./styles.css";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => {
  return <div className="card">{children}</div>;
};

export default Card;

import React, { useRef, useState } from "react";
import { useAddParticipant } from "./state/hook/useAddParticipant";
import { useErrorMessage } from "./state/hook/useErrorMessage";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const addToList = useAddParticipant();

  const errorMessage = useErrorMessage();

  const addParticipant = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addToList(name);
    setName("");
    if (inputRef.current != null) {
      inputRef.current.focus();
    }
  };

  return (
    <form onSubmit={addParticipant}>
      <div className="group-input-btn">
        <input
          ref={inputRef}
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Insira os nomes dos participantes"
        />
        <button disabled={!name}>Adicionar</button>
      </div>
      {errorMessage && (
        <p className="alert error" role={"alert"}>
          {errorMessage}
        </p>
      )}
    </form>
  );
};

export default Form;

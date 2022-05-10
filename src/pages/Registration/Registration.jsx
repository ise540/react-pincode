import Input from "../../components/Input";
import Button from "../../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cl from "./Registration.module.css";

export default function Registarion() {
  const [input, setInput] = useState("");

  const nav = useNavigate();

  const savePass = (e) => {
    e.preventDefault();
    localStorage.setItem("pass", input);
    nav("/login");
  };

  return (
    <div className={cl.pageContent}>
      <Input className={cl.input} onChange={(e) => setInput(e.target.value)} />
      <Button className={cl.saveButton} onClick={savePass}>
        Сохранить
      </Button>
    </div>
  );
}

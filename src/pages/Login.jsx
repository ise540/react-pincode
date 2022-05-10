import "../App.css";
import PincodeForm from "../components/PincodeForm/PincodeForm";
import { Navigate } from "react-router-dom";
import Modal from "../components/Modal/Modal";
import { useState } from "react";

export default function Login() {
  const [modal, setModal] = useState(false);

  const [isValidPincode, setIsValidPincode] = useState(false);

  function validatePincode(pincodeObj) {
    const pincode = Object.entries(pincodeObj).reduce(
      (previos, current, index) => {
        previos[current[0]] = current[1];
        return previos;
      },
      []
    ).join('');
    
    setIsValidPincode(pincode===localStorage.getItem("pass"));
  }

  const showModal = () => setModal(true);

  return localStorage.getItem("pass") ? (
    <div className="Login">
      <Modal visible={modal} setVisible={setModal}>
        {isValidPincode
        ?<h1>Верный пароль</h1>
        :<h1>Неверный пароль</h1>}
      </Modal>
      <PincodeForm 
        validtionModal = {showModal}
        validator={validatePincode}
        length={localStorage.getItem("pass").length}
      />

    </div>
  ) : (
    <Navigate to="/registration" />
  );
}

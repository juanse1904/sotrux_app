import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicCopies } from "../../store/publicCopies";
import MessageIlustration from "../../assets/resendMessage-ilustration.svg";
import LoadCircle from "../../components/loadCircle/LoadCircle";
import "./ValidationSuccessStyles.css";

const ValidationResend = () => {
  const history = useNavigate();

  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    const callCopies = async () => {
      await dispatch(publicCopies("user_confirmation"));
      await setLoading(false);
    };
    callCopies();
  }, []);

  return (
    <>
      {loading ? (
        <LoadCircle />
      ) : (
        <main className={`userConfirmationMainContainer`}>
          <section className="messageContainer">
            <img src={MessageIlustration} alt="error ilustration" />
            <h3>
              Se ha enviado un nuevo código de validación a tu dirección de correo electónico registrada en Sotrux. Si
              no lo encuentras por favor revisa tu bandeja de Spam.
            </h3>
            <input
              type="button"
              value="Continuar"
              onClick={() => {
                history("/user-confirmation");
              }}
            />
          </section>
        </main>
      )}
    </>
  );
};

export default ValidationResend;

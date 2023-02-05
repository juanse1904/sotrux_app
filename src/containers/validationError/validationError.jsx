import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { publicCopies } from "../../ducks/publicCopies";
import MessageIlustration from "../../assets/errorMessage-ilustration.svg";
import LoadCircle from "../../components/loadCircle/LoadCircle";
import "./ValidationErrorStyles.css";

const ValidationError = () => {
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
              El correo electrónico y/o el código de seguridad no coinciden. Por favor ingresa los datos correctos para
              la confirmación.
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

export default ValidationError;

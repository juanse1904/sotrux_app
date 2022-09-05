import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { publicCopies } from "../../ducks/publicCopies";
import MessageIlustration from "../../assets/successMessage-ilustration.svg";
import LoadCircle from "../../components/loadCircle/LoadCircle";
import "./ValidationSuccessStyles.css";

const ValidationSuccess = () => {
  const history = useNavigate();

  const [loading, setLoading] = useState(true);

  const windowCopies = useSelector((state) => state.publicWindows.user_confirmation);
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
              ¡Felicitaciones! Ya puedes ingresar a Sotrux, para ello te dirigiremos a la página de login para que con
              tu e-mail y contraseña puedas acceder al aplicativo.
            </h3>
            <input
              type="button"
              value="Continuar"
              onClick={() => {
                history("/login");
              }}
            />
          </section>
        </main>
      )}
    </>
  );
};

export default ValidationSuccess;

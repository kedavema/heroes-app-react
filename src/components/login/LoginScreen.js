import { useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";

export const LoginScreen = () => {

  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const [ formValues, handleInputChange ] = useForm({
    userName: "",
  });
  const {userName} = formValues;

  const lastPath = localStorage.getItem('lastPath');
  
  const handleLogin = e => {
    e.preventDefault();

    const action =  {
      type: types.login,
      payload: {
        name: `${userName}`,
      }
    };

    dispatch(action);

    navigate(lastPath, {
      replace: true
    })

  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleLogin}>
        <input 
          type="text"
          placeholder="Ingresa tu nombre aquí..."
          className="form-control mb-3 mt-2"
          name="userName"
          autoComplete="off"
          value={ userName }
          onChange={ handleInputChange }
          required
        />
        <button 
          type="submit"
          className="btn btn-primary"
        >
          Ingresar
        </button>
      </form>
    </div>
  );
};

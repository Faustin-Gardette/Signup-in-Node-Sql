import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputs = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8081/login", values)
      .then((res) => {
        if (res.data === "Success") {
          navigate("/");
        } else {
          alert("Mauvais email ou mdp ou pas inscrit");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            onChange={handleInputs}
            name="email"
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={handleInputs}
            name="password"
          />
        </div>
        <button type="submit">CONNEXION</button>
        <span>
          Avez-vous un compte ? <Link to="/register">S'enregistrer</Link>{" "}
        </span>
      </form>
    </div>
  );
};

export default Login;

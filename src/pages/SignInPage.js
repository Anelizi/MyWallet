import styled from "styled-components"
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import MyWalletLogo from "../components/MyWalletLogo"

export default function SignInPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const setToken = props

  function login(e) {
    e.preventDefault();

    axios
      .post(`${process.env.REACT_APP_API_URL}/sing-in`, { email, password })
      .then((res) => {
        setToken(res.data);
        navigate("/home");
        setToken(localStorage.getItem("token"));
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }
  return (
    <SingInContainer>
      <MyWalletLogo />
      <form onSubmit={login}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
          >
            Entrar
          </button>
        </form>

      <Link to={"/cadastro"}>
        Primeira vez? Cadastre-se!
      </Link>
    </SingInContainer>
  )
}

const SingInContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    cursor: pointer;
  }
`

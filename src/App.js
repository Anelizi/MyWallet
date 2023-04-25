import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import styled from "styled-components"
import HomePage from "./pages/HomePage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import TransactionsPageEntrada from "./pages/TransactionPageEntrada"

export default function App() {
  const [token, setToken] = useState()

  return (
    <PagesContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInPage setToken={setToken}/>} />
          <Route path="/cadastro" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage token={token} setToken={setToken} />} />
          <Route path="/nova-transacao-entrada" element={<TransactionsPageEntrada />} />
        </Routes>
      </BrowserRouter>
    </PagesContainer>
  )
}

const PagesContainer = styled.main`
  background-color: #8c11be;
  width: calc(100vw - 50px);
  max-height: 100vh;
  padding: 25px;
`

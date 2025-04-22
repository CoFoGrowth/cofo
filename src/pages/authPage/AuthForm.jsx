import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 200px);
  background-color: ${({ theme }) => theme.colors.background};
  padding: 2rem 1rem;
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 1rem;
  width: 100%;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #b47cfd;
    box-shadow: 0 0 0 3px rgba(180, 124, 253, 0.1);
  }
`;

const Button = styled.button`
  background-image: linear-gradient(120deg, #ff7fc2 20%, #b47cfd 60%);
  box-shadow: -25px 0px 20px -10px #ff7fc2 inset;
  border: none;
  border-radius: 30px;
  color: #fff;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease,
    background-image 0.3s ease;
  font-weight: bold;

  &:hover {
    transform: translateY(-3px);
    background-image: linear-gradient(120deg, #b47cfd 0%, #ff7fc2 100%);
    box-shadow: 0px 5px 30px 0px rgba(255, 255, 255, 0.3);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
    transform: none;
  }
`;

const SwitchButton = styled.button`
  background: none;
  border: none;
  color: #b47cfd;
  font-size: 0.875rem;
  cursor: pointer;
  text-decoration: underline;
  margin-top: 1rem;
  transition: color 0.2s;

  &:hover {
    color: #ff7fc2;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const WelcomeContainer = styled.div`
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const AuthForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("register");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const api = axios.create({
    baseURL: "https://api.airtable.com/v0/appJ0Fnjjn1oJdLEk/Users",
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email || !password || !username) {
      setError("Wypełnij wszystkie pola");
      setIsLoading(false);
      return;
    }

    try {
      const checkResponse = await api.get(
        `?filterByFormula=OR(Email="${email}",Username="${username}")`
      );

      if (checkResponse.data.records.length > 0) {
        const existingUser = checkResponse.data.records[0].fields;
        if (existingUser.Email === email) {
          setError("Użytkownik o tym adresie email już istnieje");
        } else if (existingUser.Username === username) {
          setError("Ta nazwa użytkownika jest już zajęta");
        }
        setIsLoading(false);
        return;
      }

      await api.post("", {
        fields: { Email: email, Password: password, Username: username },
      });

      alert("Zarejestrowano! Możesz się zalogować.");
      setPage("login");
      setIsLoading(false);
    } catch (error) {
      setError("Błąd rejestracji: " + (error.message || "Nieznany błąd"));
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email || !password) {
      setError("Wypełnij wszystkie pola");
      setIsLoading(false);
      return;
    }

    try {
      const response = await api.get(`?filterByFormula=Email="${email}"`);

      if (response.data.records.length === 0) {
        setError("Nie znaleziono użytkownika o tym adresie email");
        setIsLoading(false);
        return;
      }

      const user = response.data.records[0];

      if (user.fields.Password === password) {
        setIsLoggedIn(true);
        setUsername(user.fields.Username || "");
        setIsLoading(false);
      } else {
        setError("Niepoprawne hasło");
        setIsLoading(false);
      }
    } catch (error) {
      setError("Błąd logowania: " + (error.message || "Nieznany błąd"));
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setUsername("");
  };

  if (isLoggedIn) {
    return (
      <FormContainer>
        <FormCard>
          <WelcomeContainer>
            <Title>Witaj, {username || email}!</Title>
            <p>Twój email: {email}</p>
            <Button onClick={handleLogout}>Wyloguj</Button>
          </WelcomeContainer>
        </FormCard>
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      <FormCard>
        <Title>{page === "register" ? "Rejestracja" : "Logowanie"}</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={page === "register" ? handleRegister : handleLogin}>
          {page === "register" && (
            <Input
              type="text"
              placeholder="Nazwa użytkownika"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
            />
          )}
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
          />
          <Input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading
              ? "Przetwarzanie..."
              : page === "register"
              ? "Zarejestruj"
              : "Zaloguj"}
          </Button>
        </Form>
        <SwitchButton
          onClick={() => setPage(page === "register" ? "login" : "register")}
          disabled={isLoading}
        >
          {page === "register"
            ? "Mam konto, chcę się zalogować"
            : "Nie mam konta, chcę się zarejestrować"}
        </SwitchButton>
      </FormCard>
    </FormContainer>
  );
};

export default AuthForm;

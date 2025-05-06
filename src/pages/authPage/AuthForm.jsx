import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";

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

const WelcomeContainer = styled.div`
  text-align: center;
`;

const ErrorMessage = styled.p`
  color: #e74c3c;
  text-align: center;
  margin-bottom: 1rem;
  font-size: 0.875rem;
`;

const InfoText = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.875rem;
  color: #718096;
`;

const AuthForm = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Sprawdź, czy użytkownik jest zalogowany przy ładowaniu komponentu
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setIsLoggedIn(true);
      setEmail(userData.email || "");
      setUsername(userData.username || "");
      setUserId(userData.userId || "");
    }
  }, []);

  const api = axios.create({
    baseURL: "https://api.airtable.com/v0/appJ0Fnjjn1oJdLEk/Users",
    headers: {
      Authorization: `Bearer pat9CmZDY2QnawlZv.f8531fe9cf7ccb09232a87a3e3dc2d2807d4ed532c3c160d016d284862ad01f5`,
      "Content-Type": "application/json",
    },
  });

  // Funkcja do szyfrowania hasła
  const encryptPassword = (plainPassword) => {
    const secretKey = process.env.REACT_APP_SECRET_KEY || "cofo-secret-key";
    return CryptoJS.AES.encrypt(plainPassword, secretKey).toString();
  };

  // Funkcja do deszyfrowania hasła
  const decryptPassword = (encryptedPassword) => {
    const secretKey = process.env.REACT_APP_SECRET_KEY || "cofo-secret-key";
    const bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (!email || !password || !userId || !username) {
      setError("Wypełnij wszystkie pola");
      setIsLoading(false);
      return;
    }

    try {
      // Sprawdzamy logowanie na podstawie emaila i UserID
      const response = await api.get(
        `?filterByFormula=AND(Email="${email}",UserID="${userId}")`
      );

      if (response.data.records.length === 0) {
        setError(
          "Nieprawidłowe dane logowania. Sprawdź email i ID użytkownika."
        );
        setIsLoading(false);
        return;
      }

      const user = response.data.records[0];
      const storedPassword = user.fields.Password;

      // Sprawdzamy czy hasło jest zaszyfrowane
      const isEncrypted = storedPassword.length > 50; // Prosta heurystyka do sprawdzenia czy hasło jest zaszyfrowane

      // Porównujemy hasła
      const passwordMatches = isEncrypted
        ? password === decryptPassword(storedPassword)
        : password === storedPassword;

      // Sprawdzamy czy hasło i nazwa użytkownika są prawidłowe
      if (passwordMatches && user.fields.Username === username) {
        // Zapisujemy dane użytkownika w localStorage (z zaszyfrowanym hasłem)
        const userData = {
          email: email,
          username: username,
          userId: userId,
          recordId: user.id,
        };
        localStorage.setItem("user", JSON.stringify(userData));

        setIsLoggedIn(true);
        setIsLoading(false);

        // Wysyłamy zdarzenie o zmianie stanu logowania
        window.dispatchEvent(
          new CustomEvent("loginStateChanged", {
            detail: { isLoggedIn: true },
          })
        );

        // Po zalogowaniu przekieruj do strefy contentu
        navigate("/content");
      } else {
        setError(
          "Nieprawidłowe dane logowania. Sprawdź hasło i nazwę użytkownika."
        );
        setIsLoading(false);
      }
    } catch (error) {
      setError("Błąd logowania: " + (error.message || "Nieznany błąd"));
      console.error(error);
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setUserId("");

    // Wysyłamy zdarzenie o zmianie stanu logowania
    window.dispatchEvent(
      new CustomEvent("loginStateChanged", {
        detail: { isLoggedIn: false },
      })
    );
  };

  if (isLoggedIn) {
    return (
      <FormContainer>
        <FormCard>
          <WelcomeContainer>
            <Title>Witaj, {username}!</Title>
            <p>Twój email: {email}</p>
            <p>Twoje ID: {userId}</p>
            <Button onClick={handleLogout}>Wyloguj</Button>
          </WelcomeContainer>
        </FormCard>
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      <FormCard>
        <Title>Logowanie</Title>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Form onSubmit={handleLogin}>
          <Input
            type="text"
            placeholder="Nazwa użytkownika"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            disabled={isLoading}
            autoComplete="username"
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            autoComplete="email"
          />
          <Input
            type="text"
            placeholder="ID użytkownika"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            disabled={isLoading}
            autoComplete="off"
          />
          <Input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            autoComplete="current-password"
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Przetwarzanie..." : "Zaloguj"}
          </Button>
        </Form>
        <InfoText>
          Nie masz dostępu? Skontaktuj się z administratorem, aby uzyskać dane
          logowania.
        </InfoText>
      </FormCard>
    </FormContainer>
  );
};

export default AuthForm;

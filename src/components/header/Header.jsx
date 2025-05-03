import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledHeader,
  Logo,
  Button,
  LogoutButton,
  ButtonsContainer,
} from "./StyledHeader";
import logoImage from "/src/assets/images/Logo.webp";

const Header = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Sprawdź, czy użytkownik jest zalogowany
    const loggedInUser = localStorage.getItem("user");
    setIsLoggedIn(!!loggedInUser);

    // Nasłuchuj zdarzenia loginStateChanged
    const handleLoginStateChange = (event) => {
      setIsLoggedIn(event.detail.isLoggedIn);
    };

    window.addEventListener("loginStateChanged", handleLoginStateChange);

    // Nasłuchuj zmian w localStorage
    const handleStorageChange = (e) => {
      if (e.key === "user") {
        setIsLoggedIn(!!e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("loginStateChanged", handleLoginStateChange);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const scrollToSection = () => {
    const contactSection = document.getElementById("kontakt-cta");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    // Usuń dane użytkownika z localStorage
    localStorage.removeItem("user");
    setIsLoggedIn(false);

    // Wywołaj własne zdarzenie
    window.dispatchEvent(
      new CustomEvent("loginStateChanged", {
        detail: { isLoggedIn: false },
      })
    );

    // Przekieruj do strony logowania
    navigate("/auth");
  };

  return (
    <StyledHeader>
      <Logo src={logoImage} alt="CoFo Logo" />
      {children}
      <ButtonsContainer>
        {isLoggedIn && (
          <LogoutButton onClick={handleLogout}>WYLOGUJ SIĘ</LogoutButton>
        )}
        <Button className="main-button" onClick={scrollToSection}>
          WSPÓŁPRACUJ Z NAMI
        </Button>
      </ButtonsContainer>
    </StyledHeader>
  );
};

export default Header;

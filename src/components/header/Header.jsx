import { StyledHeader, Logo, Button } from "./StyledHeader";
import logoImage from "/src/assets/images/Logo.webp";

const Header = ({ children }) => {
  const scrollToSection = () => {
    const contactSection = document.getElementById("kontakt-cta");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledHeader>
      <Logo src={logoImage} alt="CoFo Logo" />
      {children}
      <Button onClick={scrollToSection}>WSPÓŁPRACUJ Z NAMI</Button>
    </StyledHeader>
  );
};

export default Header;

import { StyledHeader, Logo, Button } from "./StyledHeader";
import logoImage from "/src/assets/images/Logo.webp";

const Header = ({ children }) => {
  const scrollToSection = () => {
    console.log("Scroll to collaboration section");
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

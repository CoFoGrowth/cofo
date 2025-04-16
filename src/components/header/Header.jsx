import { StyledHeader, Logo, Button } from "./StyledHeader";
import logoImage from "/src/assets/images/Logo.webp";

const Header = () => {
  const scrollToSection = () => {
    console.log("Scroll to collaboration section");
  };

  return (
    <StyledHeader className="container">
      <Logo src={logoImage} alt="CoFo Logo" />
      <Button onClick={scrollToSection}>WSPÓŁPRACUJ Z NAMI</Button>
    </StyledHeader>
  );
};

export default Header;

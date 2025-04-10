import { StyledHeader, Logo, Button } from "./StyledHeader";

const Header = () => {
  const scrollToSection = () => {
    console.log("Scroll to collaboration section");
  };

  return (
    <StyledHeader>
      <Logo src="/src/assets/images/Logo.webp" alt="CoFo Logo" />
      <Button onClick={scrollToSection}>WSPÓŁPRACUJ Z NAMI</Button>
    </StyledHeader>
  );
};

export default Header;

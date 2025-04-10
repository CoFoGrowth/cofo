import { StyledFooter, Copyright, Links, Link } from "./StyledFooter";

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>
        Copyright© 2025 CoFo All rights reserved. Powered by Strony Jakubowe
      </Copyright>
      <Links>
        <Link href="#">Cookies</Link>
        <Link href="#">Polityka prywatności</Link>
      </Links>
    </StyledFooter>
  );
};

export default Footer;

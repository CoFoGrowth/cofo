import { StyledFooter, Copyright, Links, Link } from "./StyledFooter";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>
        Copyright© 2025 CoFo All rights reserved. Powered by Strony Jakubowe
      </Copyright>
      <Links>
        <RouterLink to="/cookies">
          <Link as="span">Cookies</Link>
        </RouterLink>
        <RouterLink to="/privacy-policy">
          <Link as="span">Polityka prywatności</Link>
        </RouterLink>
      </Links>
    </StyledFooter>
  );
};

export default Footer;

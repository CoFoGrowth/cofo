import { StyledFooter, Copyright, Links, Link } from "./StyledFooter";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

const StyledRouterLink = styled(RouterLink)`
  text-decoration: none;
  color: white;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>
        Copyright© 2025 CoFo All rights reserved. Powered by Strony Jakubowe
      </Copyright>
      <Links>
        <StyledRouterLink to="/cookies">
          <Link as="span">Cookies</Link>
        </StyledRouterLink>
        <StyledRouterLink to="/privacy-policy">
          <Link as="span">Polityka prywatności</Link>
        </StyledRouterLink>
      </Links>
    </StyledFooter>
  );
};

export default Footer;

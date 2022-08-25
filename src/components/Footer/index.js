import { BsLinkedin, BsGithub } from "react-icons/bs";
import { StyledFooter, Icons, FooterLinks } from "./style";
function Footer() {
  return (
    <StyledFooter>
      <Icons>
        <FooterLinks href="https://www.linkedin.com/in/superfishal/">
          <BsLinkedin />
        </FooterLinks>
        <FooterLinks href="https://github.com/superfishal">
          <BsGithub />
        </FooterLinks>
      </Icons>
    </StyledFooter>
  );
}

export default Footer;

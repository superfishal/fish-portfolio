import { BsLinkedin, BsGithub } from "react-icons/bs";
import { StyledFooter, Icons } from "./style";
function Footer() {
  return (
    <StyledFooter>
      <Icons>
        <a href="https://www.linkedin.com/in/superfishal/">
          <BsLinkedin />
        </a>
        <a href="https://github.com/superfishal">
          <BsGithub />
        </a>
      </Icons>
    </StyledFooter>
  );
}

export default Footer;

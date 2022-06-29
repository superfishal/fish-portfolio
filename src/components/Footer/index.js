import { BsLinkedin, BsGithub } from "react-icons/bs";
import { StyledFooter, Icons } from "./style";
function Footer() {
  return (
    <StyledFooter>
      <Icons>
        <BsLinkedin />
        <BsGithub />
      </Icons>
    </StyledFooter>
  );
}

export default Footer;
